import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import baseTheme from "../theme";
import GlobalStyle from "../styles";
// components
import Header from "./AppHeader";
import Sidebar from "./AppSidebar";
import HomePage from "./HomePage";
import HomePageVanilla from "./vanilla/HomePage";
import TypographyPage from "./TypographyPage";
import TypographyPageVanilla from "./vanilla/TypographyPage";
import ElementsPage from "./ElementsPage";
import ElementsPageVanilla from "./vanilla/ElementsPage";
import PatternsPage from "./PatternsPage";
import PatternsPageVanilla from "./vanilla/PatternsPage";
import ArticlePage from "./ArticlePage";
import ArticlePageVanilla from "./vanilla/ArticlePage";
import ColorsPage from "./ColorsPage";

const getTheme = (scheme) => {
  const colorScheme = baseTheme.colors.schemes[scheme];
  const colors = { ...baseTheme.colors, ...colorScheme };
  const theme = { ...baseTheme, colors, colorScheme: scheme };

  return theme;
};

const App = () => {
  const [themeScheme, setThemeScheme] = useState("light");
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isVanilla, setIsVanilla] = useState(false);
  const theme = getTheme(themeScheme);

  const containerStyles =
    !isMobile && isOpen
      ? { marginLeft: theme.sizes[1], transition: `margin ${theme.transition}` }
      : { marginLeft: 0, transition: `margin ${theme.transition}` };

  useEffect(() => {
    const updateLayout = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);

    return () => {
      window.removeEventListener("resize", updateLayout);
    };
  }, []);

  return (
    <div className="theme-dark">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header isVanilla={isVanilla} setTheme={setThemeScheme} theme={themeScheme} />
        {/* Inverted theme for sidebar */}
        <ThemeProvider theme={themeScheme === "light" ? getTheme("dark") : getTheme("light")}>
          <Sidebar
            isMobile={isMobile}
            isOpen={isOpen}
            isVanilla={isVanilla}
            setIsOpen={setIsOpen}
            setIsVanilla={setIsVanilla}
            setTheme={setThemeScheme}
            theme={themeScheme}
          />
        </ThemeProvider>
        <div style={containerStyles}>
          <Switch>
            <Route component={() => (isVanilla ? <HomePageVanilla /> : <HomePage />)} exact path="/" />
            <Route
              component={() => (isVanilla ? <TypographyPageVanilla /> : <TypographyPage />)}
              path="/typography"
            />
            <Route
              component={() =>
                isVanilla ? <ElementsPageVanilla isMobile={isMobile} /> : <ElementsPage isMobile={isMobile} />
              }
              path="/elements"
            />
            <Route
              component={() => (isVanilla ? <PatternsPageVanilla /> : <PatternsPage />)}
              path="/patterns"
            />
            <Route component={() => <ColorsPage />} path="/colors" />
            <Route component={() => (isVanilla ? <ArticlePageVanilla /> : <ArticlePage />)} path="/article" />
          </Switch>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default App;
