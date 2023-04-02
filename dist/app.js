"use strict";
class Vehicle {
    constructor(make, model, year, rented) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.rented = rented;
    }
    getMake() {
        return this.make;
    }
    getModel() {
        return this.model;
    }
    getYear() {
        return this.year;
    }
    getRented() {
        return this.rented;
    }
    set setterMake(newMake) {
        this.make = newMake;
    }
    set setterModel(newModel) {
        this.model = newModel;
    }
    set setterYear(newYear) {
        this.year = newYear;
    }
    set setterRented(newRented) {
        this.rented = newRented;
    }
    rent() {
        if (this.rented) {
            console.log("Vehicle is Not available");
        }
        else {
            return this.rented = true;
        }
    }
    return() {
        if (this.rented) {
            console.log("Vehicle is Not available");
        }
        else {
            return this.rented = false;
        }
    }
}
class Car extends Vehicle {
    constructor(make, model, year, rented, name) {
        super(make, model, year, rented);
        this.name = name;
    }
    rentalRate() {
        return 1000;
    }
}
class Truck extends Vehicle {
    constructor(make, model, year, rented, name) {
        super(make, model, year, rented);
        this.name = name;
    }
    rentalRate() {
        return 10000;
    }
}
class MotorCycle extends Vehicle {
    constructor(make, model, year, rented, name) {
        super(make, model, year, rented);
        this.name = name;
    }
    rentalRate() {
        return 100;
    }
}
const Vehicle1 = new MotorCycle("Honda", "CD-70", 2022, true, "NAZIM");
console.log(Vehicle1);
console.log(Vehicle1.rentalRate());
console.log(Vehicle1.return());
console.log(Vehicle1.rent());
//# sourceMappingURL=app.js.map