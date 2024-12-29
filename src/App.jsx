import React from "react";
import styled from "styled-components";
import "./App.css";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { light, dark } from "./theme";
import { useState } from "react";

import { Button } from "./components/button";
import { Column, Row } from "./components/layout";
import { BattleField } from "./components/battlefield";

import { CheckOption, Option } from "./components/settings";
import SwitchMode from "./components/switch_mode";

export const Title = styled.div`
  color: ${(props) => props.theme.color.black};
  font-size: var(--h1-font);
  font-weight: 700;
  padding-bottom: 16px;
`;

const Subtitle = styled.div`
  color: var(--subtitle);
  font-size: var(--h2-font);
  font-weight: 700;
`;

const Background = styled.div`
  background-color: var(--backgroundColor);
`;

/* try enum with typescript! */

function App() {
  const [mode, setMode] = useState(light);

  const toggleMode = () => {
    if (mode === light) setMode(dark);
    else setMode(light);
  };

  return (
    <ThemeProvider theme={mode}>
      <GlobalStyle />
      <Background>
        <Row>
          <Title>Rock-Scissors-Paper Simulator</Title>
          <SwitchMode theme={mode} onClick={toggleMode}></SwitchMode>
        </Row>

        <Row gap="16px">
          <BattleField></BattleField>
          <Column gap="96px">
            <Column gap="16px">
              <Subtitle>Settings</Subtitle>
              <Column gap="32px">
                <Option>Initial amount of Rock</Option>
                <Option>Initial amount of Scissors</Option>
                <Option>Initial amount of Paper</Option>
              </Column>
            </Column>
            <Column gap="24px">
              <CheckOption>Use time limit?</CheckOption>
              <Option>Time limit (seconds)</Option>
            </Column>
            <Column gap="16px" alignself="end">
              <Button type="reset" onClick={() => {}}>
                Reset Settings
              </Button>
              <Button type="run" onClick={() => {}}>
                Run!
              </Button>
            </Column>
          </Column>
        </Row>
      </Background>
    </ThemeProvider>
  );
}

export default App;
