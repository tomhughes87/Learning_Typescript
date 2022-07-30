 //|

let amount: string | number = 'ten'

console.log(`amount is: ${amount} and it is a ${amount}`)
//BANANA - cant remember how to do a 'type()' in js/ts

amount = 4

console.log(`now the amount has changed to ${amount} and it's a ${amount} now`)


//////////////////////////////
//a pointless example, they types are the same,

type distanceMeter = number | string;
type distanceFeet = number | string;

const distanceToShop: distanceMeter | distanceFeet = 4

///////////////////////////
//a more useful example

type keyboard = {
    wasd: string
    leftClick: string
}

type controller = {
    leftStick: string
    rightTrigger: string
}

const callOfDutyControls: keyboard | controller = {leftStick:'Movement', rightTrigger:'shoot'}

