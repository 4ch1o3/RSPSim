import styled from "styled-components";

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  //   justify-content: space-between;
  gap: ${(props) => props.gap};
  align-self: ${(props) => props.alignself};
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  gap: ${(props) => props.gap};
`;
