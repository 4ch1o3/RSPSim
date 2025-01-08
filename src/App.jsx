import React, { useEffect } from "react";
import styled from "styled-components";
import "./App.css";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { light, dark } from "./theme";
import { useState } from "react";

import { Button } from "./components/button";
import { Column, Row } from "./components/layout";
import { BattleField } from "./components/battlefield.tsx";

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

  const [amountRock, setAmountRock] = useState(0);
  const [amountScissors, setAmountScissors] = useState(0);
  const [amountPaper, setAmountPaper] = useState(0);

  const reset = () => {
    setAmountRock(0);
    setAmountScissors(0);
    setAmountPaper(0);
  };

  const [isTimeLimitEnabled, setIsTimeLimitEnabled] = useState(false);
  const toggleTimeLimit = () => {
    console.log(isTimeLimitEnabled);
    setIsTimeLimitEnabled((prev) => !prev);
  };

  const setTimeLimit = () => {};

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
                <Option
                  initValue={amountRock}
                  onChange={(e) => {
                    setAmountRock(e.target.value);
                  }}
                >
                  Initial amount of Rock
                </Option>
                <Option
                  initValue={amountScissors}
                  onChange={(e) => {
                    setAmountScissors(e.target.value);
                  }}
                >
                  Initial amount of Scissors
                </Option>
                <Option
                  initValue={amountPaper}
                  onChange={(e) => {
                    setAmountPaper(e.target.value);
                  }}
                >
                  Initial amount of Paper
                </Option>
              </Column>
            </Column>
            <Column gap="24px">
              <CheckOption onClick={toggleTimeLimit}>
                Use time limit?
              </CheckOption>
              {isTimeLimitEnabled && (
                <Option
                  initValue={0}
                  onChange={(e) => {
                    setTimeLimit(e.target.value);
                  }}
                >
                  Time limit (seconds)
                </Option>
              )}
            </Column>
            <Column gap="16px" alignself="end">
              <Button
                type="reset"
                onClick={() => {
                  reset();
                  console.log(
                    "reset: \n rock: " +
                      amountRock +
                      " | scissors: " +
                      amountScissors +
                      " | paper: " +
                      amountPaper
                  );
                }}
              >
                Reset Settings
              </Button>
              <Button
                type="run"
                onClick={() => {
                  alert(
                    "run with: \n rock: " +
                      amountRock +
                      " | scissors: " +
                      amountScissors +
                      " | paper: " +
                      amountPaper +
                      "\nUse time limit? " +
                      isTimeLimitEnabled +
                      "\ntime limit(s): "
                  );
                }}
              >
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
