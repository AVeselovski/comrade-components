import { darken, lighten } from "polished";

// Buttons colors setup
export const getBtnStyles = (btnStyle, inverted, colors) => {
  const type = inverted ? btnStyle + "-inverted" : btnStyle;

  return {
    [type]: {
      btnActiveBg: colors?.highlight,
      btnActiveColor: colors?.color,
      btnBg: "transparent",
      btnColor: colors?.secondary
    },
    dark: {
      btnActiveBg: colors?.grey[6],
      btnActiveColor: colors?.white,
      btnBg: "transparent",
      btnColor: colors?.grey[2]
    },
    light: {
      btnActiveBg: colors?.grey[1],
      btnActiveColor: colors?.black,
      btnBg: "transparent",
      btnColor: colors?.grey[4]
    },
    primary: {
      btnActiveBg: colors?.color,
      btnActiveColor: colors?.bg,
      btnBg: colors?.primary,
      btnColor: colors?.bg
    },
    info: {
      btnBg: colors?.info,
      btnColor: colors?.white
    },
    danger: {
      btnBg: colors?.danger,
      btnColor: colors?.white
    },
    success: {
      btnBg: colors?.success,
      btnColor: colors?.white
    },
    warning: {
      btnBg: colors?.warning,
      btnColor: colors?.white
    },
    "primary-inverted": {
      btnActiveBg: colors?.highlight,
      btnActiveColor: colors?.color,
      btnBg: "transparent",
      btnColor: colors?.primary
    },
    "info-inverted": {
      btnBg: "transparent",
      btnColor: colors?.infoText
    },
    "danger-inverted": {
      btnBg: "transparent",
      btnColor: colors?.dangerText
    },
    "success-inverted": {
      btnBg: "transparent",
      btnColor: colors?.successText
    },
    "warning-inverted": {
      btnBg: "transparent",
      btnColor: colors?.warningText
    }
  }[type];
};

// for dealing with theme array values
export const getColor = (color) => (Array.isArray(color) ? color[0] : color);

export const getActiveColor = (color, colorScheme) => {
  const val = Array.isArray(color) ? color[0] : color;

  if (val === "inherit") return val;

  return colorScheme === "dark" ? lighten(0.05, val) : darken(0.05, val);
};
