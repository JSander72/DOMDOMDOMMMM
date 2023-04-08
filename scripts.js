document.addEventListener ("DOMContentLoaded", function(){
  let button = document.createElement("button");
  let btnText = document.createTextNode("Add Square");
  button.appendChild(btnText);
  document.body.appendChild(button);

  let boxContainer = document.createElement("div");
  boxContainer.className = "boxContainer";
  boxContainer.style.display = "flex";
  document.body.appendChild(boxContainer);

  let counter = 0; // Counter variable

  button.addEventListener("click",() => {
    counter++; // Increment counter

    let blackBox = document.createElement("div");
    blackBox.style.width = "5cm";
    blackBox.style.height = "5cm";
    blackBox.style.backgroundColor = "black";
    blackBox.setAttribute("id", + counter);
    blackBox.textContent = counter;
    boxContainer.appendChild(blackBox);
  });
});
