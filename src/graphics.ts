export type Color = [r: number, g: number, b: number, a?: number];

export interface Graphic {
  char: string;
  fg: string | null;
  bg: string | null;
}

export interface HasGraphic {
  graphic: Graphic;
}
