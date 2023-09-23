import { createGlobalStyle, keyframes } from "styled-components";
import { mainColorButton, mainContrastColor } from "../constants/colors";

const moveGradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
    }
    body {
        margin: 0;
        padding: 0;
        position: relative;
        overflow: hidden;
        background: linear-gradient(
            45deg,
            #e7994d,
            #e55e5e,
            #1e8dc6
        );
        background-size: 300% 300%; 
        animation: ${moveGradient} 10s linear infinite;
    
    }

    button {
    outline: none;
    border: none;
    border-radius: 5px;
    background-color: ${mainColorButton};
    font-size: 20px;
    font-weight: 600;
    color: ${mainContrastColor};
    cursor: pointer;
    width: calc(17% - 30px);
    min-width: 80px;
    padding: 12px;
    &:hover {
        background-color: #e7994d;
    }
}

    h1 {
        font-weight: 700;
        font-size: 26px;
        color: ${mainContrastColor};
    }
    input {
        font-size: 20px;
        width: calc(40% - 30px);
        border-radius: 5px;
        outline: none;
        border: 1px solid #ccc;
        padding: 15px;
        margin: 1px;
        :focus {
            border: 2px solid #ffb6b6;
            margin: 0px;
        }
    }
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
        width: 100%;
        border-radius: 5px;
    }
    a {
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: ${mainContrastColor};
        text-decoration: none;
        padding-top: 30px;
    }
`;

export default GlobalStyle;
