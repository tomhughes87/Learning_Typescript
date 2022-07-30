let myFirstVar: string ='Hellllo!'

 //this ok because its the same types
myFirstVar='world!'

 //this NOT ok because its NOT the same types
//myFirstVar=43 

////////////////


let inferance = true
//  ^ts can figure out what its meant to be, here the type is 'boolean'
let inferance2 = 'cool'
// ^here its set to string


let trythis;
// ^here it sets to 'any' type



/////////////
//tsc <filename.ts>   in terminal compiles to to js
// node <filename.js>   in terminal runs the file