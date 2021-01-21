import React, { Component } from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import { border, color, flexbox, layout, position, space } from "styled-system";
import { themeGet } from "@styled-system/theme-get";

const StyledHeaderLeft = styled.div`
  align-self: center;
  grid-column-start: 1;
  justify-self: left;
  padding-left: ${themeGet("space.3")};
  pointer-events: auto;
  text-align: left;
  ${flexbox}
  ${layout}
  ${space}
`;

const HeaderLeft = ({ children, ...props }) => <StyledHeaderLeft {...props}>{children}</StyledHeaderLeft>;

HeaderLeft.propTypes = {
  children: propTypes.node.isRequired
};

const StyledHeaderCenter = styled.div`
  align-self: center;
  grid-column-start: 2;
  justify-self: center;
  pointer-events: auto;
  text-align: center;
  ${flexbox}
  ${layout}
  ${space}
`;

const HeaderCenter = ({ children, ...props }) => (
  <StyledHeaderCenter {...props}>{children}</StyledHeaderCenter>
);

HeaderCenter.propTypes = {
  children: propTypes.node.isRequired
};

const StyledHeaderRight = styled.div`
  align-self: center;
  grid-column-start: 3;
  justify-self: right;
  padding-right: ${themeGet("space.3")};
  pointer-events: auto;
  text-align: right;
  ${flexbox}
  ${layout}
  ${space}
`;

const HeaderRight = ({ children, ...props }) => <StyledHeaderRight {...props}>{children}</StyledHeaderRight>;

HeaderRight.propTypes = {
  children: propTypes.node.isRequired
};

const StyledHeader = styled.div`
  align-content: center;
  display: inline-grid;
  grid-template-columns: auto auto auto;
  height: 80px;
  left: 0;
  pointer-events: none;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 100;
  ${border}
  ${color}
  ${flexbox}
  ${layout}
  ${position}
  ${space}
`;

/**
 * Header component with css-grid layout (left/center/right).
 *
 * Accepts **`border`**, **`color`**, **`layout`**, **`position`** and
 * **`space`** props from `styled-system`.
 *
 * Additionally `Header.Left`, `Header.Center` and `Header.Right` accept
 * **`flexbox`**, **`layout`** and **`space`** props from `styled-system` for easy
 * displaying and positioning of content.
 */
class Header extends Component {
  static Left = HeaderLeft;
  static Center = HeaderCenter;
  static Right = HeaderRight;

  render() {
    const { children, ...props } = this.props;

    return <StyledHeader {...props}>{children}</StyledHeader>;
  }
}

Header.propTypes = {
  children: propTypes.node.isRequired
};

export default Header;
