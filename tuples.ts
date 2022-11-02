const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 50
};

// Type alias
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const fanta: Drink = ['red', true, 50];
const greentea: Drink = ['green', false, 10];

const carSpecs: [number, number] = [400, 3354]; // hard to understand whats the property

// A lot easie to understand as an engineer if using this
const carStats = {
    horsePower: 400,
    weight: 3354
}