var numberOfdrum = document.querySelectorAll(".drum").length;

//to detect the click

for (var i = 0; i < numberOfdrum; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var clickId = this.innerHTML;
    switchMusic(clickId);
    buttonAnimation(clickId);
  });
}

// to detect the keyboard press

addEventListener("keydown", function (event) {
  switchMusic(event.key);
  buttonAnimation(event.key);
});

function switchMusic(key) {
  switch (key) {
    case "w":
      new Audio("sounds/tom-1.mp3").play();
      break;
    case "a":
      new Audio("sounds/tom-2.mp3").play();
      break;
    case "s":
      new Audio("sounds/tom-3.mp3").play();
      break;
    case "d":
      new Audio("sounds/tom-4.mp3").play();
      break;
    case "j":
      new Audio("sounds/snare.mp3").play();
      break;
    case "k":
      new Audio("sounds/crash.mp3").play();
      break;
    case "l":
      new Audio("sounds/kick-bass.mp3").play();
      break;
  }
}

function buttonAnimation(currentKey) {
  var buttonHighlight = document.querySelector("." + currentKey);
  buttonHighlight.classList.add("pressed");

  setTimeout(function () {
    buttonHighlight.classList.remove("pressed");
  }, 100);
}
