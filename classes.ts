class Vehicle {
    // constructor function is a very special function defined inside of a class. Read more in note!
    constructor (public color:string = 'blue') {}

    public drive(): void {
        console.log('Hello there');
    }

    // protected only can be called in this class or child class
    protected print(): void {
        console.log('Again and again');
    }

}

// adding extends means we wanted to take all the different methods inside of this class
class Car extends Vehicle {
    // overwrite method from vehicle
    drive(): void {
        console.log('Overwirte!');
    }

    // private only can be called inside this class
    private honk(): void {
        console.log('Overwirte!');  
    }
    
    //calling private function and protected
    startDrivingProccess(): void {
        this.honk()
        this.print()
    }

    // we are not calling modifier of public in color because we wont to reassign or create a new field in car of color, field color belong to Vehicle
    constructor(public wheels:number, color: string) {
        // super i a reference to these super class or the parent class of this class
        // whenever we called a constructor of a child calss, we are required to call the constructor method of the parent as well
        super(color);
    }
}

// class using capital in the first word
const vehicle = new Vehicle('pink'); // overwrite constructor function
console.log(vehicle.color);
// const  vehicle = new Vehicle();
// vehicle.drive();

const car = new Car(4, 'orange');
console.log(car.color);
console.log(car.wheels);
car.startDrivingProccess();
