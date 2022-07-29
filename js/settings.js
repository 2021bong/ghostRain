const BG_WIDTH = 800;
const BG_HEIGHT = 600;

const GHOST_WIDTH = 45;
const GHOST_HEIGHT = 54;

const HERO_WIDTH = 35;
const HERO_HEIGHT = 54;
const HERO_TOP = 541;

const bgElement = document.getElementById("bg");
const heroElement = document.getElementById("hero");
const btn = document.getElementById("btn");
const nowScore = document.getElementById("score");
const bestScore = document.getElementById("bestScore");
const heartList = [...document.querySelectorAll(".heart-icon")];
const time = document.getElementById("time");

let SPEED = 20;
const TIME_SETTING = 30;
let HEART = 3;

const storage = window.localStorage;
