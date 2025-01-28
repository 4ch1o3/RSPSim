import React, { useEffect } from "react";
import styled from "styled-components";
import "./App.css";
import GlobalStyle from "./GlobalStyle.js";
import { ThemeProvider } from "styled-components";
import { light, dark } from "./theme.js";
import { useState } from "react";

import { Button } from "./components/button.jsx";
import { Column, Row } from "./components/layout.jsx";
import {
  BattleField,
  BattleFieldContainer,
} from "./components/battlefield.tsx";
import { Entity } from "./components/Entity.ts";

import { CheckOption, Option } from "./components/settings.jsx";
import SwitchMode from "./components/switch_mode.jsx";

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

  const [rockAmount, setrockAmount] = useState(0);
  const [scissorsAmount, setscissorsAmount] = useState(0);
  const [paperAmount, setpaperAmount] = useState(0);

  const [isRunning, setIsRunning] = useState(false);
  const [entities, setEntities] = useState([]); // tsx: useState<Entity[]>([]);

  const [isTimeLimitEnabled, setIsTimeLimitEnabled] = useState(false);
  const [timeLimit, setTimelimit] = useState(0);

  const handleRun = () => {
    const rockEntities = Array.from(
      { length: rockAmount },
      () => new Entity("rock")
    );
    const scissorsEntities = Array.from(
      { length: scissorsAmount },
      () => new Entity("scissors")
    );
    const paperEntities = Array.from(
      { length: paperAmount },
      () => new Entity("paper")
    );
    setEntities([...rockEntities, ...scissorsEntities, ...paperEntities]);
    setIsRunning(true);
  };

  const handleSimulationEnd = (finalEntities) => {
    // finalEntities: Entity[]
    setIsRunning(false);
    const winner = finalEntities[0]?.type || "none";
    alert(`Simulation ended! Winner is ${winner}`);
  };

  const stopSimulation = () => {
    setIsRunning(false);
    setEntities([]);
  };

  const reset = () => {
    setrockAmount(0);
    setscissorsAmount(0);
    setpaperAmount(0);
  };

  const toggleTimeLimit = () => {
    console.log(isTimeLimitEnabled);
    setIsTimeLimitEnabled((prev) => !prev);
  };

  const setSimulationDuration = (duration) => {
    setTimelimit(duration);
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
          {isRunning ? (
            <BattleField
              entities={entities}
              onSimulationEnd={handleSimulationEnd}
            />
          ) : (
            <BattleFieldContainer />
          )}

          <Column gap="96px">
            <Column gap="16px">
              <Subtitle>Settings</Subtitle>
              <Column gap="32px">
                <Option
                  initValue={rockAmount}
                  onChange={(e) => {
                    setrockAmount(Number(e.target.value));
                  }}
                >
                  Initial amount of Rock
                </Option>
                <Option
                  initValue={scissorsAmount}
                  onChange={(e) => {
                    setscissorsAmount(Number(e.target.value));
                  }}
                >
                  Initial amount of Scissors
                </Option>
                <Option
                  initValue={paperAmount}
                  onChange={(e) => {
                    setpaperAmount(Number(e.target.value));
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
                    setSimulationDuration(Number(e.target.value));
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
                      rockAmount +
                      " | scissors: " +
                      scissorsAmount +
                      " | paper: " +
                      paperAmount
                  );
                }}
              >
                Reset Settings
              </Button>
              {isRunning ? (
                <Button type="run" onClick={stopSimulation}>
                  Stop
                </Button> // TODO: add stop button, terminate without winner
              ) : (
                <Button
                  type="run"
                  onClick={() => {
                    alert(
                      "run with: \n rock: " +
                        rockAmount +
                        " | scissors: " +
                        scissorsAmount +
                        " | paper: " +
                        paperAmount +
                        "\nUse time limit? " +
                        isTimeLimitEnabled +
                        "\ntime limit(s): " +
                        timeLimit
                    );
                    handleRun();
                  }}
                >
                  Run!
                </Button>
              )}
            </Column>
          </Column>
        </Row>
      </Background>
    </ThemeProvider>
  );
}

export default App;
