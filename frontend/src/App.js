import React from "react";
import { ToastContainer } from "react-toastify";
import { Router } from "react-router-dom";

import Routes from "./routes";
import history from "./services/history";

import Header from "./components/partials/Header"

import GlobalStyle from "./styles/global";

function App() {
  return (
        <Router history={history}>
          <Header />
          <Routes />
          <GlobalStyle />
          <ToastContainer autoClose={4000} toastClassName="foo" />
        </Router>
  );
}

export default App;