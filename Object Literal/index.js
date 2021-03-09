var ract = {
    widht: 100,
    height: 50,

    draw: function(){
        console.log('I am a ractangle')
        console.log('My width is: ' + this.widht)
        console.log('My height is: ' + this.height)
    }
}
ract.draw()

ract.height = 80

ract.draw()