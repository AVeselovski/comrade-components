import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import { color, layout, space, typography } from "styled-system";
// utils
import { getColor, getActiveColor } from "../../utils/theme-helpers";

const activeColor = (colorName, theme) => {
  let color;

  switch (colorName) {
    case "link":
      color = theme.colors.linkActive;
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

  return color;
};

const StyledLink = styled.a`
  color: ${({ color, theme }) => (color ? getColor(theme.colors[color] || color) : "inherit")};
  display: inline-block;
  fill: ${({ color, theme }) => (color ? getColor(theme.colors[color] || color) : "inherit")};
  opacity: ${({ disabled }) => (disabled ? "0.35" : "1")};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  stroke: ${({ color, theme }) => (color ? getColor(theme.colors[color] || color) : "inherit")};
  text-decoration: none;

  &:hover,
  &:focus,
  &:active {
    color: ${({ color, theme }) => (color ? activeColor(color, theme) : "inherit")};
    fill: ${({ color, theme }) => (color ? activeColor(color, theme) : "inherit")};
    stroke: ${({ color, theme }) => (color ? activeColor(color, theme) : "inherit")};
    text-decoration: none;
  }

  &.active {
    color: ${({ color, theme }) => (color ? activeColor(color, theme) : "inherit")};
    fill: ${({ color, theme }) => (color ? activeColor(color, theme) : "inherit")};
    stroke: ${({ color, theme }) => (color ? activeColor(color, theme) : "inherit")};
  }

  svg {
    stroke: inherit;
  }

  ${color}
  ${layout}
  ${space}
  ${typography}
`;

/**
 * Pure link component with custom styling.
 *
 * Accepts **`layout`**, **`space`** and **`typography`** props from `styled-system` props in addition to
 * `<a>` attributes.
 */
const Link = ({ children, color = "link", disabled = false, isActive = false, ...props }) => (
  <StyledLink className={isActive ? "active" : ""} color={color} disabled={disabled} {...props}>
    {children}
  </StyledLink>
);

Link.propTypes = {
  children: propTypes.node.isRequired,
  /** Link color variation. Can be a theme variable, custom hash value or string */
  color: propTypes.string,
  /** Disables link */
  disabled: propTypes.bool,
  /** Applies `active` className. Just for semantic convenience. Can be just as well assigned the normal way */
  isActive: propTypes.bool
};

export default Link;
