import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    overflow: hidden;
    @media (max-width: 991px) {
        overflow: initial;
}
}
body{
    height: 100vh;
    #root{
        height: 100vh;
    }
    font-family: 'Roboto', sans-serif;
}
`;
