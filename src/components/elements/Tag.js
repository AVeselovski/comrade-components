import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import { color, layout, space, typography } from "styled-system";
import { themeGet } from "@styled-system/theme-get";
// utils
import { getColor, getActiveColor } from "../../utils/theme-helpers";

const getSize = (size) => ({ small: "4px 8px", medium: "6px 12px", large: "8px 16px" }[size]);

const StyledTagPlain = styled.span`
  background-color: ${({ bg, theme }) => (!!bg ? getColor(theme.colors[bg] || bg) : "inherit")};
  border: 0;
  border-radius: 74px;
  color: ${({ color, theme }) => (!!color ? getColor(theme.colors[color] || color) : "inherit")};
  cursor: auto;
  display: inline;
  font-size: ${themeGet("fontSize.sm")};
  font-weight: ${themeGet("fontWeight.fat")};
  line-height: 1;
  outline: none;
  padding: ${({ size }) => getSize(size)};
  text-decoration: none !important;
  user-select: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  &:hover {
    background-color: auto;
    color: auto;
  }

  ${layout}
  ${space}
  ${typography}
`;

const StyledTag = styled(StyledTagPlain)`
  cursor: pointer;
  &:hover {
    background-color: ${({ bg, lighten, theme }) =>
      bg ? getActiveColor(theme.colors[bg] || bg, lighten) : "auto"};
    color: ${({ bg, color, lighten, theme }) =>
      color && ((bg && lighten) || !bg) ? getActiveColor(theme.colors[color] || color, lighten) : "auto"};
  }
`;

/**
 * To use tags as links, wrap them in `<a>` or `Link` element. Styling of the tag
 * might be affected by document's link styles.
 *
 * Accepts **`layout`**, **`space`** and **`typography`** props from `styled-system`.
 */
const Tag = ({
  as = "span",
  bg = "",
  children,
  color = "secondary",
  lighten = false,
  plain = false,
  size = "small",
  ...props
}) =>
  !plain ? (
    <StyledTag as={as} bg={bg} color={color} lighten={lighten ? 1 : 0} size={size} {...props}>
      {children}
    </StyledTag>
  ) : (
    <StyledTagPlain as={as} bg={bg} color={color} lighten={lighten ? 1 : 0} size={size} {...props}>
      {children}
    </StyledTagPlain>
  );

Tag.propTypes = {
  /** HTML tag */
  as: propTypes.string,
  /** Background color of the Tag */
  bg: propTypes.string,
  children: propTypes.node.isRequired,
  /** Color of the Tag */
  color: propTypes.string,
  /** When true, component will lighten when hovered over / is active. Lightens by default */
  lighten: propTypes.bool,
  /** By default Tag is clickable. This turns off hover styles */
  plain: propTypes.bool,
  /** Size of the Tag */
  size: propTypes.oneOf(["small", "medium", "large"])
};

export default Tag;
