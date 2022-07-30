///////////
//Func withOUT type set
//////////
function square(num) {
    console.log(num*num)
    return num*num
}
// ^here the 'num' para in 'any'
square(3)
square('hello')

///////////
//Func with type set
//////////
function add(num:number) {
    console.log(num*num)
    return num*num
}
add(3)
// add('hello') //this isn't allowed because of the type

///////////
//Func with type set & multi params
//////////
function multiparams(name:string,age:number,pretty:boolean) {
    console.log(`${name} is ${age} years old`)    
    console.log(`pretty = ${pretty}`)
}
multiparams('Marta',29,true)


///////////
//Func with type set & defaults
//////////
function defaults(name:string='stranger') {
    console.log(`howdy ${name}`)    
}
defaults()


///////////
//Func with RETURN type
//////////
function returntypes(name:string='stranger'):string {   
    return `Sup ${name}`
}
returntypes()
//helps catch 'void' returns


///////////
//Func with multiple type options
//////////
function multitypes(name:string='stranger',age:number|string):string {   
    return `This person is called ${name} and is ${age} years old`
}
multitypes('Tom',14)
//using pipe symbol (or), can be used for multiple accepted types



//void- nothing, eg, a func that doesnt have a return should be set as type 'void'

//never- NEVER even allow the func to get to the point where it could return/stop, eg: inf while loop/ awaiting err