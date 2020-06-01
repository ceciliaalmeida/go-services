import React from "react";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { Router, BrowserRouter } from "react-router-dom";

import Routes from "./routes";
import history from "./services/history";

import GlobalStyle from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={4000} toastClassName="foo" />
      </Router>
    </BrowserRouter>
  );
}

export default App;
