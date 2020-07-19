Various links:

```jsx
<Link href="#">Default link</Link>
<br />
<Link color="success" href="#">Success</Link>
<br />
<Link active className="active" color="success" href="#">Success (active)</Link>
<br />
<Link color="danger" href="#">Danger</Link>
<br />
<Link color="warning" href="#">Warning</Link>
<br />
<Link color="info" href="#">Primary link (why not...)</Link>
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
<a href="#">Default link</a>
<a className="link-success" href="#">Success link</a>
<a className="link-success active" href="#">Success (active)</a>
<a className="link-danger" href="#">Danger</a>
<a className="link-warning" href="#">Warning</a>
<a className="link-info" href="#">
  Primary link (why not...)
</a>

<a className="link-dark" href="#">Dark link</a>
<a className="link-light" href="#">Light link</a>
```
