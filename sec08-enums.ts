
//not commonly used

enum playerStatus{
    WIN, //0
    LOSE, //1
    DRAW, //2
    RAGE_QUIT, //3
}

const Dan = playerStatus.LOSE;
const Tom = playerStatus.WIN;

/////////////////

enum direction{
    LEFT='left', //left
    RIGHT='right',
    U_TURN='turn around 180 degrees',
    FORWARD='straight on', 
}
//enums creates lots of extra code in js, some dont like that and .ts is moving away from that
//the 'direction' enum above turns into this:

// "use strict";
// var direction;
// (function (direction) {
//     direction["LEFT"] = "left";
//     direction["RIGHT"] = "right";
//     direction["U_TURN"] = "turn around 180 degrees";
//     direction["FORWARD"] = "straight on";
// })(direction || (direction = {}));

// using 'const' in front of enum keep .js much shorter (on the output), more research needed
