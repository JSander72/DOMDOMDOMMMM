
const singButton = document.getElementById("sing-button");


function singSong() {

  const friendDivs = document.querySelectorAll(".friend-name").forEach((friendName) => {
    const friendDiv = document.createElement("div");
    friendDiv.classList.add("friend");


    const friendHeading = document.createElement("h3");
    friendHeading.innerText = friendName.innerText;
    friendDiv.appendChild(friendHeading);


    const songLyrics = [
      "I'll be there for you",
      "When the rain starts to pour",
      "I'll be there for you",
      "Like I've been there before",
      "I'll be there for you",
      "Cause you're there for me too",
    ];
    songLyrics.forEach((line) => {
      const songLyricParagraph = document.createElement("p");
      songLyricParagraph.innerText = line;
      friendDiv.appendChild(songLyricParagraph);
    });


    document.body.appendChild(friendDiv);
  });
}


singButton.addEventListener("click", singSong);
