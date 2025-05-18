'use client';

import { useEffect, useState } from 'react';
import Carrosel from '@/components/Carrosel/Carrossel';
import CarroselCard from '@/components/CarroselCard/CarroselCard';
import CarroselStr from '@/components/CarroselStreamings/CarroselStreamings';
import './index.css';

export default function Home() {
  const [cabecalho, setCabecalho] = useState([]);
  const [emAlta, setEmAlta] = useState([]);
  const [populares, setPopulares] = useState([]);
  const [cartaz, setCartaz] = useState([]);
  const [avaliados, setAvaliados] = useState([]);

  const chave = 'de7216d4878c63a09391f1c1257f3f7b';
  const url = 'https://api.themoviedb.org/3/';

  useEffect(() => {
    fetch('/json/carrosel.json')
      .then((res) => res.json())
      .then((data) => setCabecalho(data))
      .catch((err) =>
        console.error('Erro ao carregar os dados do Carrosel:', err)
      );

    //LER OS MAIS FALADOS
    fetch(`${url}trending/movie/week?api_key=${chave}&language=pt-BR`)
      .then((response) => response.json())
      .then((data) => setEmAlta(data.results || []))
      .catch((error) => console.error('Erro:', error));

    // LER OS MAIS POPULARES do streaming
    fetch(
      `${url}discover/movie?api_key=${chave}&language=pt-BR&sort_by=popularity.desc&watch_region=BR&with_watch_monetization_types=flatrate`
    )
      .then((response) => response.json())
      .then((data) => setPopulares(data.results || []))
      .catch((error) => console.error('Erro:', error));

    //LER NOS CINEMAS
    fetch(`${url}movie/now_playing?api_key=${chave}&language=pt-BR`)
      .then((response) => response.json())
      .then((data) => setCartaz(data.results || []))
      .catch((error) => console.error('Erro:', error));

    // LER OS MAIS BEM AVALIADOS
    fetch(`${url}trending/tv/week?api_key=${chave}&language=pt-BR&region=BR`)
      .then((response) => response.json())
      .then((data) => setAvaliados(data.results || []))
      .catch((error) => console.error('Erro:', error));
  }, []);

  return (
    <>
      <header>
        <title>Cine Club | Home</title>
      </header>
      <style>
        {`.item-1 {
          color: var(--amarelo) !important;
          border-bottom: 1px solid var(--amarelo);
        }`}
      </style>

      <Carrosel movies={cabecalho} />

      <div className="container">
        <div className="treanding">
          <div className="titulo-destaque mt-5 mb-5">
            <h1>
              Top trending da <span>semana</span>
            </h1>
          </div>
          <div className="carrosel-trending">
            <CarroselCard id="carrosel-alta" movies={emAlta} tipo="movie" />
          </div>
        </div>

        <div className="treanding">
          <div className="titulo-destaque mt-5 mb-5">
            <h1>
              Os mais populares dos <span>streamings</span>
            </h1>
          </div>
          <div className="carrosel-trending">
            <CarroselCard
              id="carrosel-populares"
              movies={populares}
              tipo="movie"
            />
          </div>
        </div>

        <div className="treanding">
          <div className="titulo-destaque mt-5 mb-5">
            <h1>
              Em <span>cartaz</span>
            </h1>
          </div>
          <div className="carrosel-trending">
            <CarroselCard id="carrosel-cartaz" movies={cartaz} tipo="movie" />
          </div>
        </div>

        <div className="treanding">
          <div className="titulo-destaque mt-5 mb-5">
            <h1>
              Top trending de series da <span>semana</span>
            </h1>
          </div>
          <div className="carrosel-trending">
            <CarroselCard id="carrosel-avalados" movies={avaliados} tipo="tv" />
          </div>
        </div>

        <div className="streamings-home mb-4">
          <CarroselStr />
        </div>
      </div>
    </>
  );
}
