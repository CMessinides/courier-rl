import "modern-css-reset/dist/reset.css";
import "./style.css";
import { Display } from "rot-js";
import { World } from "miniplex";
import { Engine } from "./engine";
import { EventHandler } from "./input-handlers";
import { Entity } from "./entity";
import { GameMap } from "./game-map";
import { COLOR_GROUND_BG, COLOR_NPC_FG, COLOR_PLAYER_FG } from "./constants";
import { rgbToString } from "./colors";

const SCREEN_WIDTH = 80;
const SCREEN_HEIGHT = 30;

const MAP_WIDTH = 80;
const MAP_HEIGHT = 25;

const FONT_SIZE = 14;

let display = new Display({
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
  fontSize: FONT_SIZE * window.devicePixelRatio,
  fontFamily: "Consolas",
  bg: rgbToString(COLOR_GROUND_BG),
});
display.getContainer()!.style.height = SCREEN_HEIGHT * FONT_SIZE + "px";
let root = document.getElementById("game")!;
root.appendChild(display.getContainer()!);

let world = new World<Entity>();
let player: Entity = world.add({
  position: { x: SCREEN_WIDTH / 2, y: SCREEN_HEIGHT / 2 },
  graphic: { char: "@", fg: COLOR_PLAYER_FG, bg: null },
});
world.add({
  position: { x: SCREEN_WIDTH / 2 - 5, y: SCREEN_HEIGHT / 2 },
  graphic: { char: "p", fg: COLOR_NPC_FG, bg: null },
});

let eventHandler = new EventHandler();
let gameMap = new GameMap(MAP_WIDTH, MAP_HEIGHT);
let engine = new Engine(world, eventHandler, gameMap, player);
engine.start();

function run() {
  engine.render(display);
  requestAnimationFrame(run);
}

run();
