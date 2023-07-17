export type RGBColor = [r: number, g: number, b: number, a?: number];

export function rgbToString([r, g, b, a = 1]: RGBColor): string {
  return `rgb(${r} ${g} ${b} / ${a})`;
}
