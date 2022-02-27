import styled from "styled-components";

export const Title = styled.div`
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    color: #fff;
    h2{
        margin-bottom: 8px;
        margin-top: initial;
        font-weight: lighter;
        letter-spacing: 2px;
        span{
        font-weight: bold;
    }
    };
    
`
export const FormWrapper = styled.form`
display: flex;
position: relative;
margin-top: 32px;
`

export const Input = styled.input`
    border: solid 1px #707070;
    border-radius: 20px;
    padding: 16px;
    width: 100%;
    background: transparent;
    color: #FFF;
    border: solid 1px #707070;
    &:focus-visible{
        outline: none;
        border-color: #FFF;
    }
    
`
export const Button = styled.button`
    width: auto;
    margin: auto 0;
    position: absolute;
    right: 16px;
    top: 8px;
    bottom: 8px;
    background: none;
    border: none;
&:hover{
        cursor: pointer;
    }
`
export const Icon = styled.img`
height: 100%;
width: auto;
`