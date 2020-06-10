import React, { useState }  from "react";
import { Link, NavLink } from "react-router-dom";
import { MdNotifications, MdPermIdentity } from "react-icons/md";

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
          
            <strong>Mayko Douglas</strong>
            <button onClick={handleSignOut} type="submit">
              Sair
            </button>
          
        </>
      )}
      {!logged && (
        <>
          <Link to="/signin">
            <span>
              <MdPermIdentity />
            </span>
            <strong>Entrar</strong>
          </Link>
        </>
      )}
      </Profile>
    </Container>
  );
}
