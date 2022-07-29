let score = 0;

function randomRange(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

function createGhost() {
  if (!playing) {
    return;
  }
  let ghostTop = 0;
  const ghostElement = document.createElement("div");

  ghostElement.style.position = "absolute";
  ghostElement.style.top = `${ghostTop}px`;
  ghostElement.style.left = `${randomRange(0, BG_WIDTH - GHOST_WIDTH)}px`;
  ghostElement.style.width = `${GHOST_WIDTH}px`;
  ghostElement.style.height = `${GHOST_HEIGHT}px`;
  ghostElement.style.background = 'url("./images/ghost.png") no-repeat';

  bgElement.appendChild(ghostElement);

  window.requestAnimationFrame(function () {
    moveGhost(ghostTop, ghostElement);
  });
}

function moveGhost(ghostTop, ghostElement) {
  ghostTop += 2;
  if (ghostTop > BG_HEIGHT - (HERO_HEIGHT + 20)) {
    const ghostLeft = +ghostElement.style.left.split("px")[0];
    const heroLeft = +heroElement.style.left.split("px")[0];
    if (
      ghostLeft + GHOST_WIDTH > heroLeft &&
      heroLeft + HERO_WIDTH > ghostLeft
    ) {
      if (!playing) {
        return;
      }
      ghostDie(ghostElement);
      return;
    }
    if (BG_HEIGHT - GHOST_HEIGHT <= ghostTop) {
      ghostRemove(ghostElement);
      return;
    }
  }
  ghostElement.style.top = ghostTop + "px";
  window.requestAnimationFrame(function () {
    moveGhost(ghostTop, ghostElement);
  });
}

function ghostRemove(ghostElement) {
  HEART--;
  lastHeart();
  ghostElement.remove();
}

function ghostDie(ghostElement) {
  ghostElement.style.backgroundPosition = "-45px 0";
  HEART++;
  setTimeout(() => {
    ghostRemove(ghostElement);
  }, 2000);
  score++;
  updateScore();
}
