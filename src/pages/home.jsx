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

export const Home = (theme) => {
  return;
};
