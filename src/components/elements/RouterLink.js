import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { layout, space, typography } from "styled-system";
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

const StyledNavLink = styled(NavLink)`
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

  &.active {
    color: ${({ color, lighten, theme }) => (color ? activeColor(color, lighten, theme) : "inherit")};
    fill: ${({ color, lighten, theme }) => (color ? activeColor(color, lighten, theme) : "inherit")};
    stroke: ${({ color, lighten, theme }) => (color ? activeColor(color, lighten, theme) : "inherit")};
  }

  svg {
    stroke: inherit;
  }

  ${layout}
  ${space}
  ${typography}
`;

/**
 * `react-router-dom` (`NavLink`) version of `Link` component.
 *
 * Requires `react-router-dom`. Accepts **`layout`**, **`space`**,
 * and **`typography`** props from `styled-system`, in addition to `react-router-dom` `NavLink` props.
 */
const RouterLink = ({
  activeClassName = "active",
  children,
  color = "dark",
  disabled = false,
  lighten = false,
  ...props
}) => (
  /** https://github.com/styled-components/styled-components/issues/1198#issuecomment-336621217 */
  <StyledNavLink
    activeClassName={activeClassName}
    color={color}
    disabled={disabled}
    lighten={lighten ? 1 : 0}
    {...props}>
    {children}
  </StyledNavLink>
);

RouterLink.propTypes = {
  /** Active class for `NavLink`. `active` by default */
  activeClassName: propTypes.string,
  children: propTypes.node.isRequired,
  /** Link color variation. Can be a theme variable, custom hash value or string */
  color: propTypes.string,
  /** Disables link */
  disabled: propTypes.bool,
  /** When true, component will lighten when hovered over / is active. Darkens by default */
  lighten: propTypes.bool
};

export default RouterLink;
