console.log("------ Class ------");

class Car {
    constructor(name) {
        this.brand = name;
    }

    present() {
        return "I have a " + this.brand; // "+ this.brand" -> digunakan untuk memangil name brand dari component car yang telah di deklarasikan/ditentukan pada line 13
    }
}

let myCar = new Car("Ford"); // "Ford" -> adalah name brand yang dimiliki component car

console.log(myCar.present());