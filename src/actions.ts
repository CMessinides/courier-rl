export enum ActionType {
  MOVEMENT,
}

export type Action = MovementAction;

export interface MovementAction {
  type: ActionType.MOVEMENT;
  dx: number;
  dy: number;
}

export function movementAction(dx: number, dy: number) {
  return {
    type: ActionType.MOVEMENT,
    dx,
    dy,
  };
}
