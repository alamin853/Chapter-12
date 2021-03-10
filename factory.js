function createRect(width, height){
    var rect = {
        width: width,
        height: height,

        draw: function(){
            console.log('I am a rectangle')
            this.printProperties()
        },

        printProperties: function(){
            console.log('My width is: ' + this.width)
            console.log('My height is: ' + this.height)
        }
    }
    return rect
}

var rect1 = createRect(10, 5)
rect1.draw()

var rect2 = createRect(15, 9)
rect2.draw()