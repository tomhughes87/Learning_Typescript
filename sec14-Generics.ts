// accepect a certain datatype AND returns the same, very useful in the real world

// document.querySelector takes some types:
// 



// part1//////////////////////////////basic


function identity<T>(item:T): T{
    return item;
}
//T = type, just the industry standard
identity<number>(4);
//calls the func 'identity', sets teh type<>. assigns and returns it.. all the same type


// part2//////////////////////////////array 

function selectFromArray<T>(item:T[]):T{
    return item [0]
}

selectFromArray([2,3,4])


// part3//////////////////////////////array & random

function selectRandomFromArray<T>(item:T[]):T{
    const randomitem = Math.floor(Math.random()*item.length)
    return item [randomitem]
}

selectRandomFromArray([2,3,4])
//TS can infer this anyway^

// part4//////////////////////////////<dom element>!

function selectElement<HTMLButtonElement>(item:HTMLButtonElement){
    return item
}
const htmlthing = document.querySelector('#myBtn')
selectElement(htmlthing)
//need to work on this, banana

// part5 //////////////////////////////REACT
// <T> might confuse react so..
//use <T,> A TRAILING ,


// part6 //////////////////////////////merging and multnples:

function mergingStuff <T,U> (thing1:T,thing2:U) {
    return {thing1, thing2}
}

mergingStuff({"Greeting":'Hello'},'world')

// part7 //////////////////////////////extending  to add constraints

// cant getthis working

// interface myConstaintType{
//     numOnly:number
// }

// function extendingConstrainingStuff <T extends myConstaintType>   (thing1:T,):number {
//     return thing1.numOnly 
// }

// extendingConstrainingStuff(3)


// part7 //////////////////////////////extending  to add constraints

function defaultingStuff<T= string>(item:T) {
    return item    
}

defaultingStuff()