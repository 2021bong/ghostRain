let storageScore = storage.getItem("BestScore");
let playing = false;

if (!storageScore) {
  bestScore.innerText = 0;
} else {
  bestScore.innerText = storage.getItem("BestScore");
}

function checkKeyboard(e) {
  const keyboard = e.key;
  moveHero(keyboard);
}

function gameStart() {
  playing = true;
  btn.innerText = "Now Playing...";
  btn.classList.add("playing");
  setInterval(() => {
    createGhost();
  }, 2000);
  countdown();
}

let checkTime;
function countdown() {
  let countNum = TIME_SETTING;
  checkTime = setInterval(() => {
    countNum--;
    time.innerText = countNum;
    if (countNum === 0) {
      time.innerText = 0;
      gameOver(checkTime, "Time Over");
      countNum = TIME_SETTING;
    }
  }, 1000);
}
``;
function updateScore() {
  nowScore.innerText = score;
}

function lastHeart() {
  if (HEART >= 3) {
    return;
  } else if (HEART === 2) {
    heartList[HEART - 2].classList.add("none");
    return;
  } else if (HEART === 1) {
    heartList[HEART].classList.add("none");
    return;
  } else if (HEART === 0) {
    heartList[HEART + 2].classList.add("none");
    gameOver(checkTime, "There's No Hearts");
  }
}

function gameOver(checkTime, mss) {
  clearInterval(checkTime);
  time.innerText = TIME_SETTING;
  btn.innerText = "Game Start";
  btn.classList.remove("playing");
  playing = false;
  const ghosts = [...bgElement.childNodes];
  alert(`Game Over! : ${mss}\nYour Score : ${score}`);
  for (let i = 0; i < ghosts.length; i++) {
    if (i > 2) {
      ghosts[i].remove();
    }
  }
  bestScoreChange();
  score = 0;
  updateScore();
  for (let i = 0; i < heartList.length; i++) {
    heartList[i].classList.remove("none");
  }
  document.location.reload(true);
}

function bestScoreChange() {
  if (Number(bestScore.innerText) < score) {
    storage.setItem("BestScore", score);
    bestScore.innerText = score;
  }
}

document.addEventListener("keydown", checkKeyboard);
document.addEventListener("keyup", deleteClass);

btn.addEventListener("click", gameStart);
