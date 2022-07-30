// THE SET UP

// new folder

// tsc --init 

// npm init -y

// npm install lite-server
// (nodemon basically)


// index.html

// dist folder (for outputs)
// src folder


// indea.html(
// <script src='./dist/index.js

// '
// )

// config:
// outdir = /.dist


// tsc -w 
// (watch)

// package.json: 
// scripts:{
//     'start':'lite-server'
// }

// npm start

// SERVER RUNNING :D

// ///////////////////




// JS Classes:
//class keywords:

class Player {
    lives=3
    score=0
    constructor (name,platform) {
        this.name=name;
        this.platform=platform;
        // this.lives=3 //the method above the constructor is the same BUT neater!
    }
    gloat(){
        console.log('Ohhhh yeaaah! look at that!')
    }
    getPoint(){
        this.score+=1
    }
    loseLife(){
        this.lives-=1
    }
}

const player1 = new Player("Andy", "Xbox",);
const player2 = new Player("Meg", "Phone",);

console.log(player1)
console.log(player2)
// 
player1.getPoint()
player2.loseLife()
// 
console.log(player1)
console.log(player2)

//////////////

class YoutubeVideo{
    views=0
    constructor(creator,genre,ageRestriction,length){
        this.creator=creator
        this.genre=genre
        this.ageRestriction=ageRestriction
        this.length=length
    }
    checkUploadStatus(){
        console.log('uploaded')
    }
}

const memeVideo53 = new YoutubeVideo('FakeJake','Funny',false,600)  

console.log(memeVideo53)



///////////////////////////////
//PRIVATE FIELDS///////////////
///////////////////////////////

//private fields: stop devs messing up values etc
// _score <underscore was to signal to devs to not change it
// #score <this makes it private,  to update it a wrapper method can be used

class Meal {
    #edable= true
    constructor(type,gultenfree,cal,cost){
        this.type=type
        this.gultenfree=gultenfree
        this.cal=cal
        this.cost=cost
    }
    get checkEdabilty(){
        console.log(`is it edable?`,this.#edable, '-checked with a getter')
    }

    set changeEdability(edable){
        if (edable === true | false){
        this.#edable = edable
        console.log(`it's gone off! -private value changed with Setter`)
        }
        else{
            throw new Error('it must be a boolean')
        }
    }

    poisonous(){
        console.log(`it's gone off! -private value changed with func()`)
        this.#edable = false
    }
}

const bigMac = new Meal ("fastfood",false,648,5.99)

console.log(bigMac)
bigMac.checkEdabilty
bigMac.poisonous()
bigMac.checkEdabilty
bigMac.changeEdability =true
bigMac.checkEdabilty
