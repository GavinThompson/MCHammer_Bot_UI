== Installation

1. Install nodejs `brew install nodejs`
2. `npm install coffee`
3. Clone this repo
4. cd into the cloned repo's folder
5. run `npm install`


== Running the Server

=== To connect to a real Mc Hammer Bot
`coffee server.coffee`

=== To connect to a mochup / testing bot
`coffee server.coffee --dry-run`


== Running the Command Line Interface

`coffee cli.coffee`


== How to get the xbox 360 controller to work under OSX (Sometimes)

1. Install the xbox 360 driver from http://tattiebogle.net/index.php/ProjectRoot/Xbox360Controller/OsxDriver
2. Restart your computer when prompted
3. Hope for the best

http://people.mozilla.com/~tmielczarek/mouselock+gamepad/

== Assignment

Your assignemnt is to use javascript, css, html, and optionally rails to build a user interface that connects to the Mc Hammer Bot using jquery's ajax functions to control the robot via the API outlined above.

=== Due Date

This assignment is due Monday afternoon.

=== Judging
Your interface will be evaluated in two ways:

1. We will take up the project on monday durring which time you will have a chance to show off your UI. We want to put those css and js skills to use. More awesome UI's are better.
2. You will have the opportunity to control the robot throughout friday and monday (up to the deadline). If you choose to you can use this time to attempt to beat the other Student's best time through a obstical course (the nature of which will be reveiled on friday).

=== HTML5 Extras (optional, for more awesomness)

==== Game Pad API
The game pad API can be used to control the robot via one or both of the xbox 360 or PS3 controllers we have available in class. If you are able to control the robot from the keyboard and are looking for a challenge this is one definitely awesome option.

* http://www.html5rocks.com/en/tutorials/doodles/gamepad/


==== Canvas

The HTML5 canvas API allows us to draw 2D lines, circles, squares, etc. using javascript easily and with hardware accelleration. You can use it to show where the robot has been and which direction it is (probably) facing.

* http://diveintohtml5.info/canvas.html
