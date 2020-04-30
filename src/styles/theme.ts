const light = {
  text: "#2b2c34",
  stroke: "#2b2c34",
  background: "#fffffe",
  main: "#fffffe",
  highlight: "#6246ea",
  primary: "#fffffe",
  secondary: "#d1d1e9",
  tertiary: "#e45858",
};

const dark = {
  text: "white",
  stroke: "black",
  background: "#0f0e17",
  main: "#fffffe",
  highlight: "#ff8906",
  primary: "#fffffe",
  secondary: "#f25f4c",
  tertiary: "#e53170",
};

const chosen = dark;

const defaultTheme = {
  gutter: "1rem",
  fonts: {
    cool: "'Bree Serif', serif",
  },
  colors: {
    black: "black",
    ...chosen,
  },
  border: {
    normal: "10px",
    small: "5px",
    smaller: "3px",
  },
  shadows: {
    light: "0 1px 2px #C9C9C9",
    bluesh: "0 1px 3px rgba(136, 136, 255, 0.34)",
    normal: "0 4px 7px #ababab",
  },
};

export const theme = defaultTheme;

// infering type directly from the used theme
export type Theme = typeof theme;
