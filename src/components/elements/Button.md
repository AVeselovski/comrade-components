A bunch of Buttons:

```jsx
import Box from "./Box";

<>
  <Box>
    <Button mb={1} mr={1} size="lg" type="primary">
      Primary LG
    </Button>
    <Button inverted mb={1} mr={1} size="md" type="primary">
      Primary inverted MD
    </Button>
    <Button mb={1} size="sm" type="secondary">
      Secondary SM
    </Button>
  </Box>
  <Box mt={3}>
    <Button mb={1} mr={1} type="info">
      Info
    </Button>
    <Button inverted mb={1} mr={1} type="info">
      Info
    </Button>
    <Button mb={1} mr={1} type="success">
      Success
    </Button>
    <Button inverted mb={1} type="success">
      Success
    </Button>
    <br />
    <Button mb={1} mr={1} type="warning">
      Warning
    </Button>
    <Button inverted mb={1} mr={1} type="warning">
      Warning
    </Button>
    <Button mb={1} mr={1} type="danger">
      Danger
    </Button>
    <Button inverted mb={1} type="danger">
      Danger
    </Button>
  </Box>
  <Box mt={3}>
    <Button disabled mb={1} mr={1} type="primary">
      Disabled
    </Button>
    <Button disabled inverted mb={1} mt={0}>
      Disabled
    </Button>
  </Box>
</>;
```

Dark & Light:

```jsx
import Box from "./Box";

<>
  <Box bg="bg" p={3}>
    <Button>Light (default)</Button>
  </Box>
  <Box bg="color" p={3}>
    <Button type="dark">Dark</Button>
  </Box>
</>;
```

Container's width:

```jsx
<Button fullWidth size="lg" type="success">
  Wide Success!
</Button>
```

Custom props & `lighten` option:

```jsx
<Button color="#E85D75" mr={2}>
  Custom button
</Button>
<Button
  borderColor="#E85D75"
  borderRadius="6px"
  bg="#E85D75"
  color="#fff"
  fontSize={4}
  fontWeight={3}
  p={3}>
  Custom button
</Button>
```

```html
<!-- Vanilla -->
<div>
  <button class="btn-primary btn-lg mb-1 mr-1">Primary LG</button>
  <button class="btn-inverted-primary btn-md mb-1 mr-1">Primary inverted MD</button>
  <button class="btn-secondary btn-sm mb-1">Secondary SM</button>
</div>
<div class="mt-3">
  <button class="btn-info mb-1 mr-1">Info</button>
  <button class="btn-inverted-info mb-1 mr-1">Info</button>
  <button class="btn-success mb-1 mr-1">Success</button>
  <button class="btn-inverted-success mb-1">Success</button>
  <br />
  <button class="btn-warning mb-1 mr-1">Warning</button>
  <button class="btn-inverted-warning mb-1 mr-1">Warning</button>
  <button class="btn-danger mb-1 mr-1">Danger</button>
  <button class="btn-inverted-danger mb-1">Danger</button>
</div>
<div class="mt-3">
  <button class="btn-primary mb-1 mr-1" disabled>Disabled</button>
  <button class="btn-default mb-1" disabled>Disabled</button>
</div>

<div class="mt-3">
  <button class="mb-1 mr-1">Light (default)</button>
  <button class="btn-default-dark btn-sm mb-1">Dark</button>
</div>

<button class="btn-success btn-lg btn-full">Wide Success!</button>
```
