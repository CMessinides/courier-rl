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
    bg: "#d7875f",
  },
};

export const Road: TileTemplate = {
  isWalkable: true,
  isTransparent: true,
  dark: {
    char: " ",
    fg: null,
    bg: "#875f5f",
  },
};

export const Wall: TileTemplate = {
  isWalkable: false,
  isTransparent: false,
  dark: {
    char: " ",
    fg: null,
    bg: "#262626",
  },
};
