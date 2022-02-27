import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    height: calc(100vh -16px);
    margin: 16px;
    width: 40%;
    flex-direction: column;
    background: #FFF;
    border-radius: 30px;
    padding: 24px;
`

export const CardHeader = styled.section`
    display: flex;
    justify-content: space-between;
    height: 15%;
    div{
        font-size: 32px;
        font-family: "Roboto", sans-serif;
        p{
            margin-bottom: 0;
            font-size: 32px;
            font-weight: lighter;
            letter-spacing: 0.8px;
        }
        h2{
            margin-top: 0;
            font-weight: bold;
        }
    }
    img{
        height: 96px;
    }
`

export const CardTemperature = styled.section`
width: calc(100% + 48px); // dobro do padding Wrapper
margin-left: -24px;
margin-right: -24px;
height: 50%;

`

export const TemperatureWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    font-family: "Roboto",sans-serif;
    background: ${props => `url(${props.bg}) no-repeat bottom`};
    background-size: contain;
    h2{
        margin: 0 auto;
        width: auto;
        position: relative;
        font-size: 136px;
        overflow: unset;
        &:after{
            content: "${(props) => props.unit}";
            font-size: 48px;
            position: absolute;
            top: -16px;
            right: -32px;
            
        }
    }
    p{
        margin: 2px;
        color: #5C3975;
        font-weight: bold;
    }

`

export const SomeInfos = styled.section`
    border-top: solid 1px #8D7C99;
    padding: 24px 16px;
    height: 35%;
`
