
class Car {
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }
    getAge() {
        let date = new Date()
        return date.getFullYear() - this.year
    }
    print() {
        console.log(`This ${this.brand} is ${this.getAge()} years old.`)
    }
}

const bmw = new Car('BMW',2020);
const audi = new Car('Audi',2000);

audi.print()