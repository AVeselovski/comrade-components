import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

const StyledHeaderNav = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  & > * {
    display: inline-block;
  }

  li {
    display: inline-block;
    margin-left: ${themeGet("space.2")};
    margin-right: ${themeGet("space.2")};
  }
`;

/**
 * Navigation component for header. Takes `Link` or `RouterLink` as children.
 */
const HeaderNav = ({ children, color = "dark" }) => {
  return (
    <StyledHeaderNav>
      {React.Children.map(children, (c) => {
        const linkColor = c.props.color ? c.props.color : color;
        return <li>{React.cloneElement(c, { color: linkColor })}</li>;
      })}
    </StyledHeaderNav>
  );
};

HeaderNav.propTypes = {
  children: propTypes.node.isRequired,
  /** Links color. Assigning color manually to individual links (`RouterLink`, `Link`) will override this */
  color: propTypes.string
};

export default HeaderNav;
