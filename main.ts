input.onButtonPressed(Button.A, function () {
    radio.sendString("A")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
