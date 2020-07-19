Various tags:

```jsx
<Tag bg="info" color="grey">
  CSS
</Tag>
{" "}
<Tag bg="warning" color="grey">
  JavaScript
</Tag>
{" "}
<Tag bg="danger" color="grey">
  Rails
</Tag>
<Tag bg="info" color="grey" lighten ml={3}>
  CSS
</Tag>
{" "}
<Tag bg="warning" color="grey" lighten>
  JavaScript
</Tag>
{" "}
<Tag bg="danger" color="grey" lighten>
  Rails
</Tag>
<br /><br />
<Tag plain>
  Plain Basic Tag
</Tag>
<Tag color="info" plain>
  CSS
</Tag>
<Tag color="warning" plain>
  JavaScript
</Tag>
<Tag color="danger" plain>
  Rails
</Tag>
<br /><br />
<Tag bg="primary" color="grey" plain size="small">
  Small
</Tag>
{" "}
<Tag bg="warning" color="grey" plain size="medium">
  Medium
</Tag>
{" "}
<Tag bg="danger" color="grey" plain size="large">
  Big
</Tag>
```

Tags wrapped in links:

```jsx
import Link from "./Link";

<>
  <Link href="#" wrap>
    <Tag color="link">Basic Tag Link</Tag>
  </Link>

  <Link href="#" wrap>
    <Tag bg="primary" color="grey">
      Bg Tag Link
    </Tag>
  </Link>
</>;
```

Tags as buttons:

```jsx
<Tag as="button" bg="primary" color="grey" onClick={() => alert("Tag is button!")} size="large">
  Button Tag
</Tag>
```
