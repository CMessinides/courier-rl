import { Engine } from "./engine";
import { Entity } from "./entity";
import { HasPosition } from "./position";
import { Vector, addVector } from "./vector";

export abstract class Action {
  abstract perform(engine: Engine, entity: Entity): void;
}

export class MovementAction extends Action {
  vec: Vector;

  constructor(dx: number, dy: number) {
    super();
    this.vec = { dx, dy };
  }

  perform(engine: Engine, entity: HasPosition): void {
    const dest = addVector(entity.position, this.vec);

    if (!engine.gameMap.inBounds(dest)) {
      return;
    }

    if (!engine.gameMap.tileAt(dest)!.isWalkable) {
      return;
    }

    entity.position = dest;
  }
}
