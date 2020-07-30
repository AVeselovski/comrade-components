import React from "react";
import propTypes from "prop-types";
// components
import Box from "../components/elements/Box";
import Icon from "../components/elements/Icon";
import IconButton from "../components/elements/IconButton";
import Link from "../components/elements/Link";
import SideNav from "../components/patterns/SideNav";
import SideNavLink from "../components/patterns/SideNavLink";
import Text from "../components/elements/Text";

const pkg = require("../../package.json");

const AppSideNav = ({ isMobile, setTheme, theme }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const isLight = theme === "light";

  return (
    <SideNav bg={"color"} fullWidth={isMobile} isOpen={isOpen}>
      <SideNav.Anchor>
        <IconButton disabled={isOpen} lighten={!isLight} onClick={() => setIsOpen(true)}>
          <Icon name="menu" />
        </IconButton>
      </SideNav.Anchor>
      <SideNav.Header>
        <Text as="span" color="muted" fontWeight={4} size="s">
          {pkg.version}
        </Text>
        <IconButton color={isLight ? "light" : "dark"} lighten={isLight} onClick={() => setIsOpen(false)}>
          <Icon name="close" />
        </IconButton>
      </SideNav.Header>
      <SideNav.Body pl={!isMobile && 0}>
        <Box alignItems="center" display={isMobile ? "flex" : "block"} flexDirection="column">
          <SideNavLink
            color={isLight ? "light" : "dark"}
            to="/typography"
            type={`navigation-${isMobile ? "mobile" : "desktop"}`}>
            Typography
          </SideNavLink>
          <SideNavLink
            color={isLight ? "light" : "dark"}
            to="/colors"
            type={`navigation-${isMobile ? "mobile" : "desktop"}`}>
            Colors
          </SideNavLink>
          <SideNavLink
            color={isLight ? "light" : "dark"}
            to="/elements"
            type={`navigation-${isMobile ? "mobile" : "desktop"}`}>
            Elements
          </SideNavLink>
          <SideNavLink
            color={isLight ? "light" : "dark"}
            to="/patterns"
            type={`navigation-${isMobile ? "mobile" : "desktop"}`}>
            Patterns
          </SideNavLink>
          <SideNavLink
            color={isLight ? "light" : "dark"}
            to="/css"
            type={`navigation-${isMobile ? "mobile" : "desktop"}`}>
            Vanilla CSS
          </SideNavLink>
          <Link
            color={isLight ? "light" : "dark"}
            display="block"
            href="/docs"
            mb={1}
            mx={3}
            pb={2}
            pt={[3, 2]}
            px={isMobile && 3}>
            Docs
          </Link>
        </Box>
      </SideNav.Body>
    </SideNav>
  );
};

AppSideNav.propTypes = {
  isMobile: propTypes.bool.isRequired,
  setTheme: propTypes.func.isRequired,
  theme: propTypes.string.isRequired
};

export default AppSideNav;
