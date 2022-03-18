import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border-bottom: solid 1px #000;
    label {
      font-size: 16px;
      text-align: end;
      margin-top: 16px;
    }
    input {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      width: 44px;
      height: 48px;
      border: none;
      background-color: transparent;
      &::-webkit-color-swatch {
        border-radius: 50px;
        border: none;
      }
      &::-moz-color-swatch {
        border-radius: 50px;
        border: none;
      }
    }
  }
`;
