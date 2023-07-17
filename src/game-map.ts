import { Display } from "rot-js";
import { Ground, TileTemplate, Wall } from "./tiles";
import { Point } from "./point";

export class GameMap {
  width: number;
  height: number;
  tiles: TileTemplate[];

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.tiles = new Array<TileTemplate>(this.width * this.height).fill(Ground);

    this.tiles[this._coordsToIdx(30, 22)] = Wall;
    this.tiles[this._coordsToIdx(31, 22)] = Wall;
    this.tiles[this._coordsToIdx(32, 22)] = Wall;
  }

  inBounds(point: Point): boolean {
    let { x, y } = point;
    return x >= 0 && x < this.width && y >= 0 && y < this.height;
  }

  render(display: Display) {
    for (let i = 0; i < this.tiles.length; i++) {
      const { char, fg, bg } = this.tiles[i].dark;
      const { x, y } = this._idxToCoords(i);
      display.draw(x, y, char, fg, bg);
    }
  }

  tileAt(point: Point): TileTemplate | undefined {
    let { x, y } = point;
    return this.tiles[this._coordsToIdx(x, y)];
  }

  private _coordsToIdx(x: number, y: number): number {
    return y * this.width + x;
  }

  private _idxToCoords(i: number): Point {
    const x = i % this.width;
    const y = (i - x) / this.width;
    return { x, y };
  }
}
