import { darken, lighten } from "polished";

export const getColor = (color) => (Array.isArray(color) ? color[0] : color);

export const getActiveColor = (color, lightUp) => {
  const val = Array.isArray(color) ? color[0] : color;

  if (val === "inherit") return val;

  return lightUp ? lighten(0.1, val) : darken(0.1, val);
};
