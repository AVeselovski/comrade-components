import React from "react";
import propTypes from "prop-types";
// components
import Header from "../components/patterns/Header";
import HeaderNav from "../components/patterns/HeaderNav";
import RouterLink from "../components/elements/RouterLink";
import Link from "../components/elements/Link";
import Text from "../components/elements/Text";
import Button from "../components/elements/Button";

const AppHeader = ({ isVanilla = false, setTheme, theme }) => {
  const isLight = theme === "light";

  return (
    <Header>
      <Header.Left pl={5}>
        <h1 className="heading-base">
          <Link href="/">
            <Text as="span" color="dangerText" mr={1}>
              Comrade
            </Text>
            <Text as="span" color="warningText">
              Styles
            </Text>
          </Link>
        </h1>
      </Header.Left>

      <Header.Center display={["none", "none", "block"]}>
        <HeaderNav color={isLight ? "dark" : "light"}>
          <RouterLink to="/typography">Typography</RouterLink>
          <RouterLink to="/elements">Elements</RouterLink>
          <RouterLink to="/patterns">Patterns</RouterLink>
          <RouterLink to="/colors">Colors</RouterLink>
          <RouterLink to="/article">Article</RouterLink>
          <Link href="/docs" target="_blank">
            Docs<i className="fas fa-external-link-alt ml-1 font-sm"></i>
          </Link>
        </HeaderNav>
      </Header.Center>

      <Header.Right display={["block", "none"]}>
        <Button
          disabled={isVanilla}
          inverted
          onClick={() => setTheme(isLight ? "dark" : "light")}
          size="sm"
          type="primary">
          Theme:{" "}
          <Text as="span" fontWeight={3}>
            {theme.charAt(0).toUpperCase() + theme.slice(1)}
          </Text>
        </Button>
      </Header.Right>
      <Header.Right display={["none", "block"]}>
        <Button
          disabled={isVanilla}
          inverted
          onClick={() => setTheme(isLight ? "dark" : "light")}
          type="primary">
          Theme:{" "}
          <Text as="span" fontWeight={3}>
            {theme.charAt(0).toUpperCase() + theme.slice(1)}
          </Text>
        </Button>
      </Header.Right>
    </Header>
  );
};

AppHeader.propTypes = {
  isVanilla: propTypes.bool,
  setTheme: propTypes.func.isRequired,
  theme: propTypes.string.isRequired
};

export default AppHeader;
