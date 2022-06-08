import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --primary: #ff6a00;
    }

    * {
        font-family: sans-serif;
        color: #333;
        box-sizing: border-box;
    }
`;

export default GlobalStyle;