Following examples have `position="static"` prop for displaying the component in boxes. Default `position` value is `fixed`.

Basic examples:

```jsx
import Box from "../elements/Box";

<Header bg="grey.1" position="static" px={4}>
  <Header.Left>
    <Box color="grey.6">Left</Box>
  </Header.Left>
  <Header.Center>
    <Box color="grey.6">Center</Box>
  </Header.Center>
  <Header.Right>
    <Box color="grey.6">Right</Box>
  </Header.Right>
</Header>;
```

```jsx
<Header border="2px dashed" borderColor="grey.2" color="grey.6" height={60} position="static" px={3}>
  <Header.Center>Only Center</Header.Center>
</Header>
```

You can pass `layout` props straight to `Header.Left|Center|Right` to manage displaying different parts at different breakpoints.

```jsx
import Box from "../elements/Box";

<Header height={60} position="static" px={3}>
  <Header.Left display={["block", "none"]}>
    <Box color="grey.6">Left</Box>
  </Header.Left>
  <Header.Center display={["none", "none", "block"]}>
    <Box color="grey.6">Center</Box>
  </Header.Center>
  <Header.Right>
    <Box color="grey.6">Right</Box>
  </Header.Right>
</Header>;
```

Header in mobile view:

```jsx
import Heading from "../elements/Heading";
import IconButton from "../elements/IconButton";
import Icon from "../elements/Icon";

<Header bg="grey.6" color="white" height={60} position="static" px={3}>
  <Header.Left>
    <Heading size="md" mb={0}>Title</Heading>
  </Header.Left>
  <Header.Right>
    <IconButton color="grey">
      <Icon name="menu-small" />
    </IconButton>
  </Header.Right>
</Header>;
```

**TIP:** Best showcase of Header and SideNav with proper content and playing together can be seen back on styleguide page.

Fixed (default) header:

```jsx
import HeaderNav from "../patterns/HeaderNav";
import Box from "../elements/Box";
import Button from "../elements/Button";
import Heading from "../elements/Heading";
import Icon from "../elements/Icon";
import IconButton from "../elements/IconButton";
import Link from "../elements/Link";

const [isOpen, setIsOpen] = React.useState(false);

<div>
  <Button onClick={() => setIsOpen(!isOpen)}>Toggle Header</Button>

  {isOpen && (
    <Header bg="grey.6" color="white" height={60} position="fixed">
      <Header.Left display={["block", "block", "none"]}>
        <IconButton color="grey" lighten>
          <Icon name="menu" />
        </IconButton>
      </Header.Left>
      <Header.Left display={["none", "none", "block"]}>
        <Heading size="md" mb={0}>Comrade Styles</Heading>
      </Header.Left>

      <Header.Center display={["none", "none", "block"]}>
        <HeaderNav color="light">
          <Link color="light" href="#">
            Weapons
          </Link>
          <Link color="light" href="#">
            Apparel
          </Link>
          <Link color="light" href="#">
            Potions
          </Link>
          <Link color="light" href="#">
            Scrolls
          </Link>
        </HeaderNav>
      </Header.Center>

      <Header.Right display={["none", "block", "none"]}>
        <HeaderNav color="light">
          <Link color="light" href="#">
            Weapons
          </Link>
          <Link color="light" href="#">
            Apparel
          </Link>
          <Link color="light" href="#">
            Potions
          </Link>
          <Link color="light" href="#">
            Scrolls
          </Link>
        </HeaderNav>
      </Header.Right>
      <Header.Right display={["none", "none", "block"]}>
        <Button color="light" inverted>
          Theme
        </Button>
      </Header.Right>
    </Header>
  )}
</div>;
```

```html
<!-- Vanilla -->
<div class="header">
  <div class="header-left">
    <h1 class="heading-base">
      <a href="#"> Comrade Styles </a>
    </h1>
  </div>
  <div class="header-center screen-lg">
    <ul class="nav-desktop">
      <li class="nav-desktop-item">
        <a href="#" class="link-light">Weapons</a>
      </li>
      <li class="nav-desktop-item">
        <a href="#" class="link-light">Armor</a>
      </li>
      <li class="nav-desktop-item">
        <a href="#" class="link-light">Potions</a>
      </li>
      <li class="nav-desktop-item">
        <a href="#" class="link-light">Quest items</a>
      </li>
    </ul>
  </div>
  <div class="header-right screen-md">
    <div class="btn btn-inverted-primary">Theme</div>
  </div>
</div>
```
