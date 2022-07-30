
// set thetypes:
type  bitsAndBats = {
    tat: string,
    valuable: string,
    readonly sentimental:string,// cant be changed
};

//initial set up, all fields will accept a string
const inTheAttic: bitsAndBats = {
    tat : 'old lamp',
    valuable : 'vynls',
    sentimental : 'photos',
}

//try change them:
inTheAttic.tat='tea clothes'
inTheAttic.valuable='vintage wardrobe'
// inTheAttic.sentimental='autographs' //this won't work because it's read only!
