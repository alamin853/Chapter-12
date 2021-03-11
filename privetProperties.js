var Rectangle = function(width, height){
        this.width = width
        this.height = height

        var position = {x: 10, y: -100}


        var printProperties = function(){
            console.log('My width is: ' + width)
            console.log('My height is: ' + height)
    }

    this.draw = function(){
        console.log("I am a rectangle")
        printProperties()
        console.log("Position: x= " + position.x + " y= " + position.y)
    }
}

var rect1 = new Rectangle(45, 30)
rect1.draw()

