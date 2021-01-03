import propTypes from "prop-types";
import styled from "styled-components";
import { color, layout, space } from "styled-system";
import { rem } from "polished";
import { themeGet } from "@styled-system/theme-get";

/**
 * Page is just a Box with preset padding based on header position (fixed vs static).
 * Same goal can be achieved with `Box` (although with more `styled-system` props). `Page`
 * (as well as `Container`) exists mostly for semantic convenience. With `comrade-styles` a simple
 * "`page`" class achieves the same. 
 *
 * Spacing and layout can be overriden with `styled-system` props. Accepts **`color`**, **`layout`**
 * and **`space`** props from `styled-system`.
 */
const Page = styled.main`
  box-sizing: border-box;
  display: block;
  flex-direction: column;
  min-height: ${({ staticHeader }) => (staticHeader ? `calc(100vh - ${rem("80px")})` : "100vh")};
  padding-bottom: ${themeGet("space.3")};
  padding-top: ${({ staticHeader }) =>
    staticHeader ? `${themeGet("space.3")}` : `calc(${rem("80px")} + ${rem("16px")})`};
  ${color}
  ${layout}
  ${space}
`;

Page.propTypes = {
  /** For static headers */
  staticHeader: propTypes.bool
};

Page.defaultProps = {
  staticHeader: false
};

/** @component */
export default Page;
