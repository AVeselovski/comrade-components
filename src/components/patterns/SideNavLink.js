import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
// components
import RouterLink from "../elements/RouterLink";

const LinkDesktop = styled(RouterLink)`
  display: block;
  margin-bottom: ${themeGet("space.2")};
  padding-bottom: ${themeGet("space.2")};
  padding-left: ${themeGet("space.3")};
  padding-top: ${themeGet("space.2")};
  transition: color ${themeGet("transition")}, padding ${themeGet("transition")};

  &:hover {
    border-left: 3px solid;
    padding-left: calc(${themeGet("space.3")} + ${themeGet("space.2")});
  }

  &.active {
    border-left: 3px solid;
    padding-left: calc(${themeGet("space.3")} + ${themeGet("space.2")});
  }
`;

const LinkMobile = styled(RouterLink)`
  margin-bottom: ${themeGet("space.1")};
  padding-bottom: ${themeGet("space.2")};
  padding-left: ${themeGet("space.3")};
  padding-right: ${themeGet("space.3")};
  padding-top: calc(${themeGet("space.3")});
  text-align: center;

  &.active {
    border-bottom: 2px solid;
  }
`;

const links = {
  "navigation-desktop": LinkDesktop,
  "navigation-mobile": LinkMobile
};

const SideNavLink = ({ activeClassName = "active", children, type, ...props }) => {
  const LinkType = links[type] || links[Object.keys(links)[0]];

  return (
    <LinkType activeClassName={activeClassName} {...props}>
      {children}
    </LinkType>
  );
};

SideNavLink.propTypes = {
  activeClassName: propTypes.string,
  children: propTypes.node.isRequired,
  type: propTypes.string.isRequired
};

export default SideNavLink;
