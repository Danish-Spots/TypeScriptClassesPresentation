class Car{
    readonly cost: number = 0;
    private _owner: string;
    static numberOfWheels: number = 4

    protected constructor(public model: string, protected brand: string, private year: number, readonly km: number){
    }

    PrintCar(){
        console.log(this.brand + ", " + this.model + ", produced in: " + this.year + " This car has: "  + Car.numberOfWheels + " wheels");
    }

    static EmptyFunction(): void{
    }

    get Owner(): string{
        return this._owner;
    }

    set Owner(name: string){
        //Can have some conditions here, the same as in C#
        this._owner = name;
    }
}

class Toyota extends Car{
    constructor(model: string, brand: string, year: number, km: number){
        super(model, brand, year, km);
    }
}

let newCar: Car = new Toyota("Supra", "Toyota", 1996, 30000);
newCar.PrintCar();
// newCar.kilometers = 12398;
newCar.Owner = "Justin";
console.log(newCar.Owner);
Car.numberOfWheels = 3;
Car.EmptyFunction();