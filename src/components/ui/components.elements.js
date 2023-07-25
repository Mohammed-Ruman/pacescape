import styled from "styled-components";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
export const Label = styled.label`
  color: #222;
  margin: 0;
  font-weight: 600;
  font-size: 18px;
`;

export const EyeVisible = styled(AiFillEye)`
  color: #3564dd;
  height: 24px;
  width: 24px;
  &:hover {
    cursor: pointer;
    color: #3564dd99;
  }
`;
export const EyeInVisible = styled(AiFillEyeInvisible)`
  color: #3564dd;
  height: 24px;
  width: 24px;
  &:hover {
    cursor: pointer;
    color: #3564dd99;
  }
`;
export const Input = styled(({ ...props }) => <input {...props}></input>)`
  background-color: #eee;
  outline: none;
  border-radius: 2rem;
  border: 1px solid transparent;
  padding: 1.2rem 1.8rem;
  min-width: ${(props) => (props.minwidth ? props.minwidth : "280px")};
  margin: 0;
  transition: all 0.2s ease-in-out;
  font-size: 18px;
  &::placeholder {
    font-size: 18px;
    color: #aaa;
  }
  &:focus {
    border: 1px solid #6c6c6c;
  }
  &:hover {
    cursor: text;
    border: 1px solid #6c6c6c;
  }
`;

export const Select = styled.select`
  background-color: #ddd;
  outline: none;
  border-radius: 2rem;
  border: 1px solid transparent;
  border-right: 1.8rem solid transparent;
  padding: 1.2rem 1.8rem;
  position: relative;
  margin: 0;
  transition: all 0.2s ease-in-out;

  font-size: 18px;
  &::after {
    content: "▼";
    font-size: 1rem;
    top: 6px;
    right: 10px;
    position: absolute;
  }
  & > option {
    padding: 0.7rem 1rem !important;
  }
  &::placeholder {
    font-size: 18px;
  }
  &:focus {
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 12px -4px rgba(0, 0, 0, 0.9);
  }
`;
