import {createGlobalStyle} from "styled-components";

export const FontsGlobal = createGlobalStyle`
  @font-face {
    font-family: "Roboto";
    src: url("../assets/fonts/Roboto-Medium.woff2") format("woff2"),
    url("../assets/fonts/Roboto-Medium.woff") format("woff"),
    url("../assets/fonts/Roboto-Medium.ttf") format("ttf"),
    url("../assets/fonts/Roboto-Medium.eot") format("eot");
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: "Roboto";
    src: url("../assets/fonts/Roboto-Regular.woff2") format("woff2"),
    url("../assets/fonts/Roboto-Regular.woff") format("woff"),
    url("../assets/fonts/Roboto-Regular.ttf") format("ttf"),
    url("../assets/fonts/Roboto-Regular.eot") format("eot");
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "Karla";
    src: url("../assets/fonts/Karla-Bold.woff2") format("woff2"),
    url("../assets/fonts/Karla-Bold.woff") format("woff"),
    url("../assets/fonts/Karla-Bold.ttf") format("ttf"),
    url("../assets/fonts/Karla-Bold.eot") format("eot");
    font-weight: 700;
    font-style: normal;
  }
`;