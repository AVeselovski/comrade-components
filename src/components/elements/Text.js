import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import { color, layout, space, typography } from "styled-system";

const StyledText = styled.p`
  font-size: ${(props) => props.theme.fontSize[props.size]};
  font-weight: ${(props) => props.theme.fontWeight[props.size]};
  ${color}
  ${layout}
  ${space}
  ${typography}
`;

/**
 * For all your text needs... It is not necessary to use `Text` at all.
 * All the styling can be achived by passing the same props to parent element,
 * that has access to the props, such as `Box` for example. If you only want a
 * pure `<p>` element with no custom styling, just use it, there is no reason
 * not to. Using `Text` however doesn't hurt and makes applying some styling later
 * a breeze.
 *
 * Accepts **`color`**, **`layout`**, **`space`** and **`typography`** props from `styled-system`.
 */
const Text = ({ as = "p", children, size = "base", ...props }) => (
  <StyledText as={as} size={size} {...props}>
    {children}
  </StyledText>
);

Text.propTypes = {
  /** HTML tag */
  as: propTypes.string,
  children: propTypes.node.isRequired,
  size: propTypes.oneOf(["m", "base", "s"])
};

export default Text;
