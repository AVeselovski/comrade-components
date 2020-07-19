import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import { space, typography } from "styled-system";
// utils
import { getColor, getActiveColor } from "../../utils/theme-helpers";

const StyledLink = styled.a`
  color: ${({ theme, color }) => (color ? getColor(theme.colors[color] || color) : "inherit")};
  display: ${({ wrap = 0 }) => (wrap ? "inline-block" : "inline")};
  display: ${({ wrap = 0 }) => (wrap ? "inline-flex" : "inline")};
  opacity: ${({ disabled }) => (disabled ? "0.5" : "1")};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  text-decoration: none;

  &:hover,
  &:focus,
  &:active {
    color: ${({ theme, color, lighten }) =>
      color ? getActiveColor(theme.colors[color] || color, lighten || color === "light") : "inherit"};
    text-decoration: none;
  }

  ${space}
  ${typography}
`;

/**
 * Pure link component with custom styling.
 *
 * Accepts **`space`** and **`typography`** props from `styled-system` props in addition to
 * `<a>` attributes.
 */
const Link = ({ children, color = "link", disabled = false, lighten = false, wrap = false, ...props }) => (
  /** https://github.com/styled-components/styled-components/issues/1198#issuecomment-336621217 */
  <StyledLink color={color} disabled={disabled} lighten={lighten ? 1 : 0} wrap={wrap ? 1 : 0} {...props}>
    {children}
  </StyledLink>
);

Link.propTypes = {
  children: propTypes.node.isRequired,
  /** Link color variation. Can be a custom hash value or string */
  color: propTypes.string,
  /** Disables link */
  disabled: propTypes.bool,
  /** When true, component will lighten when hovered over / is active. Darkens by default */
  lighten: propTypes.bool,
  /** For properly wrapping other elements such as Box, Tag, etc. */
  wrap: propTypes.bool
};

export default Link;
