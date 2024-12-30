import styled from "styled-components";

const StyledInputField = styled.input.attrs((props) => ({
  type: "number",
  inputMode: "numeric",
  min: 0,
}))`
  border: 2px solid;
  border-radius: 8px;
  color: var(--primary);
  background-color: var(--backgroundColor);

  padding: 8px;

  font-weight: 300;

  width: 310px;
  height: 36px;
`;

const InputField = ({ initValue, onChange }) => {
  return (
    <StyledInputField
      placeholder={initValue}
      onChange={onChange}
    ></StyledInputField>
  );
};

export default InputField;
