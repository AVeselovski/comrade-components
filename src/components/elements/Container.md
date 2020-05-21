Container with different breakpoints, containing a Box:

```jsx
import Box from "./Box";

// Notice minWidth to block last breakpoint from shrinking further
<Container maxWidth={960} minWidth={300} width={["100%", 1 / 2, 1 / 10]}>
  <Box bg="bg" border="dashed 2px" borderColor="grey.3" p={3} textAlign="center">
    Box in a Container
  </Box>
</Container>;
```

```html
<!-- Vanilla -->
<div class="container">
  <div class="p-3">
    Box in a Container
  </div>
</div>

<div class="container-full">
  <div class="p-3">
    Box in a Container
  </div>
</div>
```
