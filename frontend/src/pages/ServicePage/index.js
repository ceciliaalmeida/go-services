import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import * as Yup from "yup";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";
import { login } from "../../services/auth";

import { Container, Content } from "./styled";

export default function SingIn() {

  const [serviceInfo, setServiceInfo] = useState({});


  return (
    <>
      <Container>
        <Content>
          <h1>Entrar</h1>

          <form >
            <input
              type="email"
              placeholder="Endereço de e-mail"
            />
            <input
              type="password"
              placeholder="Senha"
              
            />

            <button className="button" type="submit">
              Entrar
            </button>

            <Link className="back-link" to="/signup">
              <FiArrowLeft syze={16} color="#152850" />
              Não tenho cadastro
            </Link>
          </form>
        </Content>
      </Container>
    </>
  );
}
