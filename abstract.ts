abstract class AbstractCar{
    abstract PrintCar(): void;

    NumberOfCarWheels(): number{
        return 4;
    }
}

class Mazda extends AbstractCar{
    PrintCar(): void {
        console.log("This is a Mazda");
    }
}

let mazdaCar = new Mazda();
let newAbstractCar = new AbstractCar();
mazdaCar.PrintCar();
console.log(mazdaCar.NumberOfCarWheels());