import React, { Component } from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import { border, color, flexbox, layout, position, space, typography } from "styled-system";
import { themeGet } from "@styled-system/theme-get";
import { rem } from "polished";
// components
import Box from "../elements/Box";

const StyledAnchor = styled(Box)`
  left: calc(100% + ${rem(16)});
  position: absolute;
  top: ${rem(16 * 1.5)};
  ${position}
  ${space}
`;

const Anchor = ({ children, ...props }) => <StyledAnchor {...props}>{children}</StyledAnchor>;

const StyledHeader = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding-bottom: ${rem(16 * 1.5)};
  padding-left: ${rem(16)};
  padding-right: ${rem(16)};
  padding-top: ${rem(16 * 1.5)};
  ${position}
  ${space}
`;

const Header = ({ children, ...props }) => <StyledHeader {...props}>{children}</StyledHeader>;

const StyledBody = styled(Box)`
  padding-left: ${rem(16)};
  padding-right: ${rem(16)};
  ${position}
  ${space}
`;

const Body = ({ children, ...props }) => <StyledBody {...props}>{children}</StyledBody>;

const StyledFooter = styled(Box)`
  bottom: 0;
  left: 0;
  padding-bottom: ${rem(16 * 1.5)};
  padding-left: ${rem(16)};
  padding-right: ${rem(16)};
  position: absolute;
  width: 100%;
  ${position}
  ${space}
`;

const Footer = ({ children, ...props }) => <StyledFooter {...props}>{children}</StyledFooter>;

const StyledSideNav = styled.div`
  bottom: 0;
  height: 100%;
  left: -${({ isOpen, fullWidth }) => (!isOpen ? (fullWidth ? "100%" : themeGet("sizes.1")) : "0")};
  position: fixed;
  top: 0;
  transition: left ${themeGet("transition")};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : themeGet("sizes.1"))};
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
class SideNav extends Component {
  static Anchor = Anchor;
  static Header = Header;
  static Body = Body;
  static Footer = Footer;

  render() {
    const { children, fullWidth = false, isOpen = false, ...props } = this.props;

    return (
      <StyledSideNav fullWidth={fullWidth} isOpen={isOpen} {...props}>
        {children}
      </StyledSideNav>
    );
  }
}

SideNav.propTypes = {
  children: propTypes.node.isRequired,
  /** Expands SideNav 100% if true (for mobile views) */
  fullWidth: propTypes.bool,
  /** Slides SideNav into view from left side */
  isOpen: propTypes.bool
};

export default SideNav;
