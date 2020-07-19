All icons as inline svg:

```jsx
import Box from "./Box";

<>
  <Icon name="chevron-down" />
  <Icon name="chevron-left" />
  <Icon name="chevron-right" />
  <Icon name="chevron-up" />
  <Box p={2} />
  <Icon name="chevron-down-small" />
  <Icon name="chevron-left-small" />
  <Icon name="chevron-right-small" />
  <Icon name="chevron-up-small" />
  <Box p={2} />
  <Icon name="close" />
  <Icon name="close-small" />
  <Box display="inline-block" p={2} />
  <Icon name="plus" />
  <Icon name="plus-small" />
  <Box p={2} />
  <Icon name="menu" />
  <Icon name="menu-small" />
  <Box display="inline-block" p={2} />
  <Icon name="options" />
  <Box p={2} />
  <Icon color="danger" name="delete" />
  <Icon color="info" name="edit" />
</>;
```

Custom size:

```jsx
<Icon name="close-small" size="40" />
```
