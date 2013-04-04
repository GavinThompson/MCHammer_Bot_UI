serialport = require "serialport"
SerialPort = serialport.SerialPort
_ = require 'underscore'
_s = require 'underscore.string'

log = (msg, complete) ->
  green = '\x1B[0;32m'
  red = '\x1B[0;31m'
  _rs = '\x1B[0m'
  width = process.stdout.getWindowSize()[0]

  if complete == true
    msg = _s.rpad(msg, width - 10, '.') + "  [ #{green}DONE#{_rs} ]"

  console.log msg


module.exports = class Bot

  _motorKeys: ['a', 's', 'd', 'f']
  motorOutputs: {a: 0, s: 0, d: 0, f: 0}

  constructor: (@opts) ->

  connect: ->
    if @opts.moch
      log ""
      log _s.rpad("", process.stdout.getWindowSize()[0], "-")
      log "\x1B[0;31mTESTING/MOCH MODE\x1B[0m"
      log _s.rpad("", process.stdout.getWindowSize()[0], "-")
      log ""
    log "Connecting.."
    return setTimeout(@_onConnected, 0) if @opts.moch

    @_serial = new SerialPort @opts.port,
      baudrate: @opts.baud
      parser: serialport.parsers.readline("\n") 

    @_serial.on "open", @_onConnected
    @_serial.on "data", @_onData

  set_motor: (motor, opts) ->
    speed = if opts.to? then opts.to else 10
    direction = if speed > 0 then 'f' else 'r'
    speed_char = String.fromCharCode 48 + Math.abs Math.round(speed)
    @motorOutputs[motor] = speed

    @_serial.write("#{motor}#{direction}#{speed_char}\n") if !@opts.moch
    log("Sent: Set motor #{motor} to #{speed*10}% power.")

  _onConnected: =>
      log "Connected  ", true
      # Starts all the motors
      #log "Moving Forward"

      # Stop all the motors on connection
      @set_motor motor, to: 0 for motor in @_motorKeys
      #setTimeout (=> @set_motor 'a', to: 0), 3000

  _onData: (data) =>
      log('Received: ' + line) for line in data.split("\n")