Page containing a Container with a Box:

```jsx
import Container from "./Container";
import Box from "./Box";

<Page bg="color">
  <Container maxWidth={960} minWidth={200} width={[1, 2 / 3]}>
    <Box color="bg" border="dashed 2px" borderColor="grey.2" p={3} textAlign="center">
      Box in a Container
    </Box>
  </Container>
</Page>;
```

```html
<!-- Vanilla -->
<div class="page">
  <div class="container">
    <div class="p-3">
      Box in a Container
    </div>
  </div>
</div>
```
