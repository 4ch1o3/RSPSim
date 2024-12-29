import styled from "styled-components";
import { Button } from "../components/button";
import { Column, Row } from "../components/layout";
import { BattleField } from "../components/battlefield";
import InputField from "../components/input_field";
import { CheckOption, Option } from "../components/settings";
import SwitchMode from "../components/switch_mode";
import { useState } from "react";
import { light, dark } from "../theme";

export const Title = styled.div`
  color: ${(props) => props.theme.black};
  font-size: var(--h1-font);
  font-weight: 700;
  padding-bottom: 16px;
`;

const Subtitle = styled.div`
  // color: var(--black);
  font-size: var(--h2-font);
  font-weight: 700;
`;

export const Home = () => {
  return (
    <div>
      <Row>
        <Title>Rock-Scissors-Paper Simulator</Title>
        <SwitchMode onClick={() => {}}></SwitchMode>
        {/* night mode button */}
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
            <Button type="reset">Reset Settings</Button>
            <Button type="run">Run!</Button>
          </Column>
        </Column>
      </Row>
    </div>
  );
};
