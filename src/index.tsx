import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "emotion-theming";
import { theme } from "./styles/theme";
import { Global } from "@emotion/core";
import { globalStyles } from "./styles/global";
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import * as serviceWorker from "./serviceWorker";

console.log(process.env.REACT_APP_GRAPHQL_ENDPOINT);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  }),
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles}></Global>
      <ApolloProvider client={client}>
        <App></App>
      </ApolloProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
