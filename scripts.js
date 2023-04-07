document.addEventListener ("DOMContentLoaded", function(){
  let paragraph = document.createElement("p");
  let text = document.createTextNode("");

  paragraph.style.color = "black";
  paragraph.style.textTransform = "uppercase";
  paragraph.className = "some-paragraph";

  paragraph.appendChild(text);
  document.body.appendChild(paragraph);

  let button = document.createElement("button");
  let btnText = document.createTextNode("Add Square");
  button.appendChild(btnText);
  document.body.appendChild(button);

  let createBoxBtn = document.getElementById("createBoxBtn");
  let boxContainer = document.getElementById("box-container")

 createBoxBtn.addEventListener("click",() => {
    let blackBox = document.createElement ("div");
    blackBox.style.width = "1cm";
    blackBox.style.height = "1cm";
    blackBox.style.backgroundColor = "black"
    boxContainer.appendChild(blackBox);
  })
})
