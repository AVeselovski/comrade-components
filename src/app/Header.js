import React from "react";

import Link from "../components/elements/RouterLink";
import Text from "../components/elements/Text";
import Button from "../components/elements/Button";
import HeaderComponent from "../components/patterns/Header";

const Header = ({ theme, setTheme }) => {
  const isLight = theme === "light";

  return (
    <HeaderComponent display={["none", "inline-grid"]}>
      <HeaderComponent.Left>
        <Link ml={4} to="/" wrap>
          <Text as="span" color="red.2" size="m">
            Comrade
          </Text>
          <Text as="span" color="yellow.4" ml={1} size="m">
            Styles
          </Text>
        </Link>
      </HeaderComponent.Left>
      <HeaderComponent.Center display={["none", "none", "block"]}>
        <Link
          activeClassName="active"
          color={isLight ? "dark" : "light"}
          lighten={!isLight}
          mx={2}
          to="/typography">
          Typography
        </Link>
        <Link
          activeClassName="active"
          color={isLight ? "dark" : "light"}
          lighten={!isLight}
          mx={2}
          to="/colors">
          Colors
        </Link>
        <Link
          activeClassName="active"
          color={isLight ? "dark" : "light"}
          lighten={!isLight}
          mx={2}
          to="/elements">
          Elements
        </Link>
        <Link
          activeClassName="active"
          color={isLight ? "dark" : "light"}
          lighten={!isLight}
          mx={2}
          to="/patterns">
          Patterns
        </Link>
        <Link activeClassName="active" color={isLight ? "dark" : "light"} lighten={!isLight} mx={2} to="/css">
          Vanilla CSS
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
