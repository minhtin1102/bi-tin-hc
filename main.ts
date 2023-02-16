basic.forever(function () {
    BitCar.move(10, 10)
    if (BitCar.grove_ultrasonic(GrovePin.P12, DistanceUnit.cm) < 12) {
        BitCar.move(20, 0)
        basic.pause(700)
    }
})
