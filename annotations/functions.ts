// dont forget to add type annotation in arguments
// number after argument is return value type
const add = (a: number, b: number) => {
    return a + b;
};

//void -> not returning anything
// its important to give return type of annotations to prevent us made some error
const substact = (a:number, b: number): number => {
    return a-b;
}

// syntax for function
function divide(a: number, b: number): number {
    return a/b;
}

// syntax for anonymous function
const multiply = (a: number, b:number): number => {
    return a * b;
}

const logger = (message: string): void => {
    console.log(message);
    return undefined;
}

// never means never going to actually reach the end of this function.
// never going to execute the function completely at some point in time inside of here
// going to throw an error and exit the function early without returning any value
const throwError = (message: string): never => {
    throw new Error(message)
}

// const throwError = (message: string): void => {
//     if (!message)
//     throw new Error(message)
// }

const todaywWeather = {
    date: new Date(),
    weather: 'Sunny'
};

const logWeather = ({ date, weather}: { date: Date, weather: string}): void => {
    console.log(date);
    console.log(weather);
};

// ES2015 syntax
// const logWeather = ({ date, weather}) => {
//     console.log(data);
//     console.log(weather); 
// }

logWeather(todaywWeather);