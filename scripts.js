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
