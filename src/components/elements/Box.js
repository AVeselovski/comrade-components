import styled from "styled-components";
import propTypes from "prop-types";
import { border, color, flexbox, layout, position, space, typography } from "styled-system";

/**
 * Basic building block for any occasion, that renders a `div` element (or any and all via `as` prop).
 * Useful for injecting basic styles (custom or theme) with the help of `styled-system` and other dynamic
 * styles. If `styled-system` is NOT used and the Box would only act as a wrapping element and nothing else,
 * just use the `div`. Can be displayed as simple `Card`. If an actual `Card` is needed (with more structure),
 * use the `Card`.
 *
 * Accepts **`border`**, **`color`**, **`flexbox`**, **`layout`**, **`position`**, **`space`** and
 * **`typography`** props from `styled-system`.
 */
const Box = styled.div`
  ${({ card, theme }) =>
    card &&
    `
    background-color: ${theme.colors.bg};
    border: 1px solid ${theme.colors.border};
    border-radius: 3px;
    padding: ${theme.space[3]}
  `};

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

Box.propTypes = {
  /** Displays `Box` as simple `Card` */
  card: propTypes.bool
};

Box.defaultProps = {
  card: false
};

/** @component */
export default Box;
