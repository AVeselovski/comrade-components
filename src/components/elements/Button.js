import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import { position, space, typography } from "styled-system";
import { themeGet } from "@styled-system/theme-get";
// utils
import { getColor, getActiveColor } from "../../utils/theme-helpers";

const getFontSize = (size) => ({ small: "s", medium: "base", large: "m" }[size]);

const getFontWeight = (size) => ({ small: "m", medium: "base", large: "base" }[size]);

const getSize = (size) => ({ small: "4px 8px", medium: "6px 12px", large: "8px 20px" }[size]);

const StyledButton = styled.button`
  background-color: ${({ color, inverted, theme }) =>
    color && !inverted ? getColor(theme.colors[color] || color) : "inherit"};
  border: 2px solid ${({ color, theme }) => (color ? getColor(theme.colors[color] || color) : "transparent")};
  border-radius: ${({ inverted }) => (inverted ? "0" : "3px")};
  box-sizing: border-box;
  color: ${({ color, inverted, theme }) =>
    color && inverted
      ? getColor(theme.colors[color] || color)
      : !inverted && color
      ? themeGet("colors.white")
      : themeGet("colors.secondary")};
  display: ${({ fullWidth }) => (fullWidth ? "block" : "inline-block")};
  font-family: inherit;
  font-size: ${({ size }) => themeGet(`fontSize.${getFontSize(size)}`)};
  font-weight: ${({ size }) => themeGet(`fontWeight.${getFontWeight(size)}`)};
  line-height: 1.2;
  outline: none;
  padding: ${({ size }) => getSize(size)};
  text-align: center;
  text-decoration: none;
  transition: background-color ${themeGet("transition")}, border-color ${themeGet("transition")},
    color ${themeGet("transition")};
  user-select: none;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  -webkit-appearance: none;
  -moz-appearance: none;

  &:hover:not(:disabled),
  &:active:not(:disabled),
  &:focus {
    background-color: ${({ color, dark, lighten, theme }) =>
      color
        ? getActiveColor(theme.colors[color] || color, lighten)
        : dark
        ? themeGet("colors.grey.5")
        : themeGet("colors.grey.1")};
    border-color: ${({ color, lighten, theme }) =>
      color ? getActiveColor(theme.colors[color] || color, lighten) : "transparent"};
    color: ${({ color, dark }) => (color || dark ? themeGet("colors.white") : themeGet("colors.grey.6"))};
    cursor: pointer;
  }
  &:disabled {
    opacity: 0.3;
  }
  ${position}
  ${space}
  ${typography}
`;

/**
 * For all your buttoning needs.
 *
 * Accepts **`position`**, **`space`** and **`typography`** props from `styled-system` props in addition to
 * `<button>` attributes.
 */
const Button = ({
  children,
  color,
  dark = false,
  lighten = false,
  fullWidth = false,
  inverted,
  size = "medium",
  ...props
}) => {
  return (
    <StyledButton
      color={color}
      dark={dark}
      lighten={lighten}
      fullWidth={fullWidth}
      inverted={inverted}
      size={size}
      {...props}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  /** Button label */
  children: propTypes.node,
  /** Button color variation. Can be a custom hash value or a string. If no `color` is applied,
   * uses default Button style (default) */
  color: propTypes.string,
  /** Default Button variant. Has no impact when `color` is provided. */
  dark: propTypes.bool,
  /** Full width of the container. Container's `display` settings may affect this */
  fullWidth: propTypes.bool,
  /** Inverted Button style */
  inverted: propTypes.bool,
  /** When true, component will lighten when hovered over / is active. Darkens by default */
  lighten: propTypes.bool,
  size: propTypes.oneOf(["small", "medium", "large"])
};

export default Button;
