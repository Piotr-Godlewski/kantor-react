import { createGlobalStyle } from "styled-components";
import background from "./changedMoney.jpg";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  height: -webkit-fill-available;

}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
  font-family: 'Poppins', sans-serif;
}

:root {
  background-image: url("${background}");
  background-position: center;
  background-size: cover;
  background-repeat: repeat-y;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 600px;
}

@media (max-width: 767px) {
  :root {
    grid-template-columns: 1fr;
  }
}
`