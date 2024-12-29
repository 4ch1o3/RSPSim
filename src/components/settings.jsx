import styled from "styled-components";
import { Column, Row } from "./layout";
import InputField from "./input_field";

const Subtitle = styled.div`
  font-size: var(--subtitle-font);
  font-weight: 700;
  // padding-bottom: 8px;
  color: var(--subtitle);
`;

export const Option = ({ children }) => {
  return (
    <Column gap="8px">
      <Subtitle>{children}</Subtitle>
      <InputField></InputField>
    </Column>
  );
};

export const CheckOption = ({ children }) => {
  return (
    <Row>
      <Subtitle>{children}</Subtitle>
      <input type="checkbox"></input>
    </Row>
  );
};
