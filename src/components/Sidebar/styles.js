import styled from "styled-components";

export const Tools = styled.div`
    height: calc(100vh - 32px);
    margin: auto 0;
    margin-left: 8px;
    width: 60px;
    border: none;
    border-radius: 10px;
    background-color: ${props => props.theme.sidebarColor};
    display: flex;
    flex-direction: column;

    div{
        margin: auto;
        &:first-child{
            margin-top: 32px;
        }
        &:last-child{
            margin-bottom: 32px;
        }
    }
`

export const ToolImageIcon = styled.img`
    width: 48px;
    height: 48px;
    padding: 8px;
`

export const DateTime = styled.div`
    font-size: 14px;
    padding: 4px 8px;
    color: ${(props)=> props.textColor};
    text-align: center;
`