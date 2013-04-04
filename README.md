# Mc HammerBot
Playing with a robot to learn JavaScript, AJAX and a touch of Node.js

## Installation

1. Install NodeJS
``brew install nodejs``

2. Use the Node Packaged Modules (npm) command to install CoffeeScript
``npm install coffee``

3. Clone the repository
``git clone https://github.com/bitmakerlabs/mc_hammer_bot.git``

4. Move to the cloned repo's directory
``cd mc_hammer_bot``

5. Install Node Package Modules
``npm install``

## Setting Up Bluetooth (Mac OSX)

1. Click the bluetooth icon on your utilities navbar
2. Click "Set Up Bluetooth Device..."
3. Click to highlight the "Firefly-CB32" device
4. Click "Continue"
5. In System Preferences, click "Bluetooth"
6. Select the "FireFly-CB32" device
7. Click the gear icon in the lower left corner of the window
8. In the dropdown, click "Edit Serial Ports..."
9. Make sure the device is selected and the checkbox is checked
10. Click "Apply"

## Running the Server

### To Connect to the Mc Hammer Bot via Command Line Interface
`coffee cli.coffee`

Keyboard Controls:

* w/s = Forward/Reverse
* a/d = Left/Right
* q/e = Strafe Left/Strafe Right
* x = Stop Motion

### To Connect to the Mc Hammer Bot via Web Interface
`coffee server.coffee`

### To Connect to a mockup / testing bot
`coffee server.coffee --dry-run`

The above commands will start the server on "http://localhost:8071" and the two routes available are "http://localhost:8071/motors" and "http://localhost:8071/motion-control".

### Motor Explanation --> "http://localhost:8071/motors"

There are 4 motors labeled "a", "s", "d", "f" that have a range of values from -1 to +1.

* "a" represents the back left motor.
* "s" represents the back right motor.
* "d" represents the front left motor.
* "f" represents the front right motor.

### Motion Control Explanation --> "http://localhost:8071/motion-control/update"

There are 3 actions: "forward", "turn" and "strafe". They have a range of values from -1 to +1. These actions are interpreted by the server and set the motor values.

#### Move Forward

A forward value of +1 represents the motor combination: {a: +1, s: +1, d: +1, f: +1}

** Example: ** `$.ajax({url: "127.0.0.1:8071/motion-control/update", data: {forward: 1}, dataType: "jsonp"}); `

#### Move Backward

A forward value of -1 represents the motor combination: {a: -1, s: -1, d: -1, f: -1}

#### Turn Right
- A turn value of +1 represents the motor combination: {a: +1, s: -1, d: +1, f: -1}

#### Turn Left
- A turn value of -1 represents the motor combination: {a: -1, s: +1, d: -1, f: +1}

#### Strafe Right
- A strafe value of +1 represents the motor combination: {a: +1, s: -1, d: -1, f: +1}

#### Strafe Left
- A strafe value of -1 represents the motor combination: {a: -1, s: +1, d: +1, f: -1}

### How to get the xbox 360 controller to work under OSX

1. Install the xbox 360 driver from http://tattiebogle.net/index.php/ProjectRoot/Xbox360Controller/OsxDriver
2. Restart your computer when prompted

http://people.mozilla.com/~tmielczarek/mouselock+gamepad/