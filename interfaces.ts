// Create interfaces
// Always using capital letter at the first to create an interfaces
// named with Generic name
// we can assign all type we needed inside there taht we want (included function)
interface Vehicle {
    name: string,
    year: number,
    isBroken: boolean,
}

// reusable interface
interface Reportable {
    summary(): string
}

// doesnt matter if we have another property in oldCivic
const oldCivic = {
    name: 'civic',
    year: 200,
    isBroken: true,
    summary() {
        return `Name of car is ${this.name}`
    }
};

const drink = {
    color: 'red',
    carbonated: true,
    sugar: 500,
    summary() {
        return `My drink is fanta with ${this.color} color`
    }
}

// void means return nothing
const printVehicle = (vehicle: Vehicle): void => {
    console.log(vehicle.name);
}

// reusable function
const printSummary = (item: Reportable): void => {
    console.log(item.summary());
}

printVehicle(oldCivic);
printSummary(oldCivic);
printSummary(drink);