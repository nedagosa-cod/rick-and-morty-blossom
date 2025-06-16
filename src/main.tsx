import React from "react";
import "./App.css";
import App from "./App.tsx";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./apolloClient.tsx";
import { GlobalProvider } from "./context/GlobalPrivider.tsx";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalProvider>
      <BrowserRouter>
        <ApolloProvider client={apolloClient}>
          <App />
        </ApolloProvider>
      </BrowserRouter>
    </GlobalProvider>
  </React.StrictMode>
);
