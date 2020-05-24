import React from "react";

import RouterLink from "../components/elements/RouterLink";
import Link from "../components/elements/Link";
import Text from "../components/elements/Text";
import Button from "../components/elements/Button";
import HeaderComponent from "../components/patterns/Header";

const Header = ({ theme, setTheme }) => {
  const isLight = theme === "light";

  return (
    <HeaderComponent display={["none", "inline-grid"]}>
      <HeaderComponent.Left>
        <RouterLink ml={4} to="/" wrap>
          <Text as="span" color="red.2" size="m">
            Comrade
          </Text>
          <Text as="span" color="yellow.4" ml={1} size="m">
            Styles
          </Text>
        </RouterLink>
      </HeaderComponent.Left>
      <HeaderComponent.Center display={["none", "none", "block"]}>
        <RouterLink
          activeClassName="active"
          color={isLight ? "dark" : "light"}
          lighten={!isLight}
          mx={2}
          to="/typography">
          Typography
        </RouterLink>
        <RouterLink
          activeClassName="active"
          color={isLight ? "dark" : "light"}
          lighten={!isLight}
          mx={2}
          to="/colors">
          Colors
        </RouterLink>
        <RouterLink
          activeClassName="active"
          color={isLight ? "dark" : "light"}
          lighten={!isLight}
          mx={2}
          to="/elements">
          Elements
        </RouterLink>
        <RouterLink
          activeClassName="active"
          color={isLight ? "dark" : "light"}
          lighten={!isLight}
          mx={2}
          to="/patterns">
          Patterns
        </RouterLink>
        <RouterLink
          activeClassName="active"
          color={isLight ? "dark" : "light"}
          lighten={!isLight}
          mx={2}
          to="/css">
          Vanilla CSS
        </RouterLink>
        <Link
          color={isLight ? "dark" : "light"}
          href="https://comradeguide.now.sh/docs"
          lighten={!isLight}
          mx={2}
          target="_blank">
          Docs
        </Link>
      </HeaderComponent.Center>
      <HeaderComponent.Right>
        <Button color="secondary" inverted mr={4} onClick={() => setTheme(isLight ? "dark" : "light")}>
          {theme}
        </Button>
      </HeaderComponent.Right>
    </HeaderComponent>
  );
};

export default Header;
