///<reference path='com/codebelt/components/vehicles/Car.ts'/>
///<reference path='com/codebelt/components/vehicles/Truck.ts'/>

module com.codebelt
{
    import Car = com.codebelt.components.vehicles.Car;
    import Truck = com.codebelt.components.vehicles.Truck;

    export class Main
    {
        private _compact:Car;
        private _pickup:Truck;

        constructor()
        {
            this._compact = new Car(21, 18);
            this._compact.changeGear();

            this._compact.useAccessory();

            this._pickup = new Truck(16, 23);
            this._pickup.changeGear();
            this._pickup.useAccessory();

            this._compact.soundSystem.turnOn();
            this._compact.soundSystem.playSelection(2);
            this._pickup.soundSystem.turnOn();

            this._compact.drive();
            this._pickup.drive();
        }
    }
}