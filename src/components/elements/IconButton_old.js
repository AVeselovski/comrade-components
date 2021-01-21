import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import { border, color, layout, position, space, typography } from "styled-system";
// utils
import { getActiveColor } from "../../utils/theme-helpers";

const activeColor = (colorName, theme) => {
  let color;
  console.log(colorName);

  switch (colorName) {
    case undefined:
      color = theme.colors.color;
      break;
    case "dark":
      color = theme.colors.black;
      break;
    case "light":
      color = theme.colors.white;
      break;
    default:
      color = getActiveColor(theme.colors[colorName] || colorName, theme.colorScheme);
      break;
  }
  console.log(color);

  return color;
};
const getBtnSizeSimple = (size) => ({ [size]: "26px", sm: "26px", md: "26px", lg: "32px" }[size]);
const getIconSizeSimple = (size) => ({ [size]: "24px", sm: "16px", md: "24px", lg: "30px" }[size]);

const StyledIconButtonSimple = styled.button`
  ${({ btnColor, btnSize, theme }) => {
    const _activeColor = activeColor(btnColor, theme);
    console.log(btnColor, _activeColor);

    return `
      align-items: center;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      background-color: transparent;
      border: none;
      color: ${theme.colors[btnColor] || theme.colors.text};
      display: inline-block;
      display: inline-flex;
      font-family: inherit;
      font-size: ${theme.fontSize[getBtnFontSize(btnSize)]};
      height: ${getBtnSizeSimple(btnSize)};
      justify-content: center;
      line-height: 1;
      padding: 0;
      text-align: center;
      text-decoration: none;
      transition: background-color ${theme.transition},
                  border-color ${theme.transition},
                  color ${theme.transition};
      user-select: none;
      vertical-align: middle;
      width: ${getBtnSizeSimple(btnSize)};

      svg {
        fill: ${theme.colors[btnColor] || theme.colors.text};
        height: ${getIconSizeSimple(btnSize)};
        stroke: ${theme.colors[btnColor] || theme.colors.text};
        width: ${getIconSizeSimple(btnSize)};
      }

      &:hover:not(:disabled),
      &:active:not(:disabled),
      &:focus {
        background-color: transparent;
        color: ${_activeColor};
        cursor: pointer;

        svg {
          fill: ${_activeColor};
          stroke: ${_activeColor};
        }
      }

      &:disabled {
        cursor: not-allowed;
        opacity: 0.35;
      }
    `;
  }}

  ${border}
  ${color}
  ${layout}
  ${position}
  ${space}
  ${typography}
`;

const getBtnType = (btnType, inverted, colors) => {
  const type = inverted ? btnType + "-inverted" : btnType;

  return {
    [type]: {
      activeBg: colors?.highlight,
      activeColor: colors?.color,
      bg: "transparent",
      color: colors?.secondary
    },
    default: {
      activeBg: colors?.highlight,
      activeColor: colors?.color,
      bg: "transparent",
      color: colors?.secondary
    },
    dark: {
      activeBg: colors?.grey[6],
      activeColor: colors?.white,
      bg: "transparent",
      color: colors?.grey[2]
    },
    light: {
      activeBg: colors?.grey[1],
      activeColor: colors?.black,
      bg: "transparent",
      color: colors?.grey[4]
    },
    primary: {
      activeBg: colors?.color,
      activeColor: colors?.bg,
      bg: colors?.primary,
      color: colors?.bg
    },
    info: {
      bg: colors?.info,
      color: colors?.white
    },
    danger: {
      bg: colors?.danger,
      color: colors?.white
    },
    success: {
      bg: colors?.success,
      color: colors?.white
    },
    warning: {
      bg: colors?.warning,
      color: colors?.white
    },
    "primary-inverted": {
      activeBg: colors?.highlight,
      activeColor: colors?.color,
      bg: "transparent",
      color: colors?.primary
    },
    "info-inverted": {
      bg: "transparent",
      color: colors?.infoText
    },
    "danger-inverted": {
      bg: "transparent",
      color: colors?.dangerText
    },
    "success-inverted": {
      bg: "transparent",
      color: colors?.successText
    },
    "warning-inverted": {
      bg: "transparent",
      color: colors?.warningText
    }
  }[type];
};
const getBtnFontSize = (size) => ({ [size]: "md", sm: "base", md: "md", lg: "xl" }[size]);
const getBtnSize = (size) => ({ [size]: "44px", sm: "32px", md: "44px", lg: "60px" }[size]);
const getIconSize = (size) => ({ [size]: "24px", sm: "16px", md: "24px", lg: "30px" }[size]);

const StyledIconButton = styled(StyledIconButtonSimple)`
  ${({ btnSize, btnType, inverted, theme }) => {
    const { activeBg, _activeColor, bg, color } = getBtnType(btnType, inverted, theme.colors);

    return `
      background-color: ${bg};
      border: 1px solid ${inverted ? theme.colors.muted : bg};
      border-radius: 50%;
      color: ${color};
      font-size: ${theme.fontSize[getBtnFontSize(btnSize)]};
      height: ${getBtnSize(btnSize)};
      width: ${getBtnSize(btnSize)};

      svg {
        fill: ${color};
        height: ${getIconSize(btnSize)};
        stroke: ${color};
        width: ${getIconSize(btnSize)};
      }

      &:hover:not(:disabled),
      &:active:not(:disabled),
      &:focus {
        background-color: ${activeBg ? activeBg : getActiveColor(bg, theme.colorScheme)};
        border-color: ${
          inverted
            ? _activeColor || getActiveColor(color, theme.colorScheme)
            : activeBg || getActiveColor(bg, theme.colorScheme)
        };
        color: ${_activeColor ? _activeColor : inverted ? getActiveColor(color, theme.colorScheme) : color};
        cursor: pointer;

        svg {
          fill: ${_activeColor ? _activeColor : inverted ? getActiveColor(color, theme.colorScheme) : color};
          stroke: ${
            _activeColor ? _activeColor : inverted ? getActiveColor(color, theme.colorScheme) : color
          };
        }
      }
    `;
  }}

  ${border}
  ${color}
  ${layout}
  ${position}
  ${space}
  ${typography}
`;

const IconButton = ({
  as = "button",
  children,
  inverted,
  simple = false,
  size = "md",
  type = "secondary",
  ...props
}) => {
  return simple ? (
    <StyledIconButtonSimple as={as} btnColor={type} btnSize={size} {...props}>
      {children}
    </StyledIconButtonSimple>
  ) : (
    <StyledIconButton as={as} btnSize={size} btnType={type} inverted={inverted} {...props}>
      {children}
    </StyledIconButton>
  );
};

IconButton.propTypes = {
  /** HTML tag */
  as: propTypes.string,
  children: propTypes.node.isRequired,
  /** Displays as a simple Icon */
  simple: propTypes.bool,
  /** Size of `Button` */
  size: propTypes.oneOf(["sm", "md", "lg"]),
  /** Button type / variation  */
  type: propTypes.oneOf([
    "default",
    "secondary",
    "light",
    "dark",
    "primary",
    "info",
    "danger",
    "success",
    "warning"
  ])
};

export default IconButton;
