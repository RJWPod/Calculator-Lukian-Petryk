input.onButtonPressed(Button.A, function () {
    Number_1 += 1
    basic.showNumber(Number_1)
})
input.onButtonPressed(Button.AB, function () {
    if (Mode == 0) {
        basic.showString("+")
        Number_2 = Number_1
        Number_1 = 0
        Mode = 1
    } else {
        basic.showString("=")
        basic.showString("" + (Number_1 + Number_2))
    }
})
input.onButtonPressed(Button.B, function () {
    Number_1 += -1
    basic.showNumber(Number_1)
})
input.onGesture(Gesture.Shake, function () {
    if (Mode == 0) {
        basic.showString("-")
        Number_2 = Number_1
        Number_1 = 0
        Mode = 1
    } else {
        basic.showString("=")
        basic.showString("" + (Number_2 - Number_1))
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("CA")
    Number_1 = 0
    Number_2 = 0
    Mode = 0
})
let Mode = 0
let Number_2 = 0
let Number_1 = 0
basic.showIcon(IconNames.Yes)
basic.showString("Press logo = CA")
Number_1 = 0
Number_2 = 0
Mode = 0
