Container with different breakpoints, containing a Box:

**TIP:** *resize the window to see breakpoints in action*

```jsx
import Box from "./Box";

// minWidth to block last breakpoint from shrinking further
<Container minWidth={300} width={["100%", 1 / 2, 1 / 6]}>
  <Box bg="bg" border="dashed 2px" borderColor="grey.2" p={3} textAlign="center">
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
