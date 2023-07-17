import { World, Query, With } from "miniplex";
import { Entity } from "./entity";
import { EventHandler } from "./input-handlers";
import { Action } from "./actions";
import { Display } from "rot-js";
import { GameMap } from "./game-map";

export class Engine {
  world: World<Entity>;
  eventHandler: EventHandler;
  gameMap: GameMap;
  player: Entity;
  renderableEntities: Query<With<Entity, "graphic" | "position">>;

  constructor(
    world: World<Entity>,
    eventHandler: EventHandler,
    gameMap: GameMap,
    player: Entity
  ) {
    this.world = world;
    this.eventHandler = eventHandler;
    this.gameMap = gameMap;
    this.player = player;
    this.renderableEntities = world.with("graphic", "position");
  }

  start() {
    this.eventHandler.subscribe(this._handleAction);
    this.eventHandler.start();
  }

  stop() {
    this.eventHandler.stop();
    this.eventHandler.unsubscribe(this._handleAction);
  }

  render(display: Display) {
    display.clear();

    this.gameMap.render(display);

    for (const { position, graphic } of this.renderableEntities) {
      const { x, y } = position;
      const { char, fg, bg } = graphic;
      display.drawOver(x, y, char, fg, bg);
    }
  }

  private _handleAction = (action: Action) => {
    action.perform(this, this.player);
  };
}
