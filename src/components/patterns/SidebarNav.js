import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

const StyledNavCenter = styled.ul`
  ${({ theme }) => {
    const { space } = theme;

    return `
      list-style: none;
      margin: 0;
      padding: 0;
      text-align: center;

      li {
        & a {
          margin-bottom: ${space[1]};
          padding-bottom: ${space[2]};
          padding-left: ${space[3]};
          padding-right: ${space[3]};
          padding-top: ${space[3]};
          text-align: center;
        }
      }

      .nav-item {
        a.active {
          border-bottom: 2px solid;
        }
      }
    `;
  }}
`;

const StyledNavSide = styled.ul`
  ${({ theme }) => {
    const { space, transition } = theme;

    return `
      list-style: none;
      margin: 0;
      padding: 0;
    
      li {
        & a {
          display: block;
          margin-bottom: ${space[2]};
          padding-bottom: ${space[2]};
          padding-left: ${space[3]};
          padding-top: ${space[2]};
          transition: color ${transition}, padding ${transition};
        }
        a.active {
          border-left: 3px solid;
          padding-left: calc(${space[3]} + ${space[2]});
        }
      }

      .nav-item {
        a {
          &:hover {
            border-left: 3px solid;
            padding-left: calc(${space[3]} + ${space[2]});
          }
        }
      }
    `;
  }}
`;

/**
 * Navigation component for sidebar, 2 types. Takes `Link` or `RouterLink` as children. Applying `external` prop on
 * individual links (`RouterLink`, `Link`) will stop a link from "jumping". For external or non navigation links
 * (without active state).
 */
const SidebarNav = ({ children, color = "light", type = "center" }) => {
  return type === "side" ? (
    <StyledNavSide>
      {React.Children.map(children, (c) => {
        const linkColor = c.props.color ? c.props.color : color;
        return (
          <li className={c.props.external ? "" : "nav-item"}>
            {React.cloneElement(c, { color: linkColor })}
          </li>
        );
      })}
    </StyledNavSide>
  ) : (
    <StyledNavCenter>
      {React.Children.map(children, (c) => {
        const linkColor = c.props.color ? c.props.color : color;
        return (
          <li className={c.props.external ? "" : "nav-item"}>
            {React.cloneElement(c, { color: linkColor })}
          </li>
        );
      })}
    </StyledNavCenter>
  );
};

SidebarNav.propTypes = {
  children: propTypes.node.isRequired,
  /** Links color. Assigning color manually to individual links (`RouterLink`, `Link`) will override this */
  color: propTypes.string,
  /** Type of navigation. Uses `center` mobile navigation by default */
  type: propTypes.oneOf(["center", "side"])
};

export default SidebarNav;
