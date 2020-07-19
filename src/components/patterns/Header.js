import React, { Component } from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import { border, color, layout, position, space } from "styled-system";

const StyledHeaderLeft = styled.div`
  align-self: center;
  grid-column-start: 1;
  justify-self: left;
  pointer-events: auto;
  text-align: left;
  ${layout}
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
  ${layout}
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
  pointer-events: auto;
  text-align: right;
  ${layout}
`;

const HeaderRight = ({ children, ...props }) => <StyledHeaderRight {...props}>{children}</StyledHeaderRight>;

HeaderRight.propTypes = {
  children: propTypes.node.isRequired
};

const StyledHeader = styled.div`
  align-content: center;
  display: inline-grid;
  grid-template-columns: 20% auto 20%;
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
  ${layout}
  ${position}
  ${space}
`;

/**
 * Header component with css-grid layout (left/center/right).
 *
 * Accepts **`border`**, **`color`**, **`layout`**, **`position`** and
 * **`space`** props from `styled-system`.
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
