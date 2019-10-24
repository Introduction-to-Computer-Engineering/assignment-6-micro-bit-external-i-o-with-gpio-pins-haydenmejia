let moistureReading = 0 //setting soil sensor to value of 1
basic.forever(function () { //starting of a forever function
 
 pins.digitalWritePin(DigitalPin.P6, 1) //using pin 6 to power the sensor
 moistureReading = Math.map(pins.analogReadPin(AnalogPin.P0), 10, 750, 0, 4) //mapping the pins to give individual values
 basic.showNumber(Math.round(moistureReading)) //showing the number of the value from the reading
 pins.digitalWritePin(DigitalPin.P6, 0) //writing the pin value on LEDs
 basic.pause(2000) //pause of 2 mili seconds
})
