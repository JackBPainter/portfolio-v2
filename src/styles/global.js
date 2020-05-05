import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    html, body {
        padding: 0;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: ${({ theme }) => theme.primaryBackground};
        color: ${({ theme }) => theme.primaryColor};
        height: 100vh;
        text-rendering: optimizeLegibility;
        font-family: sans-serif;
    }
    *, *::after *::before {
        box-sizing: border-box;
    }
`