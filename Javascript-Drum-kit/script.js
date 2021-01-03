// function keyboardPress(e) {
//   const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
//   const key = document.querySelector(`.key[data-key='${e.keyCode}']`);

//   if (!audio) return; //stop the function from running all together

//   audio.currentTime = 0; //rewind to the start
//   audio.play();
//   key.classList.add("key");
//   key.classList.add("playing");
//   console.log(key);
// }
// window.addEventListener("keydown", keyboardPress);

// function removeTransition(e) {
//   if (e.propertyName !== "transform") return; //skip it if it's not transform

//   this.classList.remove("playing");
// }
// const keys = document.querySelectorAll(".key");
// keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
  if (!audio) return;

  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
  console.log(key);
});

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");

keys.forEach((key) => key.addEventListener("transitionend", removeTransition));