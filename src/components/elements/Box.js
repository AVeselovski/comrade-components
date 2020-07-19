import propTypes from "prop-types";
import styled from "styled-components";
import { border, color, flexbox, layout, position, space, typography } from "styled-system";

/**
 * Basic layout element, that renders `div` element. Useful for injecting basic
 * styles (custom or theme) with the help of `styled-system`. If `styled-system` is NOT used
 * and would only act as a wrapping element and nothing else, JUST USE THE `div`.
 *
 * Accepts **`border`**, **`color`**, **`flexbox`**, **`layout`**, **`position`**, **`space`** and
 * **`typography`** props from `styled-system`.
 */
const Box = styled.div`
  box-sizing: border-box;
  display: ${({ flex }) => (flex ? "flex" : "block")};
  ${border}
  ${color}
  ${flexbox}
  ${layout}
  ${position}
  ${space}
  ${typography}
`;

Box.propTypes = {
  /** Makes the box flex */
  flex: propTypes.bool
};

/** @component */
export default Box;
