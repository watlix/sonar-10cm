distance = 0

def on_forever():
    global distance
    distance = sonar.ping(DigitalPin.P0, DigitalPin.P1, PingUnit.CENTIMETERS)
    if distance <= 10 and distance > 8:
        basic.show_leds("""
            # # # # #
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
        """)
    if distance <= 8 and distance > 6:
        basic.show_leds("""
            # # # # #
                        # # # # #
                        . . . . .
                        . . . . .
                        . . . . .
        """)
    if distance <= 6 and distance > 4:
        basic.show_leds("""
            # # # # #
                        # # # # #
                        # # # # #
                        . . . . .
                        . . . . .
        """)
    if distance <= 4 and distance > 2:
        basic.show_leds("""
            # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
                        . . . . .
        """)
    if distance <= 2:
        basic.show_leds("""
            # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
        """)
basic.forever(on_forever)
