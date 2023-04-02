document.addEventListener ("DOMContentLoaded", function(){
  let paragraph = document.createElement("p");
  let text = document.createTextNode("This is the sample text built in js instead of html.");

  paragraph.style.color = "black";
  paragraph.style.textTransform = "uppercase";
  paragraph.className = "some-paragraph";

  paragraph.appendChild(text);
  document.body.appendChild(paragraph);

  let button = document.createElement("button");
  let btnText = document.createTextNode("Add Square");
  button.appendChild(btnText);
  document.body.appendChild(button);

  button.addEventListener("click", function() {
    let h1 = document.createElement("div");
    let h1Text = document.createTextNode("black square");
    div.appendChild(div);
    document.body.appendChild(h1);
  })
})
