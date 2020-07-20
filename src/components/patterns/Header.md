Following examples have `position="static"` prop for displaying the component in boxes. Default `position` value is `fixed`.

Basic examples:

```jsx
import Box from "../elements/Box";

<Header bg="grey.2" position="static" px={4}>
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
<Header border="2px dashed" borderColor="red" color="grey.6" height={60} position="static" px={3}>
  <Header.Center>Only Center</Header.Center>
</Header>
```

You can pass `layout` props straight to `Header.Left|Center|Right` to manage displaying different parts at different breakpoints.

```jsx
import Box from "../elements/Box";

<Header position="static" px={4}>
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

<Header bg="grey.6" color="white" height={80} position="static" px={4}>
  <Header.Left>
    <Heading size="xl">Title</Heading>
  </Header.Left>
  <Header.Right>
    <IconButton color="grey">
      <Icon name="menu" />
    </IconButton>
  </Header.Right>
</Header>;
```

**TIP:** Best showcase of Header and SideNav with proper content and playing together can be seen back on styleguide page.

Fixed (default) header:

```jsx
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
    <Header bg="grey.6" color="white" height={80} position="fixed" px={4}>
      <Header.Left>
        <IconButton color="grey" display={["block", "block", "none"]} lighten>
          <Icon name="menu" />
        </IconButton>
        <Heading display={["none", "none", "block"]} size="m">
          Comrade Styles
        </Heading>
      </Header.Left>
      <Header.Center>
        <Box display={["none", "none", "block"]}>
          <Link color="light" href="#" mx={2}>
            Link I
          </Link>
          <Link color="light" href="#" mx={2}>
            Link II
          </Link>
          <Link color="light" href="#" mx={2}>
            Link III
          </Link>
          <Link color="light" href="#" mx={2}>
            Link IV
          </Link>
          <Link color="light" href="#" mx={2}>
            Link V
          </Link>
        </Box>
      </Header.Center>
      <Header.Right>
        <Button color="secondary" display={["none", "block"]} inverted>
          Theme
        </Button>
      </Header.Right>
    </Header>
  )}
</div>;
```

```html
<!-- Vanilla -->
<header className="header">
  <div className="header-left">
    <a className="text-m default ml-4" href="#">
      Comrade Styles
    </a>
  </div>
  <div className="header-center">
    <a className="link-dark link-dark-active mx-2" href="#">
      Link I
    </a>
    <a className="link-dark mx-2" href="#">
      Link II
    </a>
    <a className="link-dark mx-2" href="#">
      Link III
    </a>
    <a className="link-dark mx-2" href="#">
      Link IV
    </a>
  </div>
  <div className="header-right">
    <button className="btn btn-inverted-secondary mr-4">Theme</button>
  </div>
</header>
```
