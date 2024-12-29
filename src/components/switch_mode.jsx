import styled from "styled-components";
import { Row } from "./layout";
import { ReactComponent as Day } from "../assets/Day.svg";
import { ReactComponent as Night } from "../assets/Night.svg";
import { useState } from "react";

const ModeLabel = styled.div`
  font-size: var(--subtitle);
  font-weight: 700;
  //   color: var(--primary);
`;

const StyledSwitchMode = styled.button`
  background: none;
  border: none;

  font-size: var(--subtitle-font);
  font-weight: 700;
`;

const SwitchMode = (onClick) => {
  const [mode, setMode] = useState("day");

  return (
    <StyledSwitchMode
      onClick={() => {
        if (mode === "day") {
          setMode("night");
        } else if (mode === "night") {
          setMode("day");
        }
      }}
    >
      {mode === "day" ? (
        <Row gap="8px">
          <Night />
          <ModeLabel>Night Mode</ModeLabel>
        </Row>
      ) : (
        <Row gap="8px">
          <Day />
          <ModeLabel>Day Mode</ModeLabel>
        </Row>
      )}
    </StyledSwitchMode>
  );
};

export default SwitchMode;
