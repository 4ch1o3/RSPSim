import styled from "styled-components";

const StyledButton = styled.div`
  background: ${(props) =>
    props.type === "run" ? "var(--secondary)" : "var(--primary)"};

  font-size: var(--h2-font);
  font-weight: 700;
  color: ${(props) => (props.type === "run" ? "var(--black)" : "var(--white)")};

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

export const Button = ({ type, onClick, children }) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
