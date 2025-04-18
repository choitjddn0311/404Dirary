import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: 'KakaoBigSans-ExtraBold';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2503@1.0/KakaoBigSans-ExtraBold.woff2') format('woff2');
    font-weight: 800;
    font-style: normal;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'KakaoBigSans-ExtraBold' , sans-serif;
    }
    :root {
        --containerWidth: 1400px;
        --mainFontSize: 18px;
        --midFontSize: 15px;
        --subFontSize: 13px;
        --mainColor: #00a6fb;
    }
    li {
        list-style: none;
    }
    a {
        color: inherit;
        display: block;
        text-decoration: none;
    }
`;

export default GlobalStyle;