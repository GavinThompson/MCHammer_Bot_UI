Bot = require './bot'

bluetooth = true
moch = false

if bluetooth
  opts = 
    port: "/dev/tty.FireFly-CB32-RNI-SPP"
    baud: 115200
else
  opts = 
    port: "/dev/tty.usbserial-A9007MTf"
    baud: 9600

opts.moch = moch

bot = new Bot(opts)

bot.connect()


stdin = process.stdin
stdin.setRawMode(true)
stdin.resume();
stdin.setEncoding( 'utf8' );

callibration = {a: 1, s: 1, d: 1, f: 1}

bindings =
  w: {a: +1, s: +1, d: +1, f: +1}
  s: {a: -1, s: -1, d: -1, f: -1}
  # Turn
  a: {a: +1, s: -1, d: +1, f: -1}
  d: {a: -1, s: +1, d: -1, f: +1}
  # Strafe
  e: {a: +1, s: -1, d: -1, f: +1}
  q: {a: -1, s: +1, d: +1, f: -1}

stdin.on 'data', ( key ) ->
  # ctrl-c ( end of text )
  process.exit() if ( key == '\u0003' )
  # write the key to stdout all normal like

  if (b = bindings[key])?
    console.log dir for motor, dir of b
    bot.set_motor motor, to: dir*10 for motor, dir of b

  if key == 'x'
    bot.set_motor motor, to: 0 for motor in ['a', 's', 'd', 'f']

