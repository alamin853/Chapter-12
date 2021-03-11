var ract = {
    width: 100,
    height: 50,

    draw: function(){
        console.log('I am a ractangle')
        console.log('My width is: ' + this.width)
        console.log('My height is: ' + this.height)
    }
}
ract.draw()

ract.height = 90

ract.draw()