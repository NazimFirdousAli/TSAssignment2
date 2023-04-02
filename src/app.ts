interface VehicleData {
    make: string;
    model: string;
    year: number;
    rented: boolean;
}
abstract class Vehicle implements VehicleData {
    constructor(public make: string, public model: string, public year: number, public rented: boolean) {
    }
    public getMake(): string {
        return this.make
    }
    public getModel(): string {
        return this.model
    }
    public getYear(): number {
        return this.year
    }
    public getRented(): boolean {
        return this.rented
    }
    set setterMake(newMake: string) {
        this.make = newMake
    }
    set setterModel(newModel: string) {
        this.model = newModel
    }
    set setterYear(newYear: number) {
        this.year = newYear
    }
    set setterRented(newRented: boolean) {
        this.rented = newRented
    }

    abstract rentalRate(): number;

    rent() {
        if (this.rented) {
            console.log("Vehicle is Not available")
        }
        else {
            return this.rented = true
        }
    }
    return() {
        if (this.rented) {
            console.log("Vehicle is Not available")
        }
        else {
            return this.rented = false
        }
    }

}

class Car extends Vehicle {
    constructor(make: string, model: string, year: number, rented: boolean, public name: string) {
        super(make, model, year, rented);
    }
    rentalRate(): number {
        return 1000
    }
}

class Truck extends Vehicle {
    constructor(make: string, model: string, year: number, rented: boolean, public name: string) {
        super(make, model, year, rented);
    }
    rentalRate(): number {
        return 10000
    }
}

class MotorCycle extends Vehicle {
    constructor(make: string, model: string, year: number, rented: boolean, public name: string) {
        super(make, model, year, rented);
    }
    rentalRate(): number {
        return 100
    }
}

const Vehicle1 = new MotorCycle("Honda", "CD-70", 2022, true, "NAZIM")
console.log(Vehicle1)
console.log(Vehicle1.rentalRate())
console.log(Vehicle1.return())
console.log(Vehicle1.rent())
