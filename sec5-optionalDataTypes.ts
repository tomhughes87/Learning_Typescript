
// use a '?' to make it optional 

type menu = {
    name: string
    starters: string;
    mains: string;
    dessert?: string
}

function whatOnTheMenu(stuff:menu) {
    return `menu from ${stuff.name} :${stuff.starters},${stuff.mains},${stuff.dessert} `
}

console.log(whatOnTheMenu({name:'Paloma',starters:'tapas things',mains:'burgers'}))

console.log(whatOnTheMenu({name:'Mundo',starters:'toasts',mains:'set meals/ lunch deals', dessert:'ice-creams'}))
