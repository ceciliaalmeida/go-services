import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import * as Yup from "yup";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";
import { login } from "../../services/auth";

import signinImg from "../../assets/signin.svg";
import { Container, Content } from "./styled";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Digite um e-mail válido")
    .required("O e-mail é obrigatório"),
  password: Yup.string().required("A senha é obrigatória"),
});

export default function SingIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post("/sessions", { email, password });
      login(response.data.token);

      localStorage.setItem("userEmail", response.data.email);

      history.push("/");
    } catch (err) {
      alert("Falha no login, tente novamente.");
    }
  }

  return (
    <>
      <Container>
        <img src={signinImg} alt="GoServices" />
        <Content>
          <h1>Entrar</h1>

          <form schema={schema} onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Endereço de e-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
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
