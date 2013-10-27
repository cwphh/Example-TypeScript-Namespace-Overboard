///<reference path='Vehicle.ts'/>
///<reference path='../accessories/Tire.ts'/>
///<reference path='../../constants/TireType.ts'/>
///<reference path='../accessories/soundsystems/CDPlayer.ts'/>

module com.codebelt.components.vehicles
{
    import Vehicle = com.codebelt.components.vehicles.Vehicle;
    import CDPlayer = com.codebelt.components.accessories.soundsystems.CDPlayer;
    import Tire = com.codebelt.components.accessories.Tire;
    import TireType = com.codebelt.constants.TireType;

    export class Car extends Vehicle
    {
        private _tires:Tire;

        constructor(mpg:number, fuel:number)
        {
            super(mpg, fuel);

            this.name = "Car";

            this._tires = new Tire(TireType.HIGH_PERFORMANCE);
            this.soundSystem = new CDPlayer();

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