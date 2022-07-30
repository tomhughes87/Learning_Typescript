
//method one:
let grassTypeMoves: string [] = ['vine whip, grass blade']

//method two:
let fireTypeMoves: Array <string> =['fire spin','flame thrower']

/////////////////////////

const MealCreator = (meal: {
    mealName: string;
    cost: number;
    calories: number;
    ingredients: string [];
}):string=>{
    return `the ${meal.mealName} is ${meal.calories} and cost $${meal.cost}. In it there is: ${meal.ingredients}`

}

console.log(
MealCreator({
    mealName: 'pokebowl',
    cost: 3,
    calories: 450,
    ingredients:  ['cold rice', 'ginger', 'carrots','soy sauce'],
})
)

/////////////////////////

type book = {
    bookName : string;
    bookCost : number;
    bookBorrowers : string [];
}

const bookShelf: book [] = [] 

bookShelf.push({bookName:'Sound of silence',bookCost:32, bookBorrowers:['tom','billie','dan', 'will']})