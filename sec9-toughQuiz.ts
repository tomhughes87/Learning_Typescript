//which one of these is incorrect:
//it's checking for funcs with interface

//1///////////////
interface Addable1{
    add1(x:number,y:number):number
}
//method name: add, 
//params: x, y
//return: num

const attempt1: Addable1={
    add1: (x:4,y:3)=>{
        return x+y
    }
}


//2///////////////
interface Addable2{
    add2:(x:number,y:number)=>number
}
//method name: add, 
//params: x, y
//return: num

//BANANA- DONT KNOW HOW TO ASSIGN/CALL
const attempt2: Addable2={
    add2: (x:4,y:3)=>{
        return x+y
    }
}

//3///////////////THIS IS NOT VALID
interface Addable3{
    add3(x:number,y:number){number}
}
//method name: add, 
//params: x, y
//return: num

const attempt3: Addable3={
    add3: (x:4,y:3)=>{
        return x+y
    }
}

