var a= "a"
console.log(a)
b="b"
console.log(b)
var b;
function cHoisting(){
    console.log(d)
    var d="d"
    console.log(c)
    c="c"
}
cHoisting();