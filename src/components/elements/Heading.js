import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import { color, layout, space, typography } from "styled-system";

const StyledHeading = styled.h1`
  font-size: ${(props) => props.theme.fontSize[props.size]};
  font-weight: ${(props) => props.theme.fontWeight[props.size]};
  ${color}
  ${layout}
  ${space}
  ${typography}
`;

/**
 * For all your heading needs...
 *
 * Accepts **`color`**, **`layout`**, **`space`** and **`typography`** props from `styled-system`.
 */
const Heading = ({ as = "h1", children, size = "m", ...props }) => (
  <StyledHeading as={as} size={size} {...props}>
    {children}
  </StyledHeading>
);

Heading.propTypes = {
  /** HTML tag */
  as: propTypes.string,
  children: propTypes.node.isRequired,
  size: propTypes.oneOf(["xxxl", "xxl", "xl", "l", "m"])
};

export default Heading;
