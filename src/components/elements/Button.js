import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import { border, color, layout, position, space, typography } from "styled-system";
// utils
import { getActiveColor } from "../../utils/theme-helpers";

const getBtnType = (btnType, inverted, colors) => {
  const type = inverted ? btnType + "-inverted" : btnType;

  return {
    [type]: {
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
const getBtnFontSize = (size) => ({ [size]: "base", sm: "sm", md: "base", lg: "md" }[size]);
const getBtnFontWeight = (size) => ({ [size]: "base", sm: "md", md: "base", lg: "base" }[size]);
const getBtnSize = (size) => ({ [size]: "6px 12px", sm: "4px 8px", md: "6px 12px", lg: "10px 16px" }[size]);

const StyledButton = styled.button`
  ${({ btnSize, btnType, inverted, fullWidth, theme }) => {
    const { activeBg, activeColor, bg, color } = getBtnType(btnType, inverted, theme.colors);

    return `
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      background-color: ${bg};
      border: 1px solid ${inverted ? theme.colors.muted : bg};
      border-radius: 3px;
      color: ${color};
      display: ${fullWidth ? "block" : "inline-block"};
      font-family: inherit;
      font-size: ${theme.fontSize[getBtnFontSize(btnSize)]};
      font-weight: ${theme.fontWeight[getBtnFontWeight(btnSize)]};
      line-height: 1.2;
      outline: none;
      padding: ${getBtnSize(btnSize)};
      text-align: center;
      text-decoration: none;
      transition: background-color ${theme.transition},
                  border-color ${theme.transition},
                  color ${theme.transition};
      user-select: none;
      vertical-align: middle;
      width: ${fullWidth ? "100%" : "auto"};

      &:hover:not(:disabled),
      &:active:not(:disabled),
      &:focus {
        background-color: ${activeBg ? activeBg : getActiveColor(bg, theme.colorScheme)};
        border-color: ${
          inverted
            ? activeColor || getActiveColor(color, theme.colorScheme)
            : activeBg || getActiveColor(bg, theme.colorScheme)
        };
        color: ${activeColor ? activeColor : inverted ? getActiveColor(color, theme.colorScheme) : color};
        cursor: pointer;
      }

      &:disabled {
        cursor: not-allowed;
        opacity: 0.35;
      }

      &.link {
        background-color: transparent;
        border: none;
        padding: 0;

        &:hover:not(:disabled),
        &:active:not(:disabled),
        &:focus {
          background-color: transparent;
          border-color: transparent;
          cursor: pointer;
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

const Button = ({ children, inverted, fullWidth, size = "md", type = "default", ...props }) => {
  return (
    <StyledButton btnSize={size} btnType={type} inverted={inverted} fullWidth={fullWidth} {...props}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  /** Button label */
  children: propTypes.node.isRequired,
  inverted: propTypes.bool,
  /** Makes `Button` full width of container */
  fullWidth: propTypes.bool,
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

export default Button;
