import React from "react";
import propTypes from "prop-types";
// components
import RouterLink from "../components/elements/RouterLink";
import Link from "../components/elements/Link";
import Text from "../components/elements/Text";
import Button from "../components/elements/Button";
import Header from "../components/patterns/Header";

const AppHeader = ({ setTheme, theme }) => {
  const isLight = theme === "light";

  return (
    <Header display={["none", "inline-grid"]}>
      <Header.Left>
        <RouterLink ml={5} to="/" wrap>
          <Text as="span" color="red.2" size="m">
            Comrade
          </Text>
          <Text as="span" color="yellow.4" ml={1} size="m">
            Styles
          </Text>
        </RouterLink>
      </Header.Left>
      <Header.Center display={["none", "none", "block"]}>
        <RouterLink activeClassName="active" color={isLight ? "dark" : "light"} mx={2} to="/typography">
          Typography
        </RouterLink>
        <RouterLink activeClassName="active" color={isLight ? "dark" : "light"} mx={2} to="/colors">
          Colors
        </RouterLink>
        <RouterLink activeClassName="active" color={isLight ? "dark" : "light"} mx={2} to="/elements">
          Elements
        </RouterLink>
        <RouterLink activeClassName="active" color={isLight ? "dark" : "light"} mx={2} to="/patterns">
          Patterns
        </RouterLink>
        <RouterLink activeClassName="active" color={isLight ? "dark" : "light"} mx={2} to="/css">
          Vanilla CSS
        </RouterLink>
        <Link color={isLight ? "dark" : "light"} href="/docs" mx={2} target="_blank">
          Docs
        </Link>
      </Header.Center>
      <Header.Right>
        <Button color="secondary" inverted mr={4} onClick={() => setTheme(isLight ? "dark" : "light")}>
          {theme.charAt(0).toUpperCase() + theme.slice(1)}
        </Button>
      </Header.Right>
    </Header>
  );
};

AppHeader.propTypes = {
  setTheme: propTypes.func.isRequired,
  theme: propTypes.string.isRequired
};

export default AppHeader;
