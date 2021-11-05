let distance = 0
basic.forever(function on_forever() {
    
    distance = sonar.ping(DigitalPin.P0, DigitalPin.P1, PingUnit.Centimeters)
    if (distance <= 10 && distance > 8) {
        basic.showLeds(`
            # # # # #
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
        `)
    }
    
    if (distance <= 8 && distance > 6) {
        basic.showLeds(`
            # # # # #
                        # # # # #
                        . . . . .
                        . . . . .
                        . . . . .
        `)
    }
    
    if (distance <= 6 && distance > 4) {
        basic.showLeds(`
            # # # # #
                        # # # # #
                        # # # # #
                        . . . . .
                        . . . . .
        `)
    }
    
    if (distance <= 4 && distance > 2) {
        basic.showLeds(`
            # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
                        . . . . .
        `)
    }
    
    if (distance <= 2) {
        basic.showLeds(`
            # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
        `)
    }
    
})
