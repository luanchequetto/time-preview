import styled from "styled-components";

export const CategoryTitle = styled.h2`
    text-align: center;
    width: 100%;
    margin-bottom: 24px;
`
export const ListWrapper = styled.ul`
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    margin: 16px 0;
`

export const ModalWrapper = styled.div`
    margin-bottom: 16px;
    position: relative;
    overflow: hidden;
    .presets{
        margin-bottom: 16px;
    }
    .close-button{
        position: absolute;
        top: 0;
        right: 0;
        border: none;
        background: transparent;
        font-size: 18px;
        font-weight: bold;
        &:hover{
            cursor: pointer;
            filter: brightness(1.2);
        }
    }
`

export const SaveButton = styled.button`
    width: auto;
    height: auto;
    padding: 24px;
    margin: 0 auto;
    display: block;
    background-color: ${props => props.bg};
    border: solid 1px ${props => props.text};
    color: ${props => props.text};
    border-radius: 30px;
    font-weight: bold;
    &:hover{
        cursor: pointer;
        filter: brightness(1.2);
    }
`