import propTypes from "prop-types";
import styled from "styled-components";
import { color, layout, space } from "styled-system";

/**
 * `min-height` of Page is `100vh` by default. This, as well as `flex` display with
 * `column` direction can be overriden with `styled-system` **`layout`** props.
 *
 * Accepts **`color`**, **`layout`** and **`space`** props from `styled-system`.
 */
const Page = styled.section`
  box-sizing: border-box;
  display: ${({ flex }) => (flex ? "flex" : "block")};
  flex-direction: column;
  min-height: 100vh;
  ${color}
  ${layout}
  ${space}
`;

Page.propTypes = {
  /** Makes the page flex */
  flex: propTypes.bool
};

Page.defaultProps = {
  flex: true
};

/** @component */
export default Page;
