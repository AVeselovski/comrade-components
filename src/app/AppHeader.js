import React from "react";
import propTypes from "prop-types";
// components
import Header from "../components/patterns/Header";
import HeaderNav from "../components/patterns/HeaderNav";
import RouterLink from "../components/elements/RouterLink";
import Link from "../components/elements/Link";
import Text from "../components/elements/Text";

const AppHeader = ({ setTheme, theme }) => {
  const isLight = theme === "light";

  return (
    <Header>
      <Header.Left pl={5}>
        <h1 className="heading-base">
          <Link href="/">
            <Text as="span" color="textDanger" mr={1}>
              Comrade
            </Text>
            <Text as="span" color="textWarning">
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
        <button
          className={isLight ? "btn btn-sm btn-inverted-primary" : "btn btn-sm btn-inverted-primary-dark"}
          onClick={() => setTheme(isLight ? "dark" : "light")}>
          Theme:{" "}
          <Text as="span" fontWeight={3}>
            {theme.charAt(0).toUpperCase() + theme.slice(1)}
          </Text>
        </button>
      </Header.Right>
      <Header.Right display={["none", "block"]}>
        <button
          className={isLight ? "btn btn-inverted-primary" : "btn btn-inverted-primary-dark"}
          onClick={() => setTheme(isLight ? "dark" : "light")}>
          Theme:{" "}
          <Text as="span" fontWeight={3}>
            {theme.charAt(0).toUpperCase() + theme.slice(1)}
          </Text>
        </button>
      </Header.Right>
    </Header>
  );
};

AppHeader.propTypes = {
  setTheme: propTypes.func.isRequired,
  theme: propTypes.string.isRequired
};

export default AppHeader;
