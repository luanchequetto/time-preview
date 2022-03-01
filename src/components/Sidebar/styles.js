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

    @media (max-width: 991px) {
    width: 100%;
    height: 80px;
    flex-direction: row;
    margin: 0;
    border-radius: 0;
}

    div{
        margin: auto;
        &:first-child{
            margin-top: 32px;
        }
        &:last-child{
            margin-bottom: 32px;
        }
        @media (max-width: 991px) {
            &.date-wrapper{
                display: flex;
                align-items: center;
            }
            &:first-child, &:last-child{
                margin: auto;
            }
        }
    }
`

export const ToolImageIcon = styled.img`
    width: 48px;
    height: 48px;
    padding: 8px;
    &:hover{
        cursor: pointer;
        filter: brightness(0.9);
        transition: 0.3s;
    }
`

export const DateTime = styled.div`
    font-size: 16px;
    padding: 4px 8px;
    color: ${(props)=> props.textColor};
    text-align: center;
    font-weight: bold;
`