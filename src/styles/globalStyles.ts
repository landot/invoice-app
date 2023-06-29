import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
    html, body, #app, #app>div {
        height: 100%;
        background: #F8F8FB;
    }

    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'League Spartan', Sans-Serif;
    }

    img {
        user-select: none;
        -khtml-user-select: none;
        -o-user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
    }
`;
 
export default GlobalStyle;