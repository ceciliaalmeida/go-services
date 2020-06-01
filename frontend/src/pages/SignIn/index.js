import React from "react";
import { useSelector } from "react-redux";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";

import logo from "../../assets/logo.svg";

import Spinner from "../../components/Spinner";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Digite um e-mail válido")
    .required("O e-mail é obrigatório"),
  password: Yup.string().required("A senha é obrigatória")
});

export default function SingIn() {
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <label htmlFor="email">SEU E-MAIL</label>
        <Input name="email" type="email" placeholder="example@email.com" />

        <label htmlFor="password">SUA SENHA</label>
        <Input name="password" type="password" placeholder="**********" />

        <button type="submit">
          {loading ? <Spinner /> : "Entrar no sistema"}
        </button>
      </Form>
    </>
  );
}
