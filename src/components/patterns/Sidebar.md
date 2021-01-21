Similar to `Header` component, with modular assembly. Accepts `isOpen` prop to show & hide
the component and `fullWidth` prop to determine whether to open in full width (`fullWidth` is meant for
mobile). It is up to you to handle the logic behind these props.

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
import Text from "../elements/Text";
import Sidebar from "./Sidebar";
import SidebarNav from "./SidebarNav";

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
    <Sidebar fullWidth={isMobile} isOpen={isOpen}>
      <Sidebar.Anchor>
        <IconButton disabled={isOpen} onClick={() => setIsOpen(true)}>
          <Icon name="menu" />
        </IconButton>
      </Sidebar.Anchor>
      <Sidebar.Header>
        {/* if header "left" side not used, leave an empty element (e.g. <div></div>) */}
        <Text as="span" color="secondary" fontWeight={3} size="sm">
          (version)
        </Text>
        <IconButton color="light" onClick={() => setIsOpen(false)}>
          <Icon name="close" />
        </IconButton>
      </Sidebar.Header>
      <Sidebar.Body>
        <Text color="light" p={3} size="sm">
          Body. Mainly for navigation links, but anything can be put here.
        </Text>
        <SidebarNav type={isMobile ? "simple" : "side"}>
          <Link href="#">Weapons</Link>
          <Link href="#">Apparel</Link>
          <Link href="#">Potions</Link>
          <Link href="#">Scrolls</Link>
          <Link external href="#">
            Quit
          </Link>
        </SidebarNav>
      </Sidebar.Body>
      <Sidebar.Footer>
        <Text color="light" size="sm">
          Footer. Buttons, info, etc. Anything can be put here as well.
        </Text>
      </Sidebar.Footer>
    </Sidebar>
  )}
</div>;
```

```html
<!-- Vanilla -->
<div class="sidebar">
  <div class="sidebar-anchor">
    <a href="#">
      <i class="fas fa-bars">
    </a>
  </div>
  <div class="sidebar-header">
    <span class="text-secondary">(version)</span>
    <a href="#">
      <i class="fas fa-times">
    </a>
  </div>
  <div class="sidebar-body">
    <p class="text-white text-sm p-3">Body. Mainly for navigation links, but anything can be put here.</p>
    <ul class="sidebar-nav side">
      <ul class="sidebar-nav-item"><a href="#">Weapons</a></ul>
      <ul class="sidebar-nav-item"><a href="#">Apparel</a></ul>
      <ul class="sidebar-nav-item"><a href="#">Potions</a></ul>
      <ul class="sidebar-nav-item"><a href="#">Scrolls</a></ul>
      <ul><a href="#"><i className="fas fa-external-link-alt mr-2"></i>Quit</a></ul>
    </ul>
  </div>
  <div class="sidebar-footer">
    <p class="text-white text-sm">Footer. Buttons, info, etc. Anything can be put here as well.</p>
  </div>
</div>
```
