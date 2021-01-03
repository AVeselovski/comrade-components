Header navigation (default):

```jsx
import Box from "../elements/Box";
import Link from "../elements/Link";

<Box border="dashed 2px" borderColor="grey.2" py={3} textAlign="center">
  <HeaderNav>
    <Link href="#">Weapons</Link>
    <Link isActive href="#">
      Apparel
    </Link>
    <Link href="#">Potions</Link>
    <Link href="#">Scrolls</Link>
    <Link color="danger" href="#">
      Quit
    </Link>
  </HeaderNav>
</Box>;
```

Header navigation (dark background):

```jsx
import Box from "../elements/Box";
import Link from "../elements/Link";

<Box bg="bgDark" py={3} textAlign="center">
  <HeaderNav color="light">
    <Link href="#">Weapons</Link>
    <Link isActive href="#">
      Apparel
    </Link>
    <Link href="#">Potions</Link>
    <Link href="#">Scrolls</Link>
    <Link color="red" href="#" lighten>
      Quit
    </Link>
  </HeaderNav>
</Box>;
```

```html
<!-- Vanilla -->
<ul className="header-nav">
  <li>
    <a class="is-active" href="#">Weapons</a>
  </li>
  <li>
    <a href="#">Apparel</a>
  </li>
  <li>
    <a href="#">Potions</a>
  </li>
  <li>
    <a href="#">Scrolls</a>
  </li>
  <li>
    <a href="#" target="_blank">Quit<i className="fas fa-external-link-alt ml-1 font-sm"></i></a>
  </li>
</ul>
```
