Box with border for visualization purposes:

```jsx
<Box bg="bg" border="dashed 2px" borderColor="grey.3" p={3} textAlign="center">
  Box
</Box>
```

Box as a flex-box example:

```jsx
<Box bg="bg" border="dashed 2px" borderColor="grey.3" flex justifyContent="space-between" p={2}>
  <Box border="dashed 2px" borderColor="grey.3" p={2}>
    Box
  </Box>
  <Box border="dashed 2px" borderColor="grey.3" p={2}>
    Box
  </Box>
  <Box border="dashed 2px" borderColor="grey.3" p={2}>
    Box
  </Box>
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
