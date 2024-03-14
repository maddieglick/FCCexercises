// Only change code below this line
class Thermostat{
  constructor(fahrenheit){
    this._fahrenheit = fahrenheit;
  }
     get temperature(){
      this._fahrenheit = (5/9) * (this._fahrenheit - 32);
      return this._fahrenheit;
      //converting to c
    }
    set temperature(celsius){
      this._fahrenheit = celsius;
      this._fahrenheit = (this._fahrenheit * (9/5)) +32;
      //converting to F
    }
  }

// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
