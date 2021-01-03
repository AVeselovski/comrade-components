import React from "react";
import propTypes from "prop-types";
// components
import Sidebar from "../components/patterns/Sidebar";
import SidebarNav from "../components/patterns/SidebarNav";
import Icon from "../components/elements/Icon";
import Link from "../components/elements/Link";
import Text from "../components/elements/Text";
import RouterLink from "../components/elements/RouterLink";
import Box from "../components/elements/Box";

const pkg = require("../../package.json");

const AppSidebar = ({ isMobile, isOpen, isVanilla, setIsOpen, setIsVanilla, setTheme, theme }) => {
  const isLight = theme === "light";

  return (
    <Sidebar bg={isLight ? "bgDark" : "bgLight"} isFullWidth={isMobile} isOpen={isOpen}>
      <Sidebar.Anchor>
        <Link
          color={isLight ? "dark" : "light"}
          disabled={isOpen}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(true);
          }}>
          <Icon name="menu" />
        </Link>
      </Sidebar.Anchor>

      <Sidebar.Header>
        <Text as="span" color="textMuted" fontWeight={4} size="sm">
          {pkg.version}
        </Text>
        <Link
          color={isLight ? "light" : "dark"}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(false);
          }}>
          <Icon name="close" />
        </Link>
      </Sidebar.Header>

      <Sidebar.Body>
        <SidebarNav color={isLight ? "light" : "dark"} type={isMobile ? "center" : "side"}>
          <RouterLink exact onClick={() => isMobile && setIsOpen(false)} to="/">
            Home
          </RouterLink>
          <RouterLink onClick={() => isMobile && setIsOpen(false)} to="/typography">
            Typography
          </RouterLink>
          <RouterLink onClick={() => isMobile && setIsOpen(false)} to="/elements">
            Elements
          </RouterLink>
          <RouterLink onClick={() => isMobile && setIsOpen(false)} to="/patterns">
            Patterns
          </RouterLink>
          <RouterLink onClick={() => isMobile && setIsOpen(false)} to="/article">
            Article
          </RouterLink>
          <RouterLink onClick={() => isMobile && setIsOpen(false)} to="/colors">
            Colors
          </RouterLink>
          <Link external href="/docs">
            <i className="fas fa-external-link-alt mr-2"></i>Docs
          </Link>
        </SidebarNav>
      </Sidebar.Body>

      <Sidebar.Footer>
        <Box
          maxWidth={isMobile ? "160px" : "100%"}
          mb={3}
          mx={isMobile ? "auto" : ""}>
          <button
            className={`btn-full mb-2 ${!isLight ? "btn-inverted-primary" : "btn-inverted-primary-dark"}`}
            onClick={() => setTheme(isLight ? "dark" : "light")}>
            Theme:{" "}
            <Text as="span" fontWeight={3}>
              {theme.charAt(0).toUpperCase() + theme.slice(1)}
            </Text>
          </button>
          <button
            className={`btn-full mb-2 ${!isLight ? "btn-inverted-primary" : "btn-inverted-primary-dark"}`}
            onClick={() => setIsVanilla(isVanilla ? false : true)}>
            Tech:{" "}
            <Text as="span" fontWeight={3}>
              {isVanilla ? "Vanilla" : "React-components"}
            </Text>
          </button>
        </Box>
      </Sidebar.Footer>
    </Sidebar>
  );
};

AppSidebar.propTypes = {
  isMobile: propTypes.bool.isRequired,
  isOpen: propTypes.bool.isRequired,
  isVanilla: propTypes.bool.isRequired,
  setIsOpen: propTypes.func.isRequired,
  setIsVanilla: propTypes.func.isRequired,
  setTheme: propTypes.func.isRequired,
  theme: propTypes.string.isRequired
};

export default AppSidebar;
