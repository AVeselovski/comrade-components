import { darken, lighten } from "polished";

// for dealing with theme array values
export const getColor = (color) => (Array.isArray(color) ? color[0] : color);

export const getActiveColor = (color, lightUp) => {
  const val = Array.isArray(color) ? color[0] : color;

  if (val === "inherit") return val;

  return lightUp ? lighten(0.15, val) : darken(0.15, val);
};
