//////////////////////////
//METHOD ONE
//////////////////////////

const describeRoom = (room: {
    roomName: string;
    width: number;
    length: number;
    height: number;
    objects: {
        one: string;
        two: string;
        three: string;
    }
}):string=>{
    return `the ${room.roomName} is ${room.width * room.length} square metres and there is a ${room.objects.one} in the center`

}

console.log(
describeRoom({
    roomName: 'Living room',
    width: 40,
    length: 26,
    height: 2.5,
    objects: {one:'sofa',two: 'tv', three:'coffee table'}
})
) 


//////////////////////////
//METHOD TWO
//////////////////////////

type garden = {
    area: number;
    amountOfPinatas: number
    owner: string
}


function gardenDetails(stuff:garden):string {
       return `${stuff.owner}s garden is ${stuff.area}sq meters and has ${stuff.amountOfPinatas} pinatas in it`
}

///calling the func/ meth1
let myGarden = {
    area: 43,
    amountOfPinatas: 5,
    owner: 'Tom'
}

console.log(gardenDetails(myGarden))

///calling the func/ meth2
console.log(gardenDetails({area: 43, amountOfPinatas: 5, owner: 'Tom'}))

