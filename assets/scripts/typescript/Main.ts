///<reference path='com/codebelt/components/vehicles/Car.ts'/>
///<reference path='com/codebelt/components/vehicles/Truck.ts'/>

import contants = com.codebelt.constants;
import interfaces = com.codebelt.interfaces;
import vehicles = com.codebelt.components.vehicles;
import accessories = com.codebelt.components.accessories;
import soundsystems = com.codebelt.components.accessories.soundsystems;

module com.codebelt
{
    export class Main
    {
        private _compact:vehicles.Car;
        private _pickup:vehicles.Truck;

        constructor()
        {
            this._compact = new vehicles.Car(21, 18);
            this._compact.changeGear();

            this._compact.useAccessory();

            this._pickup = new vehicles.Truck(16, 23);
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