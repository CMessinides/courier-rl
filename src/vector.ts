import { Point } from "./point";

export interface Vector {
  dx: number;
  dy: number;
}

export function addVector(point: Point, vec: Vector): Point {
  return {
    x: point.x + vec.dx,
    y: point.y + vec.dy,
  };
}
