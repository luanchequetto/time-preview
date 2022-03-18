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
    .itens {
      width: fit-content;
      border: none;
      display: flex;
      justify-content: flex-end;
      gap: 32px;
      select {
        width: auto;
      }
    }
  }
`;
