///<reference path='../../constants/TireType.ts'/>

module com.codebelt.components.accessories
{
    export class Tire
    {
        private _type:string;

        constructor(tire:string)
        {
            switch (tire) {
                case constants.TireType.SNOW :
                    this._type = "storm-ready snow";
                    break;
                case constants.TireType.HIGH_PERFORMANCE :
                    this._type = "high-performance radial";
                    break;
                case constants.TireType.ECONOMICAL :
                default :
                   this._type = "economical bias-ply";
            }
        }

        public getType():string
        {
            return this._type;
        }

        public setType(tire:string):void
        {
            this._type = tire;
        }
    }
}