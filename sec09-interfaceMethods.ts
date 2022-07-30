interface cat{
    readonly id: number
    catName: string;
    catColour: string[];
    catAge: number;
    catFavFood?: string;
    ability():string //method should return string
    life_exceptancy(avgLifeSpan:number):number //method returns num
}

const Mango: cat={
    id:1,
    catName:'Mango',
    catColour:['Orange','white', 'black',],
    catAge:3,
    ability:  () :string =>{
        // return `${this.catName} jumped`
        return `${Mango.catName} jumped` //Mango or this both work, BUT this. does throw and err... banana
    },
    life_exceptancy(avgLifeSpan) {
        return Mango.catAge - avgLifeSpan
    },
} 