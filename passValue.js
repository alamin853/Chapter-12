var num = 10

function change(num){
    num = num + 100
    console.log(num)
}
change(num)
console.log(num)



var obj = {a: 10, b: 20}

function changeMe(obj){
    obj.a = obj.a + 100
    obj.b = obj.b + 100
    console.log(obj)
}
changeMe(obj)
console.log(obj)