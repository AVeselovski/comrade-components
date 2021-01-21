import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import { border, color, layout, position, space, typography } from "styled-system";
// utils
import { getActiveColor, getBtnStyles } from "../../utils/theme-helpers";

const getBtnColors = (style) =>
  ({
    [style]: {
      btnColor: "secondary",
      btnActiveColor: "color"
    },
    light: {
      btnColor: "light",
      btnActiveColor: "white"
    },
    dark: {
      btnColor: "dark",
      btnActiveColor: "black"
    },
    info: {
      btnColor: "info"
    },
    danger: {
      btnColor: "danger"
    },
    success: {
      btnColor: "success"
    },
    warning: {
      btnColor: "warning"
    }
  }[style]);

const StyledIconButton = styled.button`
  ${({ btnSize, btnStyle, theme }) => {
    const { btnColor, btnActiveColor } = getBtnColors(btnStyle);
    const getBtnSize = (size) => ({ [size]: "26px", sm: "26px", md: "26px", lg: "32px" }[size]);
    const getBtnIconSize = (size) => ({ [size]: "24px", sm: "20px", md: "24px", lg: "30px" }[size]);
    const getBtnFontSize = (size) => ({ [size]: "md", sm: "base", md: "md", lg: "xl" }[size]);

    return `
      color: ${theme.colors[btnColor]};
      font-size: ${theme.fontSize[getBtnFontSize(btnSize)]};
      height: ${getBtnSize(btnSize)};
      width: ${getBtnSize(btnSize)};

      svg {
        fill:  ${theme.colors[btnColor]};
        height: ${getBtnIconSize(btnSize)};
        stroke:  ${theme.colors[btnColor]};
        width: ${getBtnIconSize(btnSize)};
      }

      &:hover:not(:disabled),
      &:active:not(:disabled),
      &:focus {
        background-color: transparent;
        color: ${
          btnActiveColor
            ? theme.colors[btnActiveColor]
            : getActiveColor(theme.colors[btnColor], theme.colorScheme)
        };
    
        svg {
          fill: ${
            btnActiveColor
              ? theme.colors[btnActiveColor]
              : getActiveColor(theme.colors[btnColor], theme.colorScheme)
          };
          stroke: ${
            btnActiveColor
              ? theme.colors[btnActiveColor]
              : getActiveColor(theme.colors[btnColor], theme.colorScheme)
          };
        }
      }
    `;
  }}
  ${border}
  ${color}
  ${layout}
  ${position}
  ${space}
  ${typography}
`;

const IconButton = ({ btnSize = "md", btnStyle = "secondary", children, ...props }) => {
  return (
    <StyledIconButton btnSize={btnSize} btnStyle={btnStyle} className="btn-icon-simple" {...props}>
      {children}
    </StyledIconButton>
  );
};

const StyledActionButton = styled.button`
  ${({ btnSize, btnStyle, inverted, theme }) => {
    const { btnBg, btnColor, btnActiveBg, btnActiveColor } = getBtnStyles(btnStyle, inverted, theme.colors);
    const getBtnSize = (size) => ({ [size]: "44px", sm: "32px", md: "44px", lg: "60px" }[size]);
    const getIconSize = (size) => ({ [size]: "24px", sm: "20px", md: "24px", lg: "30px" }[size]);
    const getBtnFontSize = (size) => ({ [size]: "md", sm: "base", md: "md", lg: "xl" }[size]);

    return `
      background-color: ${btnBg};
      border: 1px solid ${inverted ? theme.colors.muted : btnBg};
      color: ${btnColor};
      font-size: ${theme.fontSize[getBtnFontSize(btnSize)]};
      height: ${getBtnSize(btnSize)};
      width: ${getBtnSize(btnSize)};

      svg {
        fill: ${btnColor};
        height: ${getIconSize(btnSize)};
        stroke: ${btnColor};
        width: ${getIconSize(btnSize)};
      }

      &:hover:not(:disabled),
      &:active:not(:disabled),
      &:focus {
        background-color: ${btnActiveBg ? btnActiveBg : getActiveColor(btnBg, theme.colorScheme)};
        border-color: ${
          inverted
            ? btnActiveColor || getActiveColor(btnColor, theme.colorScheme)
            : btnActiveBg || getActiveColor(btnBg, theme.colorScheme)
        };
        color: ${
          btnActiveColor ? btnActiveColor : inverted ? getActiveColor(btnColor, theme.colorScheme) : btnColor
        };
        cursor: pointer;

        svg {
          fill: ${
            btnActiveColor
              ? btnActiveColor
              : inverted
              ? getActiveColor(btnColor, theme.colorScheme)
              : btnColor
          };
          stroke: ${
            btnActiveColor
              ? btnActiveColor
              : inverted
              ? getActiveColor(btnColor, theme.colorScheme)
              : btnColor
          };
        }
      }
    `;
  }}
  ${border}
  ${color}
  ${layout}
  ${position}
  ${space}
  ${typography}
`;

const ActionButton = ({ btnSize = "md", btnStyle = "secondary", children, inverted, ...props }) => {
  return (
    <StyledActionButton
      btnSize={btnSize}
      btnStyle={btnStyle}
      className="btn-icon"
      inverted={inverted}
      {...props}>
      {children}
    </StyledActionButton>
  );
};

export default IconButton;

export { ActionButton, IconButton };
