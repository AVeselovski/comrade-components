Mobile `simple` navigation:

```jsx
import Box from "../elements/Box";
import Link from "../elements/Link";

<Box bg="bgDark" py={3}>
  <SidebarNav>
    <Link href="#">Weapons</Link>
    <Link className="is-active" href="#">
      Apparel
    </Link>
    <Link href="#">Potions</Link>
    <Link href="#">Scrolls</Link>
  </SidebarNav>
</Box>;
```

Desktop (or mobile) `side` navigation:

```jsx
import Box from "../elements/Box";
import Link from "../elements/Link";

<Box bg="bgLight" py={3} width="256px">
  <SidebarNav color="dark" type="side">
    <Link href="#">Weapons</Link>
    <Link isActive href="#">
      Apparel
    </Link>
    <Link href="#">Potions</Link>
    <Link href="#">Scrolls</Link>
    <Link color="danger" external href="#">
      Quit
    </Link>
  </SidebarNav>
</Box>;
```

```html
<!-- Vanilla -->
<ul class="sidebar-nav side">
  <li class="sidebar-nav-item">
    <a class="link-dark" href="#">Weapons</a>
  </li>
  <li class="sidebar-nav-item">
    <a class="link-dark" href="#">Apparel</a>
  </li>
  <li class="sidebar-nav-item">
    <a class="link-dark" href="#">Potions</a>
  </li>
  <li class="sidebar-nav-item">
    <a class="link-dark" href="#">Scrolls</a>
  </li>
  <li>
    <a class="link-dark" href="#">Quit</a>
  </li>
</ul>
```
