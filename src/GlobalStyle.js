import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --placeholder: #AEAEAE;

        --h1-font: 32px;
        --h2-font: 24px;
        --subtitle-font: 16px;
        
        background-color: ${(props) => props.theme.color.backgroundColor};
        --primary: ${(props) => props.theme.color.primary};
        --secondary: ${(props) => props.theme.color.secondary};
        --black: ${(props) => props.theme.color.black};
        --white: ${(props) => props.theme.color.white};
        --subtitle: ${(props) => props.theme.color.subtitle};
        --checkbox: ${(props) => props.theme.color.checkbox};
        --placeholder: ${(props) => props.theme.color.placeholder};
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
