Similar to `Header` component, with modular assembly. Accepts `isOpen` prop to show & hide
the component and `fullWidth` prop to determine whether to open in full width (`fullWidth` is meant for
mobile, as it might affect spacing). It is up to you to handle the logic behind these props.

You can override default spacing and positioning of modular components via `styled-system`'s `position`
and `space` props.

**TIP:** Best showcase of Header and SideNav with proper content and playing together can be seen back on styleguide page.

SideNav showcasing full composition and one way to handle `isOpen` and `fullWidth` props:

```jsx
import { useEffect } from "react";
import Box from "../elements/Box";
import Button from "../elements/Button";
import Icon from "../elements/Icon";
import IconButton from "../elements/IconButton";
import Link from "../elements/Link";
import SideNav from "./SideNav";
import SideNavLink from "./SideNavLink";
import Text from "../elements/Text";

// for toggling SideNav showcase, not used in actual implementations
const [isVisible, setIsVisible] = React.useState(false);

const [isOpen, setIsOpen] = React.useState(true);
const [isMobile, setIsMobile] = React.useState(false);

useEffect(() => {
  const updateLayout = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  updateLayout();
  window.addEventListener("resize", updateLayout);

  return () => {
    window.removeEventListener("resize", updateLayout);
  };
}, []);

<div>
  {/* for toggling SideNav showcase, not used in actual implementations */}
  <Button onClick={() => setIsVisible(!isVisible)}>Toggle SideNav</Button>

  {isVisible && (
    <SideNav bg={"color"} fullWidth={isMobile} isOpen={isOpen}>
      <SideNav.Anchor>
        <IconButton disabled={isOpen} onClick={() => setIsOpen(true)}>
          <Icon name="menu" />
        </IconButton>
      </SideNav.Anchor>
      <SideNav.Header>
        <Text as="span" color="secondary" fontWeight={4} size="s">
          (version)
        </Text>
        <IconButton color="light" onClick={() => setIsOpen(false)}>
          <Icon name="close" />
        </IconButton>
      </SideNav.Header>
      <SideNav.Body>
        <Text color="bg">Body. Mainly for navigation links, but anything can be put here</Text>
      </SideNav.Body>
      <SideNav.Footer>
        <Text color="bg">Footer. Buttons, info, etc. Anything can be put here as well</Text>
      </SideNav.Footer>
    </SideNav>
  )}
</div>;
```
