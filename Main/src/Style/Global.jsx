import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root { 
/* --background: #F3F5F6;
--shape: #FFFFFF; 
--green: #038153; 
--red: #e52e4d; 
--blue: #596DD6; 
--blue-light: #5F73E3;

--text-logo: #FFFFFF;
--text-title: #67748E;
--text-body: #344767; */

font-synthesis: none; 
text-rendering: optimizeLegibility; 
-webkit-font-smoothing: antialiased; 
-moz-osx-font-smoothing: grayscale; 
-webkit-text-size-adjust: 100%; }

html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video { margin: 0; padding: 0; border: 0; font-size: 100%; font: inherit; vertical-align: baseline; } 

/* HTML5 display-role reset for older browsers */ article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section { display: block; } body { line-height: 1; } ol, ul { list-style: none; } blockquote, q { quotes: none; } blockquote:before, blockquote:after, q:before, q:after { content: ''; content: none; } table { border-collapse: collapse; border-spacing: 0; }

html { @media (max-width: 1080px) { font-size: 93.75%; } @media (max-width: 800px){ font-size: 87.5% } }

body { background: var(--background); -webkit-font-smoothing: antialiased; }

body, input, textarea, button { font-family: 'Open Sans', sans-serif; font-weight: 400; }

h1, h2 { font-weight: 700; } h3, h4, strong{ font-weight: 600; }

button { cursor: pointer; }

[disabled]{ opacity: 0.6; cursor: not-allowed; }`;