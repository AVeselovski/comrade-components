Various uses of `Text` with different props:

```jsx
<Text as="p">Basic text as &lt;p&gt; element</Text>

<Text as="span" color="secondary" size="m">Big FAT text</Text>

<br />

<Text as="span" color="textDanger" size="s">
  Small text as &lt;span&gt; element, because why not...
</Text>

<ul>
  <Text as="li" color="textInfo">This is a colored list item</Text>
  <Text as="li" color="textSuccess">This is a colored list item</Text>
  <Text as="li" color="muted">This is a muted list item</Text>
</ul>

<Text as="span" fontWeight="300" size="m">
  Big THIN text (overriden with a styled-system prop)
</Text>

<br />

<Text as="span" color="#E85D75" fontWeight={4} size="s">Small FAT custom colored text</Text>
```

```html
<!-- Vanilla -->
<p>Basic text</p>
<span class="text-m secondary">Big FAT text</span>
<span class="text-s text-danger">Small text</span>

<ul>
  <li class="text-primary">This is a colored list item</li>
  <li class="text-success">This is a colored list item</li>
  <li class="muted">This is a muted list item</li>
</ul>
```
