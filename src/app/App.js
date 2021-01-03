import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import themes from "../theme";
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

const App = () => {
  const [themeName, setTheme] = useState("light");
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isVanilla, setIsVanilla] = useState(false);
  const theme = themes[themeName];

  const containerStyles =
    !isMobile && isOpen
      ? { marginLeft: themes.light.sizes[1], transition: `margin ${themes.light.transition}` }
      : { marginLeft: 0, transition: `margin ${themes.light.transition}` };

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
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header setTheme={setTheme} theme={themeName} />
      <Sidebar
        isMobile={isMobile}
        isOpen={isOpen}
        isVanilla={isVanilla}
        setIsOpen={setIsOpen}
        setIsVanilla={setIsVanilla}
        setTheme={setTheme}
        theme={themeName}
      />
      <div style={containerStyles}>
        <Switch>
          <Route component={() => (isVanilla ? <HomePageVanilla /> : <HomePage />)} exact path="/" />
          <Route
            component={() => (isVanilla ? <TypographyPageVanilla /> : <TypographyPage />)}
            path="/typography"
          />
          <Route
            component={() => (isVanilla ? <ElementsPageVanilla /> : <ElementsPage />)}
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
  );
};

export default App;
