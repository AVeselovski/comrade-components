import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import { color, layout, space, typography } from "styled-system";

const StyledText = styled.p`
  font-size: ${({ _textSize, theme }) => (_textSize ? theme.fontSize[_textSize] : "inherit")};
  font-weight: ${({ _textSize, theme }) => (_textSize ? theme.fontWeight[_textSize] : "inherit")};
  ${color}
  ${layout}
  ${space}
  ${typography}
`;

/**
 * For all your text needs... It is not necessary to use `Text` at all.
 * All the styling can be achived by passing the same props to parent element,
 * that has access to the props, such as `Box` for example. If you only want a
 * pure `<p>`, `span` etc. element with no custom styling, use it, there is no reason
 * not to. Using `Text` however doesn't hurt and makes for more varied semantic styling
 * a breeze.
 *
 * Accepts **`color`**, **`layout`**, **`space`** and **`typography`** props from
 * `styled-system`.
 */
const Text = ({ as = "p", children, size, ...props }) => (
  <StyledText as={as} _textSize={size} {...props}>
    {children}
  </StyledText>
);

Text.propTypes = {
  /** HTML tag */
  as: propTypes.string,
  children: propTypes.node.isRequired,
  /** Inherits font size & weight if not provided. */
  size: propTypes.oneOf(["sm", "base", "md"])
};

export default Text;
