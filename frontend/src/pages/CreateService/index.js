import React, { useState } from 'react';
import { FiArrowLeft } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";

import { Container, Content } from "./styled";
import api from '../../services/api';
import addServiceImg from '../../assets/add_service.svg';

export default function CreateService() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');
    
    const history = useHistory();

   async function handleCreateService(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            price,
            city,
            uf
        };

        try {
            await api.post('services', data, {
            })

            history.push('/');
        } catch (err) {
            alert('Erro ao cadastrar o serviço, tente novamente')
            
        }
    }

  return (
    <Container>
      <Content>

        <section>
        <h1>Adicione seu serviço</h1>
          <Link className="back-link" to="/">
            <FiArrowLeft syze={16} color="#152850" />
            Voltar para home
            </Link>

          <img src={addServiceImg} alt="GoServices" />
         
        </section>

        <form onSubmit={handleCreateService}>
          <input
            placeholder="Título do serviço"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />

          <input
          placeholder="Valor do serviço"
          value={price}
          onChange={e => setPrice(e.target.value)}
          />

          <input
          placeholder="Sua Cidade"
          value={city}
          onChange={e => setCity(e.target.value)}
          />
          
          <input
          placeholder="Seu Estado (UF)"
          value={uf}
          onChange={e => setUf(e.target.value)}
          />

          <button type="submit">Adicionar</button>

        </form>
      </Content>
    </Container>
  );
}
