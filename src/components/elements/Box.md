Box with border for visualization purposes:

```jsx
<Box bg="bg" border="dashed 2px" borderColor="grey.2" p={3} textAlign="center">
  Box
</Box>
```

Box in a complicated flex-box example:

```jsx
<Box
  as="section"
  bg="bg"
  border="dashed 2px"
  borderColor="grey.2"
  display="flex"
  justifyContent="space-between"
  p={2}>
  <Box border="dashed 2px" borderColor="grey.2" flexBasis="0" flexGrow="1" p={2}>
    Box. Tote bag vape kinfolk food truck.
  </Box>
  <Box border="dashed 2px" borderColor="grey.2" flexBasis="0" flexGrow="1" mx={2} p={2}>
    Box. Tote bag activated charcoal actually direct trade four loko.
  </Box>
  <Box border="dashed 2px" borderColor="grey.2" flexBasis="0" flexGrow="1" p={2}>
    Box. Shabby chic green juice meditation narwhal pickled coloring book man bun echo park godard blue
    bottle.
  </Box>
</Box>
```

Box as `Card`:

```jsx
<Box bg="bg" card>
  Box as <code>Card</code>
</Box>
```

```html
<!-- Vanilla -->
<div class="flex justify-between p-2">
  <div class="p-2">Box</div>
  <div class="p-2">Box</div>
  <div class="p-2">Box</div>
</div>
```
