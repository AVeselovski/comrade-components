Icons as buttons:

```jsx
import Icon from "./Icon";

<>
  <IconButton mx={1}>
    <Icon name="menu" />
  </IconButton>
  <IconButton color="danger" mx={1}>
    <Icon name="close" />
  </IconButton>
</>;
```

Icons as highlighted buttons:

```jsx
import Icon from "./Icon";
import Box from "./Box";

<Box border="2px dashed" borderColor="grey.3" py={2}>
  <IconButton color="secondary" mx={2} p={2} type="highlight">
    <Icon name="close-small" />
  </IconButton>
  <IconButton color="secondary" mx={2} p={2} type="highlight-dark">
    <Icon name="close-small" />
  </IconButton>
</Box>;
```

Icons as normal buttons:

```jsx
import Icon from "./Icon";

<>
  <IconButton color="primary" lighten mx={2} p={2} type="button">
    <Icon name="edit" />
  </IconButton>
  <IconButton color="primary" mx={2} p={3} type="inverted-button">
    <Icon name="plus" />
  </IconButton>
</>;
```
