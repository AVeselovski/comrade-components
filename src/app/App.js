import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import themes from "../theme";
import GlobalStyle from "../styles";
// components
import Header from "./AppHeader";
import SideNav from "./AppSideNav";
import HomePage from "./HomePage";
import TypographyPage from "./TypographyPage";
import ColorsPage from "./ColorsPage";
import ElementsPage from "./ElementsPage";
import PatternsPage from "./PatternsPage";
import VanillaCSSPage from "./VanillaCSSPage";

export const ThemeContext = React.createContext();

const App = () => {
  const [themeName, setTheme] = useState("light");
  const [isMobile, setIsMobile] = useState(false);
  const theme = themes[themeName];

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
    <ThemeContext.Provider
      value={{
        theme: themeName,
        setTheme: () => setTheme()
      }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header setTheme={setTheme} theme={themeName} />
        <SideNav isMobile={isMobile} setTheme={setTheme} theme={themeName} />
        <Switch>
          <Route component={() => <HomePage />} exact path="/" />
          <Route component={() => <TypographyPage />} path="/typography" />
          <Route component={() => <ColorsPage />} path="/colors" />
          <Route component={() => <ElementsPage />} path="/elements" />
          <Route component={() => <PatternsPage />} path="/patterns" />
          <Route component={() => <VanillaCSSPage />} path="/css" />
        </Switch>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
