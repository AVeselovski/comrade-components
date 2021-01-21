import React from "react";
import propTypes from "prop-types";
// components
import Sidebar from "../components/patterns/Sidebar";
import SidebarNav from "../components/patterns/SidebarNav";
import Icon from "../components/elements/Icon";
import Link from "../components/elements/Link";
import Text from "../components/elements/Text";
import RouterLink from "../components/elements/RouterLink";
import Button from "../components/elements/Button";
import Box from "../components/elements/Box";
import IconButton from "../components/elements/IconButton";

const pkg = require("../../package.json");

const AppSidebar = ({ isMobile, isOpen, isVanilla, setIsOpen, setIsVanilla, setTheme, theme }) => {
  const isLight = theme === "light";

  const onSetVanilla = () => {
    if (!isVanilla && !isLight) setTheme("light");

    setIsVanilla(isVanilla ? false : true);
  };

  return (
    <Sidebar bg="surface" fullWidth={isMobile} isOpen={isOpen}>
      <Sidebar.Anchor>
        <IconButton
          btnSize="lg"
          btnStyle={isLight ? "dark" : "light"}
          disabled={isOpen}
          onClick={() => setIsOpen(true)}>
          <Icon name="menu" />
        </IconButton>
      </Sidebar.Anchor>

      <Sidebar.Header>
        <Text as="span" color="muted" fontWeight={4} size="sm">
          {pkg.version}
        </Text>
        <IconButton btnSize="lg" btnStyle={!isLight ? "dark" : "light"} onClick={(e) => setIsOpen(false)}>
          <Icon name="close" />
        </IconButton>
      </Sidebar.Header>

      <Sidebar.Body>
        <SidebarNav color={!isLight ? "dark" : "light"} type={isMobile ? "center" : "side"}>
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
          <RouterLink onClick={() => isMobile && setIsOpen(false)} to="/colors">
            Colors
          </RouterLink>
          <RouterLink onClick={() => isMobile && setIsOpen(false)} to="/article">
            Article
          </RouterLink>
          <Link external href="/docs" target="_blank">
            <i className="fas fa-external-link-alt mr-2"></i>Docs
          </Link>
        </SidebarNav>
      </Sidebar.Body>

      <Sidebar.Footer>
        <Box maxWidth={isMobile ? "210px" : "100%"} mb={3} mx={isMobile ? "auto" : ""}>
          <Button
            disabled={isVanilla}
            fullWidth
            inverted
            mb={2}
            onClick={() => setTheme(isLight ? "dark" : "light")}
            type="primary">
            Theme:{" "}
            <Text as="span" fontWeight={3}>
              {theme.charAt(0).toUpperCase() + theme.slice(1)}
            </Text>
          </Button>
          <Button fullWidth inverted onClick={() => onSetVanilla()} type="primary">
            Tech:{" "}
            <Text as="span" fontWeight={3}>
              {isVanilla ? "Vanilla" : "React-components"}
            </Text>
          </Button>
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
