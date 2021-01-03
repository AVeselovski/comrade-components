import propTypes from "prop-types";
import styled from "styled-components";
import { layout, space } from "styled-system";
import { rem } from "polished";
import { themeGet } from "@styled-system/theme-get";

/**
 * `Container` element to contain the insides of `Page` (or other) content. `Container`, like `Page`,
 * is just a Box with preset padding / margin. Same goal can be achieved with `Box` (although with more
 * `styled-system` props). `Container` (as well as `Page`) exists mostly for semantic convenience.
 * With `comrade-styles` a simple "`container`" class achieves the same. 
 *
 * Spacing and layout can be overriden with `styled-system` props. Accepts **`layout`** and **`space`**
 * props from `styled-system`. As any other component with `styled-system` props, with breakpoints defined in
 * theme, accepts an array with values for each breakpoint. In this case, Container **`width`** can
 * be easily adjusted for every breakpoint by passing an array `width={['100%', 1 / 3, 512]}`.
 */
const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${({ full }) => (full ? "auto" : rem("960px"))};
  padding-left: ${themeGet("space.3")};
  padding-right: ${themeGet("space.3")};
  width: 100%;
  ${layout}
  ${space}
`;

Container.propTypes = {
  /** Makes the container full page (or container) */
  full: propTypes.bool
};

/** @component */
export default Container;
