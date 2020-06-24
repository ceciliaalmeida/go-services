import React from "react";
import { ToastContainer } from "react-toastify";
import { Router } from "react-router-dom";

import Routes from "./routes";
import history from "./services/history";

import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";

import GlobalStyle from "./styles/global";

function App() {
  return (
        <Router history={history}>
          <Header />
          <Routes />
          <Footer />
          <GlobalStyle />
        </Router>
  );
}

export default App;