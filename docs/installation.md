This component library and CSS-library are somewhat influenced by Bootstarp 4, somewhat by Material UI.
React component library ([comrade-components-react](https://www.npmjs.com/package/comrade-components-react))
relies a lot on `styled-system` (along with `@styled-system/theme-get`) package to achieve the flexibility
that is intended here, so installing and using those in a project is advised for everything to work as
intended and expected. `styled-system` allows to pass easy styling props, custom or from predefined theme.
Components are built with that in mind, with the goal of allowing "on the fly" lego-like assembling of UI
bits & pieces and only referring to custom styling where it matters/necessary.

_"Vanilla"_ components require `comrade-styles` only. Package can be found here: https://www.npmjs.com/package/comrade-styles

Every component has a vanilla counterpart, demonstrating a more traditional _framework-less_ way to replicate said component.

To use React components:

```bash
yarn add comrade-components-react styled-system @styled-system/theme-get
```

To just use the CSS-library:

```bash
yarn add comrade-styles
```

**comrade-styles** is standalone. **comrade-components-react** and **comrade-styles** can compliment each other in a React project.
