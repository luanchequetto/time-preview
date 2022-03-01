import styled from "styled-components";

export const Item = styled.li`
    display: flex;
    align-items: center;
    padding: 16px;
    width: 48px;
    height: 48px;
    border: 1px solid #707070;
    border-radius: 50px;
    background: ${props => props.primaryBG};
    label{
        font-size: 16px;
        opacity: 0;
    }
    &:hover{
       cursor: pointer;
       border: solid 3px #000;
       filter: brightness(1.2);
       transition: 0.3s;
    }
`
