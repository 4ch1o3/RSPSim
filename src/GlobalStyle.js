import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --placeholder: #AEAEAE;

        --h1-font: 32px;
        --h2-font: 24px;
        --subtitle-font: 16px;
    }

    * {
        font-family: "Pretendard Variable";
        line-height: 100%;
        box-sizing: border-box;
    }

    html {
        width: 100%;
        height: 100%;   
    }

    body {
        width: 100%;
        height: 100%;
        padding: 113px;
    }
`;

export default GlobalStyle;
