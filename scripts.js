document.addEventListener ("DOMContentLoaded", function(){
  let button = document.createElement("button");
  let btnText = document.createTextNode("Add Square");
  button.appendChild(btnText);
  document.body.appendChild(button);

  let boxContainer = document.createElement("div");
  boxContainer.className = "boxContainer";
  boxContainer.style.display = "flex";
  boxContainer.style.flexWrap = "wrap";

  document.body.appendChild(boxContainer);

  let counter = 0;

  button.addEventListener("click",() => {
    counter++;

    let blackBox = document.createElement("div");
    blackBox.style.width = "150px";
    blackBox.style.height = "150px";
    blackBox.style.backgroundColor = "black";
    blackBox.setAttribute("id", + counter);
    blackBox.setAttribute("class","boxes");

    let idSpan = document.createElement("span");
    idSpan.textContent = counter;
    idSpan.style.width = "150px";
    idSpan.style.height = "150px";
    idSpan.style.justifyContent = "center";
    idSpan.style.alignItems = "center";
    idSpan.setAttribute("class","idNumberDisplay")
    blackBox.appendChild(idSpan);


    blackBox.addEventListener("dblclick", () => {

      let id = parseInt(blackBox.getAttribute("id"));


      if (id % 2 === 0) {
        let nextSquare = blackBox.nextElementSibling;
        if (nextSquare) {
          nextSquare.remove();
        } else {
          alert("There is no square after this one.");
        }
      }

      else {
        let prevSquare = blackBox.previousElementSibling;
        if (prevSquare) {
          prevSquare.remove();
        } else {
          alert("There is no square before this one.");
        }
      }
    });

    boxContainer.appendChild(blackBox);
  });
});
