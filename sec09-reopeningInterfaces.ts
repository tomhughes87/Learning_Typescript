// You can redo an interface and it will ADD new fields to it:

interface Guy{
    name: string;
    age: number
}

interface Guy{
    job:string
}

const Chris: Guy= {
    name:'Chris',
    age: 31,
    job: 'IT recruitment', 
}