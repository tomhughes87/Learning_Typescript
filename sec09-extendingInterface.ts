interface person {
    name: string,
    height: number | string,
    gender: string,
}

interface coder extends person {
    languages: string [],
    experience: string[]
    yearsExp: number
}
 
interface FullStack extends person, coder{
    yearsOfFullStack:number,
    reactExp: boolean,
}

/////////////

const jimmy: coder = {
    name:'Jimmy',
    height: 182,
    gender: 'male',
    languages: ['ts','js','python'],
    experience:['google Q&A','BE dev at tiktok'],
    yearsExp: 3
}
 
const NewTom:FullStack={
    name:'Tom',
    height: 183,
    gender: 'male',
    languages: ['ts','js','python','lua'],
    experience:['none'],
    yearsExp: 0.4,
    yearsOfFullStack:0.4,
    reactExp:true,
}