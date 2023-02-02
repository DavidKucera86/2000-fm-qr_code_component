import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Outfit&display=swap');

    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Outfit', sans-serif;
        background-color: hsl(212, 45%, 89%);
    }

`;

export default GlobalStyles;
