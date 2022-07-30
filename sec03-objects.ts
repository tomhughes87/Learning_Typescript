


function printPokemon(pokemon1:{name:string, type:string, evoLvl:number, moves: object}) {
    console.log(`${pokemon1.name} is a ${pokemon1.type} pokemon and is stage ${pokemon1.evoLvl} of evolution`)
    console.log(`${pokemon1.name} moves are ${pokemon1.moves}.`)
}

printPokemon({ name: 'Bulbasaur', type:'grass', evoLvl: 1, moves: ['vine whilp', 'grass blade', 'solar beam']})
//this works but the array of moves doesnt have type set.. hmm


///////////////////
//FOLLOWING IS PROB NEVER NEEDED:


let coordinate: {x:number; y:number} = {x:34,y:2};


////////////////////////
//Excess properties (passing in more params than used in func)
////////////////////////

/////////////////////
//attempt1
function NoOverFlow(place:string,temp:number):string {
    return `It is ${temp} degrees in ${place}`
}
//call func using the exact about of params, anymore passed and it breaks
console.log(NoOverFlow('Cordoba',47))

/////////////////////
//attempt 2

//the interface was added several days later
interface stuffType {
    name: string;
    temp: number;
    place: string;
}

///this one works but the obj item types arent defined
function overFlow(stuff:stuffType):string {
    return `It is ${stuff.temp} degrees in ${stuff.place}`
}
//call func using MORE by sending an array/obj
const passExtra={name:'Tom',temp:47,place:'Cordoba'}
console.log(overFlow(passExtra))

/////////////////////
//attempt 3
function overFlow2(info:{temp:number,place:string}):string {
    return `It is ${info.temp} degrees in ${info.place}`
}
//call func using MORE by sending an array/obj
const passExtra2={name:'Tom',temp:47,place:'Cordoba'}
console.log(overFlow(passExtra2))
