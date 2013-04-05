# Mc HammerBot
Playing with a robot to learn JavaScript, AJAX and a touch of Node.js

## Installation

1. Install NodeJS
``brew install nodejs``

2. Use the Node Packaged Modules (npm) command to install CoffeeScript
``npm install coffee-script``

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

## The API

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

## How to get the xbox 360 controller to work under OSX (Sometimes)

1. Install the xbox 360 driver from http://tattiebogle.net/index.php/ProjectRoot/Xbox360Controller/OsxDriver
2. Restart your computer when prompted
3. Hope for the best

http://people.mozilla.com/~tmielczarek/mouselock+gamepad/

## Your Assignment

Your assignemnt is to use javascript, css, html, and optionally rails to build a user interface that connects to the Mc Hammer Bot using jquery's ajax functions to control the robot via the API outlined above.

* You will get a chance to control the robot with your code but we will have to take turns. Sign up in the back of the class if you would like to use the robot. Robot control is first come, first serve.

* You do **not** need the robot to test out your user interface. The server has a --dry-run option (see above: "To Connect to a mockup / testing bot") which allows you to run it without connecting a robot. This mode is specifically made for testing. Keep an eye on the server's command line output and you will be able to see if it is responding to your requests and controlling the robot in a way that you expect.

### Due Date

This assignment is due Monday afternoon.

### Judging
Your interface will be evaluated in two ways:

1. We will take up the project on monday durring which time you will have a chance to show off your UI. We want to put those css and js skills to use. More awesome UI's are better.
2. You will have the opportunity to control the robot throughout friday and monday (up to the deadline). If you choose to you can use this time to attempt to beat the other Student's best time through a obstical course (the nature of which will be reveiled on friday).

### HTML5 Extras (optional, for more awesomness)

#### Game Pad API
The game pad API can be used to control the robot via one or both of the xbox 360 or PS3 controllers we have available in class. If you are able to control the robot from the keyboard and are looking for a challenge this is one definitely awesome option.

* http://www.html5rocks.com/en/tutorials/doodles/gamepad/


#### Canvas

The HTML5 canvas API allows us to draw 2D lines, circles, squares, etc. using javascript easily and with hardware accelleration. You can use it to show where the robot has been and which direction it is (probably) facing.

* http://diveintohtml5.info/canvas.html
