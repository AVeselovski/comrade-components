import styled from "styled-components";
import { border, color, flexbox, layout, position, space, typography } from "styled-system";

/**
 * Basic building block for any occasion, that renders a `div` element (or any and all via `as` prop). 
 * Useful for injecting basic styles (custom or theme) with the help of `styled-system`. If `styled-system`
 * is NOT used and the Box would only act as a wrapping element and nothing else, just use the `div`.
 *
 * Accepts **`border`**, **`color`**, **`flexbox`**, **`layout`**, **`position`**, **`space`** and
 * **`typography`** props from `styled-system`.
 */
const Box = styled.div`
  box-sizing: border-box;
  display: block;
  ${border}
  ${color}
  ${flexbox}
  ${layout}
  ${position}
  ${space}
  ${typography}
`;

/** @component */
export default Box;
