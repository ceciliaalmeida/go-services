import React from 'react';
import { Link, NavLink } from "react-router-dom";

import { Container, Profile } from "./styled";
import logo from "../../assets/logo.svg";


export default function Header() {
    const profile = (state => state.user.profile);

    function handleSignOut() {
        
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
            <NavLink to="/deliverymans" activeClassName="selected">
              ENTREGADORES
            </NavLink>
            <NavLink to="/recipients" activeClassName="selected">
              DESTINATÁRIOS
            </NavLink>
            <NavLink to="/problems" activeClassName="selected">
              PROBLEMAS
            </NavLink>
          </div>
        </nav>
  
        <Profile>
          <strong>{profile.name}</strong>
          <button onClick={handleSignOut} type="submit">
            sair do sistema
          </button>
        </Profile>
      </Container>
  );
}