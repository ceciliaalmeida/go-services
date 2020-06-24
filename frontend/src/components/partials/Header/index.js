import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Container, Profile } from "./styled";
import logo from "../../../assets/logo.svg";
import { isAuthenticated, logout } from "../../../services/auth";

export default function Header() {
  let logged = isAuthenticated();

  function handleSignOut() {
    logout();
    window.location.href = "/";
  }

  return (
    <Container>
      <nav>
        <Link to="/">
          <img src={logo} alt="GoServices" />
        </Link>
        <div>
          <NavLink to="/services" activeClassName="selected">
            SERVIÇOS
          </NavLink>
        </div>
      </nav>
      <Profile>
        {logged && (
          <>
            <strong>Olá, Mayko</strong>
            <button onClick={handleSignOut} type="submit">
              Sair
            </button>
          </>
        )}
        {!logged && (
          <>
            <div>
              <NavLink to="/signin" activeClassName="selected">
                Entrar
          </NavLink>
            </div>
          </>
        )}
      </Profile>
    </Container>
  );
}
