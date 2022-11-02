// will returning error message if value not match with the type
const pinapple: number = 5;
const nickName: string = 'Riri';
const isEmpty: boolean = true;
const nothing: undefined = undefined;
const nothingMuch: null = null;

//built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let muNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, true];

// Classes
class Car {

}
let car: Car = new Car();

// Object literal
let point: { x: number; y:number} = {
    x: 10,
    y: 20
}

// Function
// i:number => void is to information what we expect for the param
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
}

// When to use annotations
// 1. Function that return the 'any' type -> typscript cant identify 'any 'type
const json = '{"x"L 10, "y": 20}';
const coordinates: {x: number; y: number} = JSON.parse(json); // any types
console.log(coordinates); // {x:10, y:20}

// 2. When we declare a variable on one line and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for ( let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}

// 3. Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false; // can assign different type

for ( let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}