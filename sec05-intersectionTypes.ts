
type Colour = {
    colour:string;
}; 

type Size = {
    size: number;
};

type SizeAndColour = Colour & Size;


const face: SizeAndColour = {
    colour:'blueish',
    size: 999,
}