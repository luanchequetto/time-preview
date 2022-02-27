import styled from "styled-components"

export const Card = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 2fr 1fr 1fr;
    width: auto;
    height: 230px;
    border: 1px solid #707070;
    border-radius: 30px;
    padding: 16px;
    margin-right: 16px;
    margin-bottom: 16px;
    font-family: "Roboto", sans-serif;
    &:hover{
        cursor: pointer;
        backdrop-filter: brightness(0.8);
        box-shadow:
        0 8px 8px rgba(0, 0, 0, 0.06),
        0 24px 64px rgba(0, 0, 0, 0.12);
        border: none;
        transition: 0.5s;
    }
    
    img{
        grid-column: 1;
        grid-row: 1;
        width: auto;
        height: 64px;
        padding-bottom: 24px;
    }
    .week-day{
        grid-column: 2;
        grid-row: 1;
        text-align: right;
        font-size: 12px;
        color: #8D7C99;
    }
    h2{
        font-size: 16px;
        font-weight: bold;
        color: #FFF;
        grid-column: 1/2;
        text-align: left;
        margin-bottom: 0;
        
        
    }
    div{
        font-size: 14px;
        font-family: "Roboto", sans-serif;
        color: #8D7C99;
        grid-column: 1/3;
        grid-row: 3;
        text-align: left;
        display: flex;
        flex-direction: column;
        letter-spacing: 0.5px;
        span{
            padding: 2px 0;
        }
    }
`