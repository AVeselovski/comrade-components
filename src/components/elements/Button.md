A bunch of Buttons:

```jsx
import Box from "./Box";

<>
  <Box>
    <Button color="primary" m={1} mt={0} size="large">
      Primary Large
    </Button>
    <Button color="primary" inverted m={1} mt={0} size="medium">
      Primary Inverted Medium
    </Button>
    <Button color="secondary" m={1} mt={0} size="small">
      Secondary Small
    </Button>
  </Box>
  <Box mt={3}>
    <Button m={1} mt={0}>
      Ghost Light (default)
    </Button>
    <Button dark m={1} mt={0} size="small">
      Ghost Dark
    </Button>
  </Box>
  <Box mt={3}>
    <Button color="info" m={1} mt={0}>
      Info
    </Button>
    <Button color="info" inverted m={1} mt={0}>
      Info
    </Button>
    <Button color="success" m={1} mt={0}>
      Success
    </Button>
    <Button color="success" inverted m={1} mt={0}>
      Success
    </Button>
    <br />
    <Button color="warning" m={1} mt={0}>
      Warning
    </Button>
    <Button color="warning" inverted m={1} mt={0}>
      Warning
    </Button>
    <Button color="danger" m={1} mt={0}>
      Danger
    </Button>
    <Button color="danger" inverted m={1} mt={0}>
      Danger
    </Button>
  </Box>
  <Box mt={3}>
    <Button color="primary" disabled m={1} mt={0}>
      Disabled
    </Button>
    <Button disabled inverted m={1} mt={0}>
      Disabled
    </Button>
  </Box>
</>;
```

Container's width:

```jsx
<Button color="success" fullWidth size="large">
  Wide Success!
</Button>
```

Custom props & `lighten` option:

```jsx
<Button color="#E85D75" lighten mx={2}>
  Custom Color
</Button>
<Button borderWidth="3px" color="#E85D75" fontSize={4} fontWeight={3} inverted lighten mx={2} px={5} py={3}>
  Custom Size
</Button>
```

```html
<!-- Vanilla -->
<div>
  <button class="btn btn-primary btn-l m-1 mt-0">
    Primary Large
  </button>
  <button class="btn btn-inverted-primary btn-m m-1 mt-0">
    Primary Inverted Medium
  </button>
  <button class="btn btn-secondary btn-s m-1 mt-0">
    Secondary Small
  </button>
</div>
<div class="mt-3">
  <button class="btn btn-default m-1 mt-0">
    Ghost Light (default)
  </button>
  <button class="btn btn-default-dark btn-s m-1 mt-0">
    Ghost Dark
  </button>
</div>
<div class="mt-3">
  <button class="btn btn-info m-1 mt-0">
    Info
  </button>
  <button class="btn btn-inverted-info m-1 mt-0">
    Info
  </button>
  <button class="btn btn-success m-1 mt-0">
    Success
  </button>
  <button class="btn btn-inverted-success m-1 mt-0">
    Success
  </button>
  <br />
  <button class="btn btn-warning m-1 mt-0">
    Warning
  </button>
  <button class="btn btn-inverted-warning m-1 mt-0">
    Warning
  </button>
  <button class="btn btn-danger m-1 mt-0">
    Danger
  </button>
  <button class="btn btn-inverted-danger m-1 mt-0">
    Danger
  </button>
</div>
<div class="mt-3">
  <button class="btn btn-primary m-1 mt-0" disabled>
    Disabled
  </button>
  <button class="btn btn-default m-1 mt-0" disabled>
    Disabled
  </button>
</div>
```

```html
<!-- Vanilla -->
<button class="btn btn-success btn-l btn-full">Wide Success!</button>
```
