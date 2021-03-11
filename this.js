var ract = {
    width: 100,
    height: 50,

    draw: function(){
        console.log('I am a ractangle')
        this.printProperties()
        console.log(this)
    },

    printProperties: function(){
        console.log('My width is: ' + this.width)
        console.log('My height is: ' + this.height)
    }
}
ract.draw()



var another = {
    width: 62,
    height: 52,

    print: ract.printProperties
}
console.log(another.print)
another.print()