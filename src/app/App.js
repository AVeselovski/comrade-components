import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import themes from "../theme";
import GlobalStyle from "../styles";

import Header from "./Header";
import HomePage from "./HomePage";
import TypographyPage from "./TypographyPage";
import ColorsPage from "./ColorsPage";
import ElementsPage from "./ElementsPage";
import PatternsPage from "./PatternsPage";
import VanillaCSSPage from "./VanillaCSSPage";

export const ThemeContext = React.createContext();

const App = () => {
  const [themeName, setTheme] = useState("light");
  const theme = themes[themeName];

  return (
    <ThemeContext.Provider
      value={{
        theme: themeName,
        setTheme: () => setTheme()
      }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header theme={themeName} setTheme={setTheme} />
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
