import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { shade } from "polished";

import { Container, HeaderTitle } from "./styles.js";

const Header = ({ toogleTheme }) => {
  const { colors, title } = useContext(ThemeContext);
  return (
    <Container>
      <HeaderTitle>Hello Word !!!</HeaderTitle>
      <Switch
        onChange={toogleTheme}
        checked={title === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        onColor={colors.secundary}
        offColor={shade(0.15, colors.primary)}
      />
    </Container>
  );
};

export default Header;
