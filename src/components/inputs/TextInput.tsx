import React, { FunctionComponent } from "react";
import styled from "../../styles/styled";

const Wrapper = styled.div<{ invalid?: boolean }>`
  position: relative;
  margin: 0.5rem 0;
  --grey: #f5f5f5;
  max-width: var(--form-max-width);
  input {
    outline: none;
    color: black;
    width: 100%;
    padding: 0.5rem;
    border: 1.5px solid
      ${({ invalid }) => (invalid ? "var(--red-danger)" : "var(--grey)")};
    background: var(--grey);
    border-radius: 3px;
    transition: all 0.2s;
    &:focus {
      border-color: var(--blue-link);
      transform: scale(1.01) translateY(-1px);
      box-shadow: 0px 10px 20px -13px rgba(32, 56, 117, 0.35);
    }
    &::placeholder {
      color: grey;
      font-weight: normal;
    }
  }
`;

interface Props {
  name: string;
  value: string | number;
  placeHolder?: string;
  label?: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  type?: string;
  tabIndex?: number;
  error?: string;
  required?: boolean;
  mask?: any;
  id?: string;
}

const TextInput: FunctionComponent<Props> = ({
  name,
  value,
  placeHolder = "",
  label = "",
  onChange,
  type = "text",
  tabIndex = 0,
  required = false,
  mask,
  id = `input-${name}`,
}) => {
  return (
    <Wrapper className="wrapper">
      <label htmlFor={id}>{label}</label>
      <input
        name={name}
        value={value}
        placeholder={placeHolder}
        tabIndex={tabIndex}
        type={type === "number" ? "text" : type}
        id={id}
        onChange={onChange}
        className="input"
        mask={mask || false}
        guide={false}
        //@ts-ignore
        inputMode={type === "number" ? "numeric" : type}
      ></input>
    </Wrapper>
  );
};

export default TextInput;
