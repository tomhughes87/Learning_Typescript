//typeof guard:

function guardThis(stuff: number | string) {
    if (typeof stuff === "number"){
        return stuff * 2
    }
    if (typeof stuff === "string") {
        return stuff + ": it's a string"
    }
}
guardThis(3)
guardThis('Thomas')


/////////////////////
//typeof guard/ lazy:

function lazyGuardThis(stuff: number | string) {
    if (typeof stuff === "number"){
        return stuff * 2
    }
    return stuff + ": it's a string"
    
}

lazyGuardThis(3)
lazyGuardThis('Thomas')


////////////////////
// typeof falsey guard statement:

function guardFalsey(stuff: HTMLElement|null) {
    // if (stuff === null){ //is also works
    if (!stuff){
        return "Nuffin' 'er!"    
    }
    return stuff
}

const elementfromDOM = document.getElementById('MyDiv')
const DONTelementfromDOM = document.getElementById('NotRealDiv')


guardFalsey(elementfromDOM)
guardFalsey(DONTelementfromDOM)