import React, { useState, useEffect, useMemo } from 'react';
import { FiArrowLeft } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import { Container, Content } from "./styled";
import axios from 'axios';

import api from '../../services/api';

import camera from '../../assets/camera.svg';
import addServiceImg from '../../assets/add_service.svg';

export default function CreateService() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
  });

  const [thumbnail, setThumbnail] = useState(null);
  const [ufs, setUfs] = useState([]);
  const [cities, setCities] = useState([]);

  const [selectedCity, setSelectedCity] = useState('0');
  const [selectedUf, setSelectedUf] = useState('0');

  const history = useHistory();

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail])

  async function handleCreateService(e) {
    e.preventDefault();

    const { title, description, price } = formData;
    const uf = selectedUf;
    const city = selectedCity;

    const data = new FormData();

    data.append('thumbnail', thumbnail);
    data.append('title', title);
    data.append('description', description);
    data.append('price', price);
    data.append('uf', uf);
    data.append('city', city);

    await api.post('/services', data);

    alert('Serviço criado!');

    history.push('/');
  }

  useEffect(() => {
    axios
      .get(
        'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
      )
      .then((response) => {
        const ufInitials = response.data.map((uf) => uf.sigla);
        setUfs(ufInitials);
      });
  }, []);

  useEffect(() => {
    if (selectedUf === '0') {
      return;
    }
    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`
      )
      .then((response) => {
        const cityNames = response.data.map((city) => city.nome);
        setCities(cityNames);
      });
  }, [selectedUf]);

  function handleSelectUf(e) {
    e.preventDefault();
    const uf = e.target.value;
    setSelectedUf(uf);
  }

  function handleSelectCity(e) {
    const city = e.target.value;
    setSelectedCity(city);
  }

  function handleInputChange(e) {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  }

  return (
    <Container>
      <img src={addServiceImg} alt="GoServices" />
      <Content>
      <h1>Crie seu serviço!</h1>
         <form onSubmit={handleCreateService}>
          <input
            placeholder="Título do serviço"
            type="text"
            name="title"
            id="title"
            onChange={handleInputChange}
          />

          <input
            placeholder="Descrição"
            type="text"
            name="description"
            id="description"
            onChange={handleInputChange}
          />

          <input
            placeholder="Valor do serviço"
            type="text"
            name="price"
            id="price"
            onChange={handleInputChange}
          />

          <select
            name="uf"
            id="uf"
            value={selectedUf}
            onChange={handleSelectUf}
          >
            <option value="0">Selecione uma UF</option>
            {ufs.map((uf) =>
              <option key={uf} value={uf}>{uf}</option>
            )}
          </select>

          <select
            name="city"
            id="city"
            value={selectedCity}
            onChange={handleSelectCity}
          >
            <option value="0">Selecione uma cidade</option>

            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>

          <button className="button" type="submit">Adicionar</button>

        </form>
      </Content>
    </Container>
  );
}
