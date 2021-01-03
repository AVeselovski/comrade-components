import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import { color, layout, space, typography } from "styled-system";
// utils
import { getColor, getActiveColor } from "../../utils/theme-helpers";

const activeColor = (colorName, lighten, theme) => {
  let color;

  switch (colorName) {
    case "dark":
      color = theme.colors.black;
      break;
    case "light":
      color = theme.colors.white;
      break;
    default:
      color = getActiveColor(theme.colors[colorName] || colorName, lighten);
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
    color: ${({ color, lighten, theme }) => (color ? activeColor(color, lighten, theme) : "inherit")};
    fill: ${({ color, lighten, theme }) => (color ? activeColor(color, lighten, theme) : "inherit")};
    stroke: ${({ color, lighten, theme }) => (color ? activeColor(color, lighten, theme) : "inherit")};
    text-decoration: none;
  }

  &.is-active {
    color: ${({ color, lighten, theme }) => (color ? activeColor(color, lighten, theme) : "inherit")};
    fill: ${({ color, lighten, theme }) => (color ? activeColor(color, lighten, theme) : "inherit")};
    stroke: ${({ color, lighten, theme }) => (color ? activeColor(color, lighten, theme) : "inherit")};
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
const Link = ({
  children,
  color = "link",
  disabled = false,
  isActive = false,
  lighten = false,
  ...props
}) => (
  /** https://github.com/styled-components/styled-components/issues/1198#issuecomment-336621217 */
  <StyledLink
    className={isActive ? "is-active" : ""}
    color={color}
    disabled={disabled}
    lighten={lighten ? 1 : 0}
    {...props}>
    {children}
  </StyledLink>
);

Link.propTypes = {
  children: propTypes.node.isRequired,
  /** Link color variation. Can be a theme variable, custom hash value or string */
  color: propTypes.string,
  /** Disables link */
  disabled: propTypes.bool,
  /** Applies `is-active` className. Just for semantic convenience. Can be just as well assigned the normal way */
  isActive: propTypes.bool,
  /** When true, component will lighten when hovered over / is active. Darkens by default */
  lighten: propTypes.bool
};

export default Link;
