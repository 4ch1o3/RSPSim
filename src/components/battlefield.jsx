import styled from "styled-components";

export const BattleField = styled.div`
  display: flex;
  color: ${(props) => props.theme.color.primary}

  border-radius: 20px;
  border: 4px solid;

  min-width: 480px;
  width: 100%;
  height: 100%;
  min-height: 712px;
`;
