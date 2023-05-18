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
        --color-text-light: #b8b8b8;
        --color-ui : #AB6AFF;
        --gradient: linear-gradient(90deg, #6d41a7,#ab6aff);
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
`

// .lazy-load-image-background {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     border-radius: 12px;
//     overflow: hidden;
//     img {
//       width: 100%;
//       height: 100%;
//       object-fit: cover;
//       object-position: center;
//     }
//   }
