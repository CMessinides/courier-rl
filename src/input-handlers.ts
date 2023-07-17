import { Action, MovementAction } from "./actions";

type ActionableEvent = KeyboardEvent;

export type ActionHandler = (action: Action, cause?: ActionableEvent) => any;

export class EventHandler {
  private _handlers = new Set<ActionHandler>();

  private _onKeyDown = (event: KeyboardEvent) => {
    let action: Action;

    switch (event.code) {
      case "ArrowUp":
        action = new MovementAction(0, -1);
        break;
      case "ArrowRight":
        action = new MovementAction(1, 0);
        break;
      case "ArrowDown":
        action = new MovementAction(0, 1);
        break;
      case "ArrowLeft":
        action = new MovementAction(-1, 0);
        break;
      default:
        // No valid action
        return;
    }

    this.dispatch(action, event);
  };

  start() {
    window.addEventListener("keydown", this._onKeyDown);
  }

  stop() {
    window.removeEventListener("keydown", this._onKeyDown);
  }

  dispatch(action: Action, cause?: ActionableEvent): void {
    for (const subscriber of this._handlers) {
      subscriber(action, cause);
    }
  }

  subscribe(handler: ActionHandler) {
    this._handlers.add(handler);
  }

  unsubscribe(handler: ActionHandler) {
    return this._handlers.delete(handler);
  }
}
