Following examples have `position="static"` prop for displaying the component properly. Default `position` value is `fixed`.

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

<Header bg="grey.2" position="static" px={4}>
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

```jsx static
// import IconButton from "../elements/IconButton";
// import Icon from "../elements/Icon";

// <Header bg="grey.6" color="white" height={80} position="static" px={4}>
//   <Header.Right>
//     <IconButton color="grey">
//       <Icon name="menu" />
//     </IconButton>
//   </Header.Right>
// </Header>;
```

```html
<header className="header">
  <div className="header-left">
    <a className="text-m default ml-4" href="#">
      Comrade Styles
    </a>
  </div>
  <div className="header-center">
    <a className="link-dark link-dark-active mx-2" href="#">
      Link 1
    </a>
    <a className="link-dark mx-2" href="#">
      Link 2
    </a>
    <a className="link-dark mx-2" href="#">
      Link 3
    </a>
    <a className="link-dark mx-2" href="#">
      Link 4
    </a>
  </div>
  <div className="header-right">
    <button className="btn btn-inverted-secondary mr-4">Theme</button>
  </div>
</header>
```
