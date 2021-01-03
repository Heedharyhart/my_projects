const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  //const now = new Date();
  const mins = now.getMinutes();
  const minDegree = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
  minHand.style.transform = `rotate(${minDegree}deg)`;

  //const now = new Date();
  const hour = now.getHours();
  const hourDegree = (hour / 12) * 360 + (mins / 60) * 30 + 90;
  minHand.style.transform = `rotate(${hourDegree}deg)`;
  //console.log(seconds);
}

setInterval(setDate, 1000);
