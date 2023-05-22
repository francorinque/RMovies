import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *,::before,::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
    }

    :root{
        --color-bg: #2b2a2a;
        --color-bg-dark: #181818;
        --color-text: #ffff;
        --color-text-light: #c9c9c9;
        --color-ui : #BE3A34;
        --gradient: linear-gradient(90deg, #852824 ,var(--color-ui));
        --gradient-overlay: linear-gradient(
                1deg,
            rgba(24, 24, 24, 1) 0%,
            rgba(24, 24, 24, 0.5018382352941176) 100%
            );
        --h-header: 70px;
        --regular: 300;
        --semibold: 600;
        --bold: 800;
        --radius: 8px;
        --max-w: 1300px;
    }

    body{
        background-color: var(--color-bg-dark);
        color: var(--color-text);
        font-family: 'Poppins', sans-serif;
    }
    a{
        color: inherit;
    }

    img{
        width: 100%;
        max-width: 100%;
        height: 100%;
        object-fit: cover;
    }

    section{
        padding: 100px 0;
    }
`
