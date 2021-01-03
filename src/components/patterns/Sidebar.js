import React, { Component } from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import { border, color, flexbox, layout, position, space, typography } from "styled-system";
import { themeGet } from "@styled-system/theme-get";
// components
import Box from "../elements/Box";

const StyledAnchor = styled(Box)`
  left: calc(100% + ${themeGet("space.3")});
  position: absolute;
  top: calc(${themeGet("space.3")} + ${themeGet("space.2")});
  ${position}
  ${space}
`;

const Anchor = ({ children, ...props }) => <StyledAnchor {...props}>{children}</StyledAnchor>;

const StyledHeader = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding-bottom: calc(${themeGet("space.3")} + ${themeGet("space.2")});
  padding-left: ${themeGet("space.3")};
  padding-right: ${themeGet("space.3")};
  padding-top: calc(${themeGet("space.3")} + ${themeGet("space.2")});
  ${position}
  ${space}
`;

const Header = ({ children, ...props }) => <StyledHeader {...props}>{children}</StyledHeader>;

const StyledBody = styled(Box)`
  padding-top: ${themeGet("space.3")};
  ${position}
  ${space}
`;

const Body = ({ children, ...props }) => <StyledBody {...props}>{children}</StyledBody>;

const StyledFooter = styled(Box)`
  bottom: 0;
  left: 0;
  padding-bottom: calc(${themeGet("space.3")} + ${themeGet("space.2")});
  padding-left: ${themeGet("space.3")};
  padding-right: ${themeGet("space.3")};
  position: absolute;
  width: 100%;
  ${position}
  ${space}
`;

const Footer = ({ children, ...props }) => <StyledFooter {...props}>{children}</StyledFooter>;

const StyledSidebar = styled.div`
  background-color: ${themeGet("colors.bgDark")};
  bottom: 0;
  height: 100%;
  left: -${({ isOpen, isFullWidth }) => (!isOpen ? (isFullWidth ? "100%" : themeGet("sizes.1")) : "0")};
  position: fixed;
  top: 0;
  transition: left ${themeGet("transition")};
  width: ${({ isFullWidth }) => (isFullWidth ? "100%" : themeGet("sizes.1"))};
  z-index: 1000;
  ${border}
  ${color}
  ${flexbox}
  ${layout}
  ${position}
  ${space}
  ${typography}
`;

/**
 * SideNav component with modular composition.
 *
 * Accepts **`border`**, **`color`**, **`flexbox`**, **`layout`**, **`position`**,
 * **`space`** and **`typography`** props from `styled-system`.
 */
class Sidebar extends Component {
  static Anchor = Anchor;
  static Header = Header;
  static Body = Body;
  static Footer = Footer;

  render() {
    const { children, isFullWidth = false, isOpen = false, ...props } = this.props;

    return (
      <StyledSidebar isFullWidth={isFullWidth} isOpen={isOpen} {...props}>
        {children}
      </StyledSidebar>
    );
  }
}

Sidebar.propTypes = {
  children: propTypes.node.isRequired,
  /** Expands Sidebar 100% if true (for mobile views) */
  isFullWidth: propTypes.bool,
  /** Slides Sidebar into view from left side */
  isOpen: propTypes.bool
};

export default Sidebar;
