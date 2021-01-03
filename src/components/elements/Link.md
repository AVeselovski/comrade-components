Various links:

```jsx
<Link href="#">Default link</Link>
<br />
<Link className="is-active" href="#">Default (active)</Link>
<br />
<Link color="success" href="#">Success link</Link>
<br />
<Link color="danger" href="#">Danger link</Link>
<br />
<Link color="warning" href="#">Warning link</Link>
```

Dark & light links are primarily meant for navigation bars, sidebars. Light for dark theme, Dark for light theme:

```jsx
import Box from "./Box";

<>
  <Box bg="bg" p={3}>
    <Link color="dark" href="#">
      Dark link
    </Link>
  </Box>
  <Box bg="black" p={3}>
    <Link color="light" href="#">
      Light link
    </Link>
  </Box>
</>;
```

Custom props & `lighten` option:

```jsx
<Link href="#" lighten>Default link (lighten)</Link>
<br />
<Link color="#E85D75" href="#" lighten>Custom link</Link>
```

```html
<!-- Vanilla -->
<a href="#">Default link</a>
<a className="is-active" href="#">Default (active)</a>
<a className="link-success" href="#">Success link</a>
<a className="link-danger" href="#">Danger link</a>
<a className="link-warning" href="#">Warning link</a>

<a className="link-dark" href="#">Dark link</a>
<a className="link-light" href="#">Light link</a>
```
