import styled from "styled-components";
import { layout, space } from "styled-system";

/**
 * Container element to contain the insides of `Page` (or other) content.
 *
 * Accepts **`layout`** and **`space`** props from `styled-system`. As any other
 * component with `styled-system` props, with breakpoints defined in theme, accepts
 * an array with values for each breakpoint. In this case, Container **`width`** can
 * be easily adjusted for every breakpoint by passing an array `width={['100%', 1 / 3, 512]}`.
 *
 * **TIP:** resize the window to see breakpoints in action.
 */
const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 960px;
  width: 100%;
  ${layout}
  ${space}
`;

/** @component */
export default Container;
