import styled from "styled-components";

const StyledInputField = styled.input.attrs((props) => ({
  type: "text",
}))`
  border: 2px solid;
  border-radius: 8px;

  padding: 8px;

  font-weight: 300;

  width: 310px;
  height: 36px;
`;

const InputField = () => {
  return <StyledInputField placeholder="0"></StyledInputField>;
};

export default InputField;
