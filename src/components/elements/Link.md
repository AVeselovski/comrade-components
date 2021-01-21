Various links:

```jsx
<Link href="#">Default link</Link>
<br />
<Link isActive href="#">Default (active)</Link>
<br />
<Link color="success" href="#">Success link</Link>
<br />
<Link color="danger" href="#">Danger link</Link>
<br />
<Link color="warning" href="#">Warning link</Link>
```

`dark` & `light` links are primarily meant for navigation bars, sidebars, etc. `light` for dark, - `dark` for light theme / background:

```jsx
import Box from "./Box";

<>
  <Box bg="surface" p={3}>
    <Link color="dark" href="#">
      Dark link
    </Link>
  </Box>
  <Box bg="text" p={3}>
    <Link color="light" href="#">
      Light link
    </Link>
  </Box>
</>;
```

Custom color:

```jsx
<Link color="#E85D75" href="#">
  Custom link
</Link>
```

```html
<!-- Vanilla -->
<a href="#">Default link</a>
<a className="active" href="#">Default (active)</a>
<a className="link-success" href="#">Success link</a>
<a className="link-danger" href="#">Danger link</a>
<a className="link-warning" href="#">Warning link</a>

<a className="link-dark" href="#">Dark link</a>
<a className="link-light" href="#">Light link</a>
```
