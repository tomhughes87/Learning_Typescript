// tsc sec13-TypescriptClasses.ts --target es6
//^this was use and the tsconfig.json was change due to this error:
//error TS1056: Accessors are only available when targeting ECMAScript 5 and higher.


class ACunit {
    public readonly brand:string; //readonly because the brand won't change 
    public price: number; //price might change so NOT readonly
    public size?: 'large'| 'medium' | 'small'; //i tried this with readonly but cant change, even with method
    public suppliers?:'Argos'|'Tesco';
    private complaints?: string [];
    constructor(brand:string='No Brand',price:number=0, size?: 'large'| 'medium' | 'small', suppliers?: 'Argos'|'Tesco', complaints?:string []){
        this.brand= brand;
        this.price= price;
        this.size= size;
        this.suppliers= suppliers;
        this.complaints=complaints;
    }
    changeSize(newsize:'large'| 'medium' | 'small'){
        this.size = newsize
    }
}
const hisenseUnit= new ACunit ('Hisense',499.99,undefined,'Argos')
const samsungUnit= new ACunit ('Samsung',699.99, 'large','Tesco',['broken on arrival','missing parts'])
const sonyUnit= new ACunit (undefined, undefined, 'large',undefined)
console.log(hisenseUnit)
console.log(samsungUnit)
console.log(sonyUnit)
// console.log(samsungUnit.complaints) //this won't work because it's private

// banana: can a default eg: string = 'cars'/ be used with literals? | and what about when optional ?
//ts cant use #privatethingy?
// 'public' is by default.... but you can use it to be extra clear to other devs!
// 'private' cant be accessed outside of the class

//////////////
//paramater properties (shorthand)
//////////////
//need to use public or private with this

class Weapon {
    constructor(
        public name:string, 
        public readonly type:'sword'|'gun', 
        public dmg:number, 
        public def: number= 0 , 
        protected upgradable: boolean,
        private _note?:string,
    )
        {}    
    atk(){
        console.log(`You used the ${this.name} ${this.type} and did ${this.dmg} damage!`)
    }
    get showNote():string{
        if (this._note === undefined){
            return `No note found`
        }
        else{
        return `${this._note}`;
        }
    }
    get checkStats():string{
        return `${this.name}: damage= ${this.dmg} / defence= ${this.def}`
    }
    set addNote(newNote:string){
        this._note= newNote
    }
}

class UpgradedWeapon extends Weapon{
    public weaponUpgradeName: string = 'EPIC';
    //BANANA constructor and super() needed to add new ones with params?

}

const sword1= new Weapon('Great Sword','sword',80,30,false)
const sword2= new Weapon('Claymore','sword',110,10,true)
const gun1= new Weapon ('AK-47', 'gun',250,undefined,false,'this is overpowered, nerf it')

console.log(sword1)
gun1.atk()
sword2.atk()
console.log(gun1)
// console.log(gun1._note)
console.log('note from gun1:', gun1.showNote)
console.log(sword1.checkStats)

//banana difference between '_thing' and 'private thing'?
//protected can only be used in the class of child
//why use interact with class?



//ABSTRACT CLASS (like a template for subclasses), unlike interface it has functionality on top of types

abstract class Console {
    constructor(
        public madeIn:string,
        public brand: "song"|"mircosoft"|"nintendo"
    ){}
    
    amountOfGamesPerOwner(players:number,totalGames:number):number{
        return totalGames/players}

    abstract specialFeats():string;
}

class Xbox extends Console{
    constructor (
        madeIn:'TaiWAN',
        brand:'mircosoft',)
        {super(madeIn,brand)}

        specialFeats(): string {
            return 'Xbox can do A,B,C'
        }
}