import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import { themeGet } from "@styled-system/theme-get";
// utils
import { getColor } from "../../utils/theme-helpers";

const StyledIcon = styled.svg`
  fill: ${({ color, theme }) => getColor(theme.colors[color] || color) || themeGet("colors.black")};
  stroke: ${({ color, theme }) => getColor(theme.colors[color] || color) || themeGet("colors.black")};
  vertical-align: middle;
`;

const ChevronDown = ({ color, size, ...props }) => (
  <StyledIcon
    color={color}
    height={size ? size : "30"}
    width={size ? size : "30"}
    viewBox="0 0 30 30"
    {...props}>
    <path d="M4,12 15,24 26,12" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
  </StyledIcon>
);

const ChevronLeft = ({ color, size, ...props }) => (
  <StyledIcon
    color={color}
    height={size ? size : "30"}
    width={size ? size : "30"}
    viewBox="0 0 30 30"
    {...props}>
    <path d="M18,4 6,15 18,26" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
  </StyledIcon>
);

const ChevronRight = ({ color, size, ...props }) => (
  <StyledIcon
    color={color}
    height={size ? size : "30"}
    width={size ? size : "30"}
    viewBox="0 0 30 30"
    {...props}>
    <path d="M12,4 24,15 12,26" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
  </StyledIcon>
);

const ChevronUp = ({ color, size, ...props }) => (
  <StyledIcon
    color={color}
    height={size ? size : "30"}
    width={size ? size : "30"}
    viewBox="0 0 30 30"
    {...props}>
    <path d="M4,18 15,6 26,18" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
  </StyledIcon>
);

const ChevronDownSmall = ({ color, size, ...props }) => (
  <StyledIcon
    color={color}
    height={size ? size : "24"}
    width={size ? size : "24"}
    viewBox="0 0 24 24"
    {...props}>
    <path d="M4,10 12,18 20,10" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
  </StyledIcon>
);

const ChevronLeftSmall = ({ color, size, ...props }) => (
  <StyledIcon
    color={color}
    height={size ? size : "24"}
    width={size ? size : "24"}
    viewBox="0 0 24 24"
    {...props}>
    <path d="M14,4 6,12 14,20" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
  </StyledIcon>
);

const ChevronRightSmall = ({ color, size, ...props }) => (
  <StyledIcon
    color={color}
    height={size ? size : "24"}
    width={size ? size : "24"}
    viewBox="0 0 24 24"
    {...props}>
    <path d="M10,4 18,12 10,20" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
  </StyledIcon>
);

const ChevronUpSmall = ({ color, size, ...props }) => (
  <StyledIcon
    color={color}
    height={size ? size : "24"}
    width={size ? size : "24"}
    viewBox="0 0 24 24"
    {...props}>
    <path d="M4,14 12,6 20,14" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
  </StyledIcon>
);

const Close = ({ color, size, ...props }) => (
  <StyledIcon
    color={color}
    height={size ? size : "30"}
    width={size ? size : "30"}
    viewBox="0 0 30 30"
    {...props}>
    <path d="M4,26 26,4" fill="none" strokeLinecap="round" strokeWidth="3" />
    <path d="M4,4 26,26" fill="none" strokeLinecap="round" strokeWidth="3" />
  </StyledIcon>
);

const CloseSmall = ({ color, size, ...props }) => (
  <StyledIcon
    color={color}
    height={size ? size : "24"}
    width={size ? size : "24"}
    viewBox="0 0 24 24"
    {...props}>
    <path d="M4,20 20,4" fill="none" strokeLinecap="round" strokeWidth="3" />
    <path d="M4,4 20,20" fill="none" strokeLinecap="round" strokeWidth="3" />
  </StyledIcon>
);

// unused
const Delete = ({ color, size, ...props }) => (
  <StyledIcon
    color={color}
    height={size ? size : "30"}
    width={size ? size : "30"}
    viewBox="0 0 30 30"
    {...props}>
    <path d="M4,9 8,26 22,26 26,9" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
    <path d="M8,4 22,4" fill="none" strokeLinecap="round" strokeWidth="3" />
    <path d="M12,10 12,21" fill="none" strokeLinecap="round" strokeWidth="2" />
    <path d="M18,10 18,21" fill="none" strokeLinecap="round" strokeWidth="2" />
  </StyledIcon>
);

const DeleteSmall = ({ color, size, ...props }) => (
  <StyledIcon
    color={color}
    height={size ? size : "24"}
    width={size ? size : "24"}
    viewBox="0 0 24 24"
    {...props}>
    <path d="M4,6 6,20 18,20 20,6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    <path d="M7,3 17,3" fill="none" strokeLinecap="round" strokeWidth="3" />
    <path d="M10,8 10,16" fill="none" strokeLinecap="round" strokeWidth="2" />
    <path d="M14,8 14,16" fill="none" strokeLinecap="round" strokeWidth="2" />
  </StyledIcon>
);

// unused
const Edit = ({ color, size, ...props }) => (
  <StyledIcon
    color={color}
    height={size ? size : "30"}
    width={size ? size : "30"}
    viewBox="0 0 30 30"
    {...props}>
    <path
      d="M14,4 4,4 4,26 26,26 26,16"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
    />
    <path d="M14,16 27,3" fill="none" strokeLinecap="round" strokeWidth="3" />
  </StyledIcon>
);

const EditSmall = ({ color, size, ...props }) => (
  <StyledIcon
    color={color}
    height={size ? size : "24"}
    width={size ? size : "24"}
    viewBox="0 0 24 24"
    {...props}>
    <path
      d="M10,4 5,4 5,20 19,20 19,14"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path d="M12,12 21,3" strokeLinecap="round" strokeWidth="3" />
  </StyledIcon>
);

const Menu = ({ color, size, ...props }) => (
  <StyledIcon
    color={color}
    height={size ? size : "30"}
    width={size ? size : "30"}
    viewBox="0 0 30 30"
    {...props}>
    <path d="M4,4 26,4" fill="none" strokeLinecap="round" strokeWidth="3" />
    <path d="M4,15 26,15" fill="none" strokeLinecap="round" strokeWidth="3" />
    <path d="M4,26 26,26" fill="none" strokeLinecap="round" strokeWidth="3" />
  </StyledIcon>
);

const MenuSmall = ({ color, size, ...props }) => (
  <StyledIcon
    color={color}
    height={size ? size : "24"}
    width={size ? size : "24"}
    viewBox="0 0 24 24"
    {...props}>
    <path d="M4,4 20,4" fill="none" strokeLinecap="round" strokeWidth="3" />
    <path d="M4,12 20,12" fill="none" strokeLinecap="round" strokeWidth="3" />
    <path d="M4,20 20,20" fill="none" strokeLinecap="round" strokeWidth="3" />
  </StyledIcon>
);

const Options = ({ color, size, ...props }) => (
  <StyledIcon
    color={color}
    height={size ? size : "30"}
    width={size ? size : "30"}
    viewBox="0 0 30 30"
    {...props}>
    <circle cx="5" cy="15" r="3" strokeWidth="0" />
    <circle cx="15" cy="15" r="3" strokeWidth="0" />
    <circle cx="25" cy="15" r="3" strokeWidth="0" />
  </StyledIcon>
);

const Plus = ({ color, size, ...props }) => (
  <StyledIcon
    color={color}
    height={size ? size : "30"}
    width={size ? size : "30"}
    viewBox="0 0 30 30"
    {...props}>
    <path d="M4,15 26,15" fill="none" strokeLinecap="round" strokeWidth="3" />
    <path d="M15,4 15,26" fill="none" strokeLinecap="round" strokeWidth="3" />
  </StyledIcon>
);

const PlusSmall = ({ color, size, ...props }) => (
  <StyledIcon
    color={color}
    height={size ? size : "24"}
    width={size ? size : "24"}
    viewBox="0 0 24 24"
    {...props}>
    <path d="M4,12 20,12" fill="none" strokeLinecap="round" strokeWidth="3" />
    <path d="M12,4 12,20" fill="none" strokeLinecap="round" strokeWidth="3" />
  </StyledIcon>
);

const icons = {
  "chevron-down": ChevronDown,
  "chevron-left": ChevronLeft,
  "chevron-right": ChevronRight,
  "chevron-up": ChevronUp,
  "chevron-down-small": ChevronDownSmall,
  "chevron-left-small": ChevronLeftSmall,
  "chevron-right-small": ChevronRightSmall,
  "chevron-up-small": ChevronUpSmall,
  close: Close,
  "close-small": CloseSmall,
  delete: DeleteSmall,
  "delete-small": DeleteSmall,
  edit: EditSmall,
  "edit-small": EditSmall,
  menu: Menu,
  "menu-small": MenuSmall,
  options: Options,
  plus: Plus,
  "plus-small": PlusSmall
};

/**
 * StyledIcon icon.
 */
export const Icon = ({ color = "secondary", name, size, ...props }) => {
  const CustomIcon = icons[name] || icons[Object.keys(icons)[0]];

  return <CustomIcon color={color} size={size} {...props} />;
};

Icon.propTypes = {
  /** Icon color variation. Can be a custom hash value or string */
  color: propTypes.string,
  /** Exported icon */
  name: propTypes.string.isRequired,
  /** Icon size */
  size: propTypes.string
};

export default Icon;
