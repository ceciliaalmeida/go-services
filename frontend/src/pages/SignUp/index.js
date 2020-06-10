import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";

import { Container, Content } from "./styled";

import signupImg from "../../assets/signup.svg";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf,
    };

    try {
      const response = await api.post("ongs", data);

      alert(`Seu ID de acesso: ${response.data.id}`);

      history.push("/");
    } catch (err) {
      alert("Erro no cadastro, tente novamente.");
    }
  }

  return (
    <>
      <Container>
        <img src={signupImg} alt="Finances" />
        <Content>
          <h1>Cadastro</h1>

          <form onSubmit={handleRegister}>
            <span>Escolha um nome de usuário</span>
            <input
              placeholder="Nome de usuário"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <span>Digite seu email</span>
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span>Digite sua senha</span>
            <input
              placeholder="**********"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
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
