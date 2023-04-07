let boxOne = document.createElement("div");
boxOne.id = "boxOne"

let boxTwo = document.createElement("div");
boxTwo.id = "boxTwo";
boxTwo.className = "flexTheNotes";

document.body.appendChild(boxOne);
document.body.appendChild(boxTwo);


document.addEventListener ("DOMContentLoaded", function(){
  let button = document.createElement("button");
  let btnText = document.createTextNode("Add Square");
  button.appendChild(btnText);
  document.body.appendChild(button);


 button.addEventListener("click",() => {
    let blackBox = document.createElement ("div");
    blackBox.style.width = "1cm";
    blackBox.style.height = "1cm";
    blackBox.style.backgroundColor = "black"
    document.body.appendChild(blackBox)

  })
})
