module com.codebelt.interfaces
{
    export interface IAudible
    {
        isPlaying:bool;
        turnOn():void;
        playSelection(preset:number):void;
        turnOff():void;
    }
}