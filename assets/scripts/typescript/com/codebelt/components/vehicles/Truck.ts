///<reference path='Vehicle.ts'/>
 ///<reference path='../accessories/Tire.ts'/>
 ///<reference path='../../constants/TireType.ts'/>
 ///<reference path='../accessories/soundsystems/Radio.ts'/>

module com.codebelt.components.vehicles
{
    export class Truck extends vehicles.Vehicle
    {
         private _tires:accessories.Tire;

         constructor(mpg:number, fuel:number)
         {
             super(mpg, fuel);

             this.name = "Truck";

             this._tires = new accessories.Tire(constants.TireType.SNOW);
             this.soundSystem = new soundsystems.Radio();

             console.log(this.name, "has", this._tires.getType(), "tires");
         }

         public useAccessory():void
         {
             super.useAccessory();
             this.lowerTailgate();
         }

         private lowerTailgate():void
         {
             console.log(this.name, "lowered tailgate");
         }

    }
}