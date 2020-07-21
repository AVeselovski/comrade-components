import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import { border, layout, position, space } from "styled-system";
import { themeGet } from "@styled-system/theme-get";
// utils
import { getColor, getActiveColor } from "../../utils/theme-helpers";

const StyledIconButton = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 50%;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  outline: none;
  padding: 0;
  text-align: center;
  text-decoration: none;
  user-select: none;
  vertical-align: middle;

  svg {
    stroke: ${({ color, theme }) => getColor(theme.colors[color] || color) || themeGet("colors.black")};
    z-index: 1;
  }

  &:hover:not(:disabled),
  &:active:not(:disabled) {
    background-color: transparent;

    svg {
      stroke: ${({ color, lighten, theme }) =>
        getActiveColor(theme.colors[color] || color, lighten || color === "light")};
    }
  }
  &:disabled {
    opacity: 0.3;
    pointer-events: none;
  }
  ${border}
  ${layout}
  ${position}
  ${space}
`;

const HighlightButtonIcon = styled(StyledIconButton)`
  &:hover:not(:disabled),
  &:active:not(:disabled) {
    background-color: ${themeGet("colors.grey.1")};

    svg {
      stroke: ${({ color, theme }) => getActiveColor(theme.colors[color] || color)};
    }
  }
`;

const HighlightDarkButtonIcon = styled(StyledIconButton)`
  &:hover:not(:disabled),
  &:active:not(:disabled) {
    background-color: ${themeGet("colors.grey.5")};

    svg {
      stroke: ${themeGet("colors.white")};
    }
  }
`;

const Button = styled(StyledIconButton)`
  background-color: ${({ color, theme }) => getColor(theme.colors[color] || color)};
  border: 3px solid ${({ color, theme }) => getColor(theme.colors[color] || color)};

  svg {
    stroke: ${themeGet("colors.white")};
    z-index: 1;
  }

  &:hover:not(:disabled),
  &:active:not(:disabled) {
    background-color: ${({ color, lighten, theme }) =>
      getActiveColor(theme.colors[color] || color, lighten || color === "light")};
    border-color: ${({ color, lighten, theme }) =>
      getActiveColor(theme.colors[color] || color, lighten || color === "light")};

    svg {
      stroke: ${themeGet("colors.white")};
    }
  }
`;

const InvertedButton = styled(StyledIconButton)`
  background-color: inherit;
  border: 3px solid ${({ color, theme }) => getColor(theme.colors[color] || color)};

  svg {
    stroke: ${({ color, theme }) => getColor(theme.colors[color] || color)};
    z-index: 1;
  }

  &:hover:not(:disabled),
  &:active:not(:disabled) {
    background-color: ${({ color, lighten, theme }) =>
      getActiveColor(theme.colors[color] || color, lighten || color === "light")};
    border-color: ${({ color, lighten, theme }) =>
      getActiveColor(theme.colors[color] || color, lighten || color === "light")};

    svg {
      stroke: ${themeGet("colors.white")};
    }
  }
`;

const buttonType = {
  plain: StyledIconButton,
  highlight: HighlightButtonIcon,
  "highlight-dark": HighlightDarkButtonIcon,
  button: Button,
  "inverted-button": InvertedButton
};

/**
 * Button wrapper for icons. Takes over color assigning of Icon. `as="a"` prop, along with `href`
 * attribute can be passed to make the button act as `<a>` tag.
 *
 * Accepts **`border`**, **`layout`**, **`position`** and **`space`** props from `styled-system`,
 * in addition to `<button>` props.
 */
const IconButton = ({
  as = "button",
  children,
  color = "secondary",
  lighten = false,
  type = "plain",
  ...props
}) => {
  const CustomIconButton = buttonType[type] || buttonType[Object.keys(buttonType)[0]];

  return (
    <CustomIconButton as={as} color={color} lighten={lighten} type={type} {...props}>
      {children}
    </CustomIconButton>
  );
};

IconButton.propTypes = {
  /** HTML tag */
  as: propTypes.string,
  children: propTypes.node.isRequired,
  /** Icon color variation. Can be a custom hash value or string */
  color: propTypes.string,
  /** When true, component will lighten when hovered over / is active. Darkens by default.
   * Does not apply to `highlight` and `highlight-dark` types */
  lighten: propTypes.bool,
  /** Type of button used */
  type: propTypes.oneOf(["plain", "highlight", "highlight-dark", "button", "inverted-button"])
};

export default IconButton;
