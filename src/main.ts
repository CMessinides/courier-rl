import "modern-css-reset/dist/reset.css";
import "./style.css";
import { Display } from "rot-js";
import { World } from "miniplex";
import { EventHandler } from "./input-handlers";
import { ActionType } from "./actions";

const SCREEN_WIDTH = 80;
const SCREEN_HEIGHT = 30;

const BG_GROUND = "#d7af87";
const FG_PLAYER = "#262626";
const FONT_SIZE = 14;

let display = new Display({
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
  fontSize: FONT_SIZE * window.devicePixelRatio,
  fontFamily: "Consolas",
  bg: BG_GROUND,
});
display.getContainer()!.style.height = SCREEN_HEIGHT * FONT_SIZE + "px";
let root = document.getElementById("game")!;
root.appendChild(display.getContainer()!);

type Entity = {
  position?: { x: number; y: number };
};

let world = new World<Entity>();
let player: Entity = world.add({
  position: { x: SCREEN_WIDTH / 2, y: SCREEN_HEIGHT / 2 },
});

let eventHandler = new EventHandler();
eventHandler.subscribe((action) => {
  switch (action.type) {
    case ActionType.MOVEMENT: {
      player.position!.x += action.dx;
      player.position!.y += action.dy;
    }
  }
});
eventHandler.start();

function run() {
  display.clear();

  // draw the player
  display.draw(player.position!.x, player.position!.y, "@", FG_PLAYER, null);

  requestAnimationFrame(run);
}

run();
