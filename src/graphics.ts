import { RGBColor } from "./colors";

export interface Graphic {
  char: string;
  fg: RGBColor | null;
  bg: RGBColor | null;
}

export interface HasGraphic {
  graphic: Graphic;
}
