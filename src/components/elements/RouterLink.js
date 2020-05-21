import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { space, typography } from "styled-system";
// utils
import { getColor, getActiveColor } from "../../utils/theme-helpers";

const StyledLink = styled(Link)`
  color: ${({ color, theme }) => (color ? getColor(theme.colors[color] || color) : "inherit")};
  display: ${({ wrap = 0 }) => (wrap ? "inline-block" : "inline")};
  display: ${({ wrap = 0 }) => (wrap ? "inline-flex" : "inline")};
  opacity: ${({ disabled }) => (disabled ? "0.5" : "1")};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  text-decoration: none;

  &:hover,
  &:focus,
  &:active {
    color: ${({ color, lighten, theme }) =>
      color ? getActiveColor(theme.colors[color] || color, lighten) : "inherit"};
    text-decoration: none;
  }

  &.active {
    color: ${({ color, lighten, theme }) =>
      color ? getActiveColor(theme.colors[color] || color, lighten) : "inherit"};
  }

  ${space}
  ${typography}
`;

const StyledNavLink = styled(NavLink)`
  color: ${({ color, theme }) => (color ? getColor(theme.colors[color] || color) : "inherit")};
  display: ${({ wrap = 0 }) => (wrap ? "inline-block" : "inline")};
  display: ${({ wrap = 0 }) => (wrap ? "inline-flex" : "inline")};
  opacity: ${({ disabled }) => (disabled ? "0.5" : "1")};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  text-decoration: none;

  &:hover,
  &:focus,
  &:active {
    color: ${({ color, lighten, theme }) =>
      color ? getActiveColor(theme.colors[color] || color, lighten) : "inherit"};
    text-decoration: none;
  }

  &.active {
    color: ${({ color, lighten, theme }) =>
      color ? getActiveColor(theme.colors[color] || color, lighten) : "inherit"};
  }

  ${space}
  ${typography}
`;

/**
 * `react-router-dom (NavLink` & `Link`) version of `Link` component.
 *
 * Requires `react-router-dom`. Accepts **`space`**
 * and **`typography`** props from `styled-system`, in addition to `react-router-dom` `Link` props.
 */
const RouterLink = ({
  activeClassName = "",
  children,
  color = "dark",
  disabled = false,
  lighten = false,
  wrap = false,
  ...props
}) =>
  activeClassName ? (
    /** https://github.com/styled-components/styled-components/issues/1198#issuecomment-336621217 */
    <StyledNavLink
      activeClassName={activeClassName}
      color={color}
      disabled={disabled}
      lighten={lighten ? 1 : 0}
      wrap={wrap ? 1 : 0}
      {...props}>
      {children}
    </StyledNavLink>
  ) : (
    <StyledLink color={color} disabled={disabled} lighten={lighten ? 1 : 0} wrap={wrap ? 1 : 0} {...props}>
      {children}
    </StyledLink>
  );

RouterLink.propTypes = {
  /** Active class for `NavLink`. Uses `Link` if not supplied */
  activeClassName: propTypes.string,
  children: propTypes.node.isRequired,
  /** Link color variation. Can be a custom hash value or string */
  color: propTypes.string,
  /** Disables link */
  disabled: propTypes.bool,
  /** When true, component will lighten when hovered over / is active. Darkens by default */
  lighten: propTypes.bool,
  /** For properly wrapping other elements such as Box, Tag, icons etc. */
  wrap: propTypes.bool
};

export default RouterLink;
