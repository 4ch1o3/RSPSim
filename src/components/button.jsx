import styled from "styled-components";
import theme from "../theme";

const StyledButton = styled.div`
  background: ${(props) =>
    props.type === "run" ? "theme.color.primary" : "theme.color.secondary"};

  font-size: var(--h2-font);
  font-weight: 700;

  width: 312px;
  height: 56px;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transition: 0.25s;
    opacity: 50%;
  }
`;

export const Button = (props) => {
  return <StyledButton type={props.type}>{props.children}</StyledButton>;
};
