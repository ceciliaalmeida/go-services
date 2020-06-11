import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import { Container, Content } from "./styled";


export default function Services() {
const [services, setServices] = useState([]);

useEffect(() => {
  api.get('services').then(response => {
    setServices(response.data)
  })
}, []);

return(
  <Container>

  <Content>
  <h1>Serviços Cadastrados</h1>
  <ul>

  {services.map(service =>(
    <li key={service.id}>
      <strong>Serviços</strong>
      <p>{service.title}</p>

      <strong>Descrição</strong>
      <p>{service.description}</p>

      <strong>Valor</strong>
      <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(service.price)}</p>

      <strong>Cidade</strong>
      <p>{service.city}</p>

      <strong>Seu Estado (UF)</strong>
      <p>{service.uf}</p>
      </li>
    ))}
  </ul>
  </Content>
  </Container>
  );
}
