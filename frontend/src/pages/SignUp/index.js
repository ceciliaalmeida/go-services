import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";

import { Container, Content } from "./styled";

import signupImg from "../../assets/signup.svg";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      username,
      email,
      password,
    };

    try {
      const response = await api.post("users", data);
      alert(`${response.data.username}, seu cadastro foi realizado!`);
      history.push("/");
    } catch (err) {
      alert("Erro no cadastro, tente novamente.");
    }
  }

  return (
    <>
      <Container>
        <img src={signupImg} alt="GoServices" />
        <Content>
          <h1>Cadastro</h1>

          <form onSubmit={handleRegister}>
            <input
              placeholder="Nome de usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="**********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="button" type="submit">
              Cadastrar
            </button>

            <Link className="back-link" to="/signin">
              <FiArrowLeft syze={16} color="#152850" />
              Já tem cadastro? Faça login aqui
            </Link>
          </form>
        </Content>
      </Container>
    </>
  );
}
