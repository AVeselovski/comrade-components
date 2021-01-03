import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import { color, layout, space, typography } from "styled-system";

const StyledHeading = styled.h1`
  font-size: ${(props) => props.theme.fontSize[props._textSize]};
  font-weight: ${(props) => props.theme.fontWeight[props._textSize]};

  small {
    ${({ _textSize, theme }) =>
      _textSize ? `font-weight: ${_textSize === "xxxl" ? theme.fontWeight.thin : theme.fontWeight.slim}` : ""};
  }
  ${color}
  ${layout}
  ${space}
  ${typography}
`;

/**
 * For all your heading needs... There's rarely a good reason to use this instead of `<h1>` etc.
 *
 * Accepts **`color`**, **`layout`**, **`space`** and **`typography`** props from `styled-system`.
 */
const Heading = ({ as = "h1", children, size, ...props }) => (
  <StyledHeading as={as} _textSize={size} {...props}>
    {children}
  </StyledHeading>
);

Heading.propTypes = {
  /** HTML tag */
  as: propTypes.string,
  children: propTypes.node.isRequired,
  /** Size of heading */
  size: propTypes.oneOf(["xxxl", "xxl", "xl", "lg", "md"])
};

export default Heading;
