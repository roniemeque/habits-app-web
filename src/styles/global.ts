import { css } from "@emotion/core";
import { theme } from "./theme";

export const globalStyles = () => css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  /* Font-sizing */
  html {
    font-size: 16px;
  }
  /* Remove default padding */
  ul,
  ol {
    padding: 0;
  }
  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul,
  ol,
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }
  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    /* text-rendering: optimizeSpeed; */
    /* text-rendering: optimizeLegibility; */
    -webkit-font-smoothing: antialiased;
    line-height: 1.5;
    font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica",
      "Arial", sans-serif;
    color: ${theme.colors.black};
    background-color: ${theme.colors.background};
  }
  ul[class],
  ol[class],
  li {
    list-style: none;
  }
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }
  img {
    max-width: 100%;
    display: block;
  }
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  input {
    border: none;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-text-fill-color: inherit;
    -webkit-transition: color 9999s ease-out, background-color 9999s ease-out;
    -webkit-transition-delay: 9999s;
  }
  a {
    text-decoration: none;
  }
  button {
    border: none;
    outline: none;
    appearance: none;
    cursor: pointer;
    transition: transform 0.2s;
    &:hover {
      transform: scale(1.02) translateY(-1px);
    }
    &:focus {
      transform: scale(0.99) translateY(0);
    }
  }
  fieldset {
    border: none;
    margin: 0;
    padding: 0;
  }

  .error {
    padding: 2rem;
    background: white;
    margin: 2rem 0;
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-left: 5px solid red;
    p {
      margin: 0;
      font-weight: 100;
    }
    strong {
      margin-right: 1rem;
    }
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: ${theme.fonts.cool};
  }
`;
