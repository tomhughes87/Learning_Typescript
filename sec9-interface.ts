// basically the same as type aliase
// reusable,modular types
// interface is ONLY FOR OBJECTS

//////////////////////////////////////////
//Aliase:
//////////////////////////////////////////
type game1 = {
    readonly id: number  // can't be reassigned, changed
    game1Rating?: number, //optional
    game1Name: string,
    game1Cost: number,
    game1Length: number,
}

const Zelda: game1 = {
    id:1,
    game1Rating:4,
    game1Name: 'Zelda: Breath of the Wild',
    game1Cost: 59.99,
    game1Length: 120,
}

const vivaPin: game1= {
    id:2,
    game1Name: 'Viva Pinata!',
    game1Cost: 10,
    game1Length: 30,
}

//////////////////////////////////////////
//interface:
//////////////////////////////////////////
interface game2 {
    readonly id: number  // can't be reassigned, changed
    game2Rating?: number; //optional
    game2Name: string;
    game2Cost: number;
    game2Length: number;
}

const GTA5: game2 = {
    id: 3,
    game2Name: 'GTAV',
    game2Cost: 60,
    game2Length: 30,
}

const CoD: game2 = {
    id: 4,
    game2Rating:9.5,
    game2Name: 'Call of Duty',
    game2Cost: 60,
    game2Length: 8,
}

//////////////
//DIFFERENCES:
//////////////
// - type/ interface
// - ={}/ {}
// interface = objects only! 
// aliases =objects or single values (type Car = string)
