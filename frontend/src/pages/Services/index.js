import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiTrash2, FiEdit } from 'react-icons/fi';

import api from '../../services/api';

import { Container, ContentRight, ContentLeft } from "./styled";

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    api.get('services').then(response => {
      setServices(response.data)
    })
  }, []);

  async function handleDeleteService(id) {
    try {
      await api.delete(`services/${id}`);

      setServices(services.filter(service => service.id !== id));
    } catch (err) {
      alert('Erro ao deletar serviço, tente novamente.');
    }
  }

  return (
    <Container>

      <ContentLeft>
        <strong>Filtre sua pesquisa</strong>

        <select>
          <option>Selecione UF</option>
            <option>SE</option>
        </select>
      </ContentLeft>

      <ContentRight>

        <h1>Serviços Cadastrados</h1>
        <>
    
        <ul>
          {services.map(service => (
            
            <li key={service.id}>
              <Link to={`/services/${service.id}`}>
              <strong>Serviço:</strong>
              <p>{service.title}</p>

              <strong>Descrição</strong>
              <p>{service.description}</p>

              <strong>Valor</strong>
              <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(service.price)}</p>

              <strong>Cidade</strong>
              <p>{service.city}</p>

              <strong>UF</strong>
              <p>{service.uf}</p>
              </Link>
              <button onClick={() => handleDeleteService(service.id)} type="button">
                <FiTrash2 size={20} color="#152850" />
              </button>

            </li>
            
          ))}
        </ul>
            </>

      </ContentRight>
    </Container>
  );
}
