Various uses of `Text` with different props:

```jsx
<Text>Basic text as &lt;p&gt; element</Text>

<Text as="span" color="textSecondary" size="md">Big chunky text as &lt;span&gt; element</Text>
<br />
<Text as="span" color="textDanger" size="sm">
  Small "danger" text as &lt;span&gt; element
</Text>

<ul>
  <Text as="li" color="textInfo">This is a colored list item</Text>
  <Text as="li" color="textSuccess">This is a colored list item</Text>
  <Text as="li" color="textMuted">This is a muted list item</Text>
</ul>

<Text as="p" fontWeight={1} fontSize={2}>
  "Lead" text (achieved with styled-system props)
</Text>

{/* override "md" size font weight */}
<Text as="p" fontWeight={2} size="md">
  Big slim text (overriden with a styled-system prop)
</Text>

{/* override "sm" size font weight */}
<Text as="span" color="#E85D75" fontWeight={4} size="sm">
  Small fat custom colored text
</Text>
```

```html
<!-- Vanilla -->
<p>Basic text</p>
<span class="text-md text-secondary">Big chunky text</span>
<span class="text-sm text-danger">Small "danger" text</span>

<ul>
  <li class="text-primary">This is a colored list item</li>
  <li class="text-success">This is a colored list item</li>
  <li class="text-muted">This is a muted list item</li>
</ul>

<p class="text-lead">Lead text</p>
```
