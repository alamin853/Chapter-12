function myFunc(c, d){
    console.log(this)
    console.log(this.a + this.b + c + d)
}

myFunc.call({a: 10, b: 15}, 5, 4)
myFunc.apply({a: 12, b: 8}, [4, 7])

var myBind = myFunc.bind({a: 15, b: 18}, 4, 6)
myBind()