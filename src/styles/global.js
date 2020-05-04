import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    html, body {
        padding: 0;
        background: ${({ theme }) => theme.primaryBackground};
        color: ${({ theme }) => theme.primaryColor};
        height: 100vh;
        text-rendering: optimizeLegibility;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";    
    }
    *, *::after *::before {
        box-sizing: border-box;
    }
`