let velocity = 0
let pausa = 200
basic.forever(function () {
    for (let pausa = 0; pausa <= 4; pausa++) {
        let y = 0
        led.plot(0, y)
        music.playTone(262, music.beat(BeatFraction.Sixteenth))
        basic.pause(pausa)
        basic.clearScreen()
    }
    pausa += -50
    for (let y = 0; y <= 4; y++) {
        led.plot(1, y)
        music.playTone(262, music.beat(BeatFraction.Sixteenth))
        basic.pause(pausa)
        basic.clearScreen()
    }
    for (let y = 0; y <= 4; y++) {
        led.plot(2, y)
        music.playTone(262, music.beat(BeatFraction.Sixteenth))
        basic.pause(pausa)
        basic.clearScreen()
    }
    for (let y = 0; y <= 4; y++) {
        led.plot(3, y)
        music.playTone(262, music.beat(BeatFraction.Sixteenth))
        basic.pause(pausa)
        basic.clearScreen()
    }
    for (let y = 0; y <= 4; y++) {
        led.plot(4, y)
        music.playTone(262, music.beat(BeatFraction.Sixteenth))
        basic.pause(pausa)
        basic.clearScreen()
    }
    basic.showIcon(IconNames.Yes)
    velocity += -80
})
