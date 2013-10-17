///<reference path='Vehicle.ts'/>
///<reference path='../accessories/Tire.ts'/>
///<reference path='../../constants/TireType.ts'/>
///<reference path='../accessories/soundsystems/CDPlayer.ts'/>

module com.codebelt.components.vehicles
{
    export class Car extends vehicles.Vehicle
    {
        private _tires:accessories.Tire;

        constructor(mpg:number, fuel:number)
        {
            super(mpg, fuel);

            this.name = "Car";

            this._tires = new accessories.Tire(constants.TireType.HIGH_PERFORMANCE);
            this.soundSystem = new soundsystems.CDPlayer();

            console.log(this.name, "has", this._tires.getType(), "tires");
        }

        public useAccessory():void
        {
            this.openSunroof();
        }

        private openSunroof():void
        {
            console.log(this.name, "opened sunroof");
        }

    }
}