//not in js!
// fix what type is in an array:

let colour:['rgb:',number,number,number];

colour=['rgb:',0,254,255]
colour=['rgb:',0,0,255]
colour=['rgb:',255,255,255]

////////////////////////

let hex: ['#'|''| undefined, number|string,number|string,number|string,]

hex = ['#',10,'fe','a3']
hex = ['','ff','fe',0o0]
hex = [,10,'fe','a3']

// the 0o0 thing? banana 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Deprecated_octal

///////////////
// ODD THING! 
///////////////
//you can not change a tuple... BUT you can use array.pop() and array.push()

