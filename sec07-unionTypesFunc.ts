function printDoB(DoB: number | string):void  {
    console.log(`your date of birth is ${DoB}`)
}

printDoB(1987)

/////////////

//NOTE: if you tried to do maths with something that could be a num OR a str TS wont allow it
//fix...

//TYPE NARROWING (if type of)

function costOfGame(price: number | string):void {
    if (typeof price === "number"){
     price = `$${price.toString()}`  
    }
    console.log(price)
}


costOfGame('$39.99')
costOfGame(39.99) 

