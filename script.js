function MakeBubble() {
  let clutter = "";
  for (let i = 1; i <= 72; i++) {
    let randomNumber = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">
    <h2>${randomNumber}</h2>
  </div>`
  }

  document.querySelector("#game-box").innerHTML = clutter
}
MakeBubble();

function Runtimer() {
  let timer = 60;
  timeinterval = setInterval(() => {
    timer--;
    document.querySelector("#timerval").textContent = timer

    if (timer <= 60) {
      document.querySelector("#timerval").style.fontSize = "1.5vw";
      document.querySelector("#timerval").style.alignItem = "center";
      document.querySelector("#timerval").style.fontWeight = "600";

    }
    if (timer <= 10) {
      document.querySelector("#timerval").style.color = "red";
    }
    if (timer <= 0) {
      clearInterval(timeinterval); // Stop the timer when it reaches 0
      document.querySelector("#game-box").innerHTML = `<h1>Game Over</h1>`;
    }
  }, 1000);
}
function Gamestart() {
  setTimeout(() => {
    alert("Game start")

  }, 2000);
  setTimeout(() => {
    Runtimer();

  }, 3000);
}
Gamestart();

let score = 0;
function increasescore() {
  document.querySelector("#scoreval").style.fontSize = "1.5vw";
  document.querySelector("#scoreval").style.alignItem = "center";
  document.querySelector("#scoreval").style.fontWeight = "600";
  score += 10;
  document.querySelector("#scoreval").textContent = score
}

function Hit() {
  let hitval = Math.floor(Math.random() * 10);
  document.querySelector("#Hit").textContent = hitval;
  document.querySelector("#Hit").style.fontSize = "1.5vw";
  document.querySelector("#Hit").style.alignItem = "center";
  document.querySelector("#Hit").style.fontWeight = "600";

  let hitbutton = document.querySelector("#game-box");
  hitbutton.addEventListener("click", function (dts) {
    if (dts.target.classList.value == "bubble" || dts.target.classList.value == "") {
      if (hitval == Number(dts.target.textContent)) {
        increasescore();
        Hit();
        MakeBubble();
      }
    }
  })

}
Hit();




