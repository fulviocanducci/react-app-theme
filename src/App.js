import React from "react";
import { ThemeProvider } from "styled-components";

import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import Header from "./components/header";
import GlobalStyles from "./styles/global";

import usePersistedState from "./utils/usePersistedState";

function App() {
  const [theme, setTheme] = usePersistedState("@theme", light);
  const toogleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header toogleTheme={toogleTheme} />
    </ThemeProvider>
  );
}

export default App;
