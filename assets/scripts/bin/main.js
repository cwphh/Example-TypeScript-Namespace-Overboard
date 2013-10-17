var com;
(function (com) {
    (function (codebelt) {
        (function (interfaces) {
        })(codebelt.interfaces || (codebelt.interfaces = {}));
        var interfaces = codebelt.interfaces;

    })(com.codebelt || (com.codebelt = {}));
    var codebelt = com.codebelt;

})(com || (com = {}));

var com;
(function (com) {
    (function (codebelt) {
        (function (components) {
            (function (vehicles) {
                var Vehicle = (function () {
                    function Vehicle(mpg, fuel) {
                        if (typeof mpg === "undefined") { mpg = 21; }
                        if (typeof fuel === "undefined") { fuel = 18.5; }
                        this._moving = false;
                        this._gasMileage = mpg;
                        this._fuelAvailable = fuel;
                        this._milesTraveled = 0;
                    }
                    Vehicle.prototype.useAccessory = function () {
                        console.log(this.name, "turned on lights");
                    };
                    Vehicle.prototype.changeGear = function () {
                        console.log(this.name, "changed gear");
                    };
                    Vehicle.prototype.drive = function () {
                        this._fuelAvailable--;
                        this._milesTraveled += this._gasMileage;
                        if(this._fuelAvailable > 0) {
                            this.drive();
                        } else {
                            console.log("The", this.name, "has a gas mileage of", this._gasMileage, "and traveled", this._milesTraveled, "miles.");
                        }
                    };
                    Vehicle.prototype.getGasMileage = function () {
                        return this._gasMileage;
                    };
                    Vehicle.prototype.setGasMileage = function (mpg) {
                        this._gasMileage = mpg;
                    };
                    Vehicle.prototype.getFuelAvailable = function () {
                        return this._fuelAvailable;
                    };
                    Vehicle.prototype.setFuelAvailable = function (fuel) {
                        this._fuelAvailable = fuel;
                    };
                    Vehicle.prototype.getMilesTraveled = function () {
                        return this._milesTraveled;
                    };
                    return Vehicle;
                })();
                vehicles.Vehicle = Vehicle;                
            })(components.vehicles || (components.vehicles = {}));
            var vehicles = components.vehicles;

        })(codebelt.components || (codebelt.components = {}));
        var components = codebelt.components;

    })(com.codebelt || (com.codebelt = {}));
    var codebelt = com.codebelt;

})(com || (com = {}));

var com;
(function (com) {
    (function (codebelt) {
        (function (constants) {
            var TireType = (function () {
                function TireType() { }
                TireType.SNOW = "snow";
                TireType.HIGH_PERFORMANCE = "highPerformance";
                TireType.ECONOMICAL = "economical";
                return TireType;
            })();
            constants.TireType = TireType;            
        })(codebelt.constants || (codebelt.constants = {}));
        var constants = codebelt.constants;

    })(com.codebelt || (com.codebelt = {}));
    var codebelt = com.codebelt;

})(com || (com = {}));

var com;
(function (com) {
    (function (codebelt) {
        (function (components) {
            (function (accessories) {
                var Tire = (function () {
                    function Tire(tire) {
                        switch(tire) {
                            case codebelt.constants.TireType.SNOW: {
                                this._type = "storm-ready snow";
                                break;

                            }
                            case codebelt.constants.TireType.HIGH_PERFORMANCE: {
                                this._type = "high-performance radial";
                                break;

                            }
                            case codebelt.constants.TireType.ECONOMICAL:
                            default: {
                                this._type = "economical bias-ply";

                            }
                        }
                    }
                    Tire.prototype.getType = function () {
                        return this._type;
                    };
                    Tire.prototype.setType = function (tire) {
                        this._type = tire;
                    };
                    return Tire;
                })();
                accessories.Tire = Tire;                
            })(components.accessories || (components.accessories = {}));
            var accessories = components.accessories;

        })(codebelt.components || (codebelt.components = {}));
        var components = codebelt.components;

    })(com.codebelt || (com.codebelt = {}));
    var codebelt = com.codebelt;

})(com || (com = {}));

var com;
(function (com) {
    (function (codebelt) {
        (function (components) {
            (function (accessories) {
                (function (soundsystems) {
                    var CDPlayer = (function () {
                        function CDPlayer() {
                            this.isPlaying = false;
                        }
                        CDPlayer.prototype.turnOn = function () {
                            console.log("cd player on");
                            this.isPlaying = true;
                        };
                        CDPlayer.prototype.playSelection = function (preset) {
                            console.log("cd player selection play: track", preset);
                        };
                        CDPlayer.prototype.turnOff = function () {
                            console.log("cd player off");
                            this.isPlaying = false;
                        };
                        CDPlayer.prototype.eject = function () {
                            console.log("cd player eject");
                        };
                        return CDPlayer;
                    })();
                    soundsystems.CDPlayer = CDPlayer;                    
                })(accessories.soundsystems || (accessories.soundsystems = {}));
                var soundsystems = accessories.soundsystems;

            })(components.accessories || (components.accessories = {}));
            var accessories = components.accessories;

        })(codebelt.components || (codebelt.components = {}));
        var components = codebelt.components;

    })(com.codebelt || (com.codebelt = {}));
    var codebelt = com.codebelt;

})(com || (com = {}));

var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
}
var com;
(function (com) {
    (function (codebelt) {
        (function (components) {
            (function (vehicles) {
                var Car = (function (_super) {
                    __extends(Car, _super);
                    function Car(mpg, fuel) {
                                        _super.call(this, mpg, fuel);
                        this.name = "Car";
                        this._tires = new components.accessories.Tire(codebelt.constants.TireType.HIGH_PERFORMANCE);
                        this.soundSystem = new soundsystems.CDPlayer();
                        console.log(this.name, "has", this._tires.getType(), "tires");
                    }
                    Car.prototype.useAccessory = function () {
                        this.openSunroof();
                    };
                    Car.prototype.openSunroof = function () {
                        console.log(this.name, "opened sunroof");
                    };
                    return Car;
                })(components.vehicles.Vehicle);
                vehicles.Car = Car;                
            })(components.vehicles || (components.vehicles = {}));
            var vehicles = components.vehicles;

        })(codebelt.components || (codebelt.components = {}));
        var components = codebelt.components;

    })(com.codebelt || (com.codebelt = {}));
    var codebelt = com.codebelt;

})(com || (com = {}));

var com;
(function (com) {
    (function (codebelt) {
        (function (components) {
            (function (accessories) {
                (function (soundsystems) {
                    var Radio = (function () {
                        function Radio() {
                            this.isPlaying = false;
                        }
                        Radio.prototype.turnOn = function () {
                            console.log("radio on");
                            this.isPlaying = false;
                        };
                        Radio.prototype.playSelection = function (preset) {
                            console.log("radio selection play: channel preset", preset);
                        };
                        Radio.prototype.turnOff = function () {
                            console.log("radio off");
                            this.isPlaying = false;
                        };
                        return Radio;
                    })();
                    soundsystems.Radio = Radio;                    
                })(accessories.soundsystems || (accessories.soundsystems = {}));
                var soundsystems = accessories.soundsystems;

            })(components.accessories || (components.accessories = {}));
            var accessories = components.accessories;

        })(codebelt.components || (codebelt.components = {}));
        var components = codebelt.components;

    })(com.codebelt || (com.codebelt = {}));
    var codebelt = com.codebelt;

})(com || (com = {}));

var com;
(function (com) {
    (function (codebelt) {
        (function (components) {
            (function (vehicles) {
                var Truck = (function (_super) {
                    __extends(Truck, _super);
                    function Truck(mpg, fuel) {
                                        _super.call(this, mpg, fuel);
                        this.name = "Truck";
                        this._tires = new components.accessories.Tire(codebelt.constants.TireType.SNOW);
                        this.soundSystem = new soundsystems.Radio();
                        console.log(this.name, "has", this._tires.getType(), "tires");
                    }
                    Truck.prototype.useAccessory = function () {
                        _super.prototype.useAccessory.call(this);
                        this.lowerTailgate();
                    };
                    Truck.prototype.lowerTailgate = function () {
                        console.log(this.name, "lowered tailgate");
                    };
                    return Truck;
                })(components.vehicles.Vehicle);
                vehicles.Truck = Truck;                
            })(components.vehicles || (components.vehicles = {}));
            var vehicles = components.vehicles;

        })(codebelt.components || (codebelt.components = {}));
        var components = codebelt.components;

    })(com.codebelt || (com.codebelt = {}));
    var codebelt = com.codebelt;

})(com || (com = {}));

var contants = com.codebelt.constants;
; ;
var interfaces = com.codebelt.interfaces;
; ;
var vehicles = com.codebelt.components.vehicles;
; ;
var accessories = com.codebelt.components.accessories;
; ;
var soundsystems = com.codebelt.components.accessories.soundsystems;
; ;
var com;
(function (com) {
    (function (codebelt) {
        var Main = (function () {
            function Main() {
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
            return Main;
        })();
        codebelt.Main = Main;        
    })(com.codebelt || (com.codebelt = {}));
    var codebelt = com.codebelt;

})(com || (com = {}));

