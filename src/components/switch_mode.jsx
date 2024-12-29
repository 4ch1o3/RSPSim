import styled from "styled-components";
import { Row } from "./layout";
import { ReactComponent as Day } from "../assets/Day.svg";
import { ReactComponent as Night } from "../assets/Night.svg";
import { light, dark } from "../theme";

const ModeLabel = styled.div`
  font-size: var(--subtitle);
  font-weight: 700;
  //   color: var(--primary);
`;

const StyledSwitchMode = styled.button`
  background: none;
  border: none;
  color: var(--black);
  font-size: var(--subtitle-font);
  font-weight: 700;
`;

const SwitchMode = ({ theme, onClick }) => {
  return (
    <StyledSwitchMode onClick={onClick}>
      {theme === light ? (
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
