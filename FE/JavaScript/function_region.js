var color = "blue";
function changeColor() {
  let anotherColor = "red";

  function swapColoes() {
    let tempColor = anotherColor;
    anotherColor = color;
    color = tempColor;
    console.log(tempColor); // red
  }
  swapColoes();
  console.log(anotherColor); //blue
}
changeColor();
console.log(color); // red
