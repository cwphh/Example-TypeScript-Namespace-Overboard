///<reference path='../../interfaces/IAudible.ts'/>

module com.codebelt.components.vehicles
{
    import IAudible = com.codebelt.interfaces.IAudible;

    export class Vehicle
    {
        private _gasMileage:number;
        private _fuelAvailable:number;
        private _milesTraveled:number;
        private _moving:boolean = false;

        public name:string;
        public soundSystem:IAudible;

        constructor(mpg:number=21, fuel:number=18.5)
        {
            this._gasMileage = mpg;
            this._fuelAvailable = fuel;
            this._milesTraveled = 0;
        }

        public useAccessory():void
        {
            console.log(this.name, "turned on lights");
        }

        public changeGear():void
        {
            console.log(this.name, "changed gear");
        }

        public drive():void
        {
            this._fuelAvailable--;
            this._milesTraveled += this._gasMileage;

            if (this._fuelAvailable > 0) {
                this.drive();
            } else {
                console.log("The", this.name, "has a gas mileage of", this._gasMileage, "and traveled", this._milesTraveled, "miles.");
            }
        }

        public getGasMileage():number
        {
            return this._gasMileage;
        }

        public setGasMileage(mpg:number):void
        {
            this._gasMileage = mpg;
        }

        public getFuelAvailable():number
        {
            return this._fuelAvailable;
        }

        public setFuelAvailable(fuel:number):void
        {
            this._fuelAvailable = fuel;
        }

        public getMilesTraveled():number
        {
            return this._milesTraveled;
        }

    }
}