import {
  COLOR_GROUND_BG,
  COLOR_ROAD_BG,
  COLOR_WALL_BG,
  COLOR_WALL_FG,
} from "./constants";
import { Graphic } from "./graphics";

export interface TileTemplate {
  isWalkable: boolean;
  isTransparent: boolean;
  dark: Graphic;
}

export const Ground: TileTemplate = {
  isWalkable: true,
  isTransparent: true,
  dark: {
    char: " ",
    fg: null,
    bg: COLOR_GROUND_BG,
  },
};

export const Road: TileTemplate = {
  isWalkable: true,
  isTransparent: true,
  dark: {
    char: " ",
    fg: null,
    bg: COLOR_ROAD_BG,
  },
};

export const Wall: TileTemplate = {
  isWalkable: false,
  isTransparent: false,
  dark: {
    char: "#",
    fg: COLOR_WALL_FG,
    bg: COLOR_WALL_BG,
  },
};
