This component library and CSS-library are loosely (and heavily in some places) influenced by Bootstarp 4, when it comes to styling and class naming conventions. Using React components relies on `styled-system` (along with `@styled-system/theme-get`) package, so installing and using those in a project is advised for everything to work as intended and expected. `styled-system` allows to pass easy styling props, custom or from a theme. Components are built with that in mind, with the goal of allowing "on the fly" lego-like assembling of UI bits & pieces and only referring to custom styling where it matters.

_"Vanilla"_ components require `comrade-styles` only. Package can be found here: https://www.npmjs.com/package/comrade-styles

Every component has a vanilla counterpart, demonstrating a more traditional _framework-less_ way to replicate said component.

To use React components:

```bash
yarn add comrade-components styled-system @styled-system/theme-get
```

To just use the CSS-library:

```bash
yarn add comrade-styles
```

**comrade-components** are standalone and does not require **comrade-styles**, but they can compliment each other.
