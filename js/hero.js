let heroLeftNum = Number(getComputedStyle(heroElement).left.split("px")[0]);

function deleteClass() {
  heroElement.classList.remove("right");
  heroElement.classList.remove("left");
}

function moveHero(keyboard) {
  switch (keyboard) {
    case "ArrowLeft":
      deleteClass();
      heroElement.classList.add("left");
      heroLeftNum -= SPEED;
      if (heroLeftNum <= HERO_WIDTH / 2) {
        heroLeftNum = HERO_WIDTH / 2;
      }
      break;

    case "ArrowRight":
      deleteClass();
      heroElement.classList.add("right");
      heroLeftNum += SPEED;
      if (heroLeftNum >= BG_WIDTH - HERO_WIDTH / 2) {
        heroLeftNum = BG_WIDTH - HERO_WIDTH / 2;
      }
      break;
  }
  heroElement.style.left = `${heroLeftNum}px`;
}
