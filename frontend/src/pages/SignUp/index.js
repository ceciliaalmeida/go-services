import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";

import { Container, Content } from "./styled";

import logoImg from "../../assets/logo.svg";

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
        <img src={logoImg} alt="Finances" />
        <Content>
          <h1>Cadastro</h1>

          <form onSubmit={handleRegister}>
            <input
              placeholder="Nome Completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              placeholder="Telefone"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
            />
            
            <button className="button" type="submit">
              Cadastrar
            </button>

            <Link className="back-link" to="/">
            <FiArrowLeft syze={16} color="#5636d3" />
            Não tenho cadastro
          </Link>
          </form>
        </Content>
      </Container>
    </>
  );
}
