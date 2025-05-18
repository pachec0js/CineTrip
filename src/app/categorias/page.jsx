'use client';

import { useEffect, useState } from 'react';
import CarroselCategorias from '@/components/CarroselCategorias/CarrosselCategorias';
import CarroselCard from '@/components/CarroselCard/CarroselCard';
import './categorias.css';

export default function Categorias() {
  const [acao, setAcao] = useState([]);
  const [comedia, setComedia] = useState([]);
  const [terror, setTerror] = useState([]);
  const [ficcao, setFiccao] = useState([]);
  const [generos, setGeneros] = useState([]);

  const chave = 'de7216d4878c63a09391f1c1257f3f7b';
  const url = 'https://api.themoviedb.org/3/';

  useEffect(() => {
    // Buscar filmes
    fetch(`${url}discover/movie?api_key=${chave}&language=pt-BR&with_genres=28`)
      .then((res) => res.json())
      .then((data) => setAcao(data.results || []))
      .catch((err) => console.error('Erro ao buscar ação:', err));

    fetch(`${url}discover/movie?api_key=${chave}&language=pt-BR&with_genres=35`)
      .then((res) => res.json())
      .then((data) => setComedia(data.results || []))
      .catch((err) => console.error('Erro ao buscar comédia:', err));

    fetch(`${url}discover/movie?api_key=${chave}&language=pt-BR&with_genres=27`)
      .then((res) => res.json())
      .then((data) => setTerror(data.results || []))
      .catch((err) => console.error('Erro ao buscar terror:', err));

    fetch(
      `${url}discover/movie?api_key=${chave}&language=pt-BR&with_genres=878`
    )
      .then((res) => res.json())
      .then((data) => setFiccao(data.results || []))
      .catch((err) => console.error('Erro ao buscar ficcao:', err));

    // Buscar gêneros
    fetch(`${url}genre/movie/list?api_key=${chave}&language=pt-BR`)
      .then((res) => res.json())
      .then((data) => setGeneros(data.genres || []))
      .catch((err) => console.error('Erro ao buscar gêneros:', err));
  }, []);

  return (
    <>
      <header>
        <title>Cine Trip | Categorias</title>
      </header>
      <style type="text/css">
        {`
          .item-2 {
            color: var(--amarelo) !important;
            border-bottom: 1px solid var(--amarelo);
          }
        `}
      </style>

      <div className="container text-white">
        {/* Carrossel Ação */}
        <div className="treanding">
          <div className="titulo-destaque mt-5 mb-4">
            <h1>
              Filmes de <span>Ação</span>
            </h1>
          </div>
          <div className="carrosel-trending">
            <CarroselCard id="carrosel-acao" movies={acao} tipo="movie" />
          </div>
        </div>

        {/* Carrossel Comédia */}
        <div className="treanding">
          <div className="titulo-destaque mt-5 mb-4">
            <h1>
              Filmes de <span>Comédia</span>
            </h1>
          </div>
          <div className="carrosel-trending">
            <CarroselCard id="carrosel-comedia" movies={comedia} tipo="movie" />
          </div>
        </div>

        {/* Carrossel Terror */}
        <div className="treanding">
          <div className="titulo-destaque mt-5 mb-4">
            <h1>
              Filmes de <span>Terror</span>
            </h1>
          </div>
          <div className="carrosel-trending">
            <CarroselCard id="carrosel-terror" movies={terror} tipo="movie" />
          </div>
        </div>

        {/* Carrossel Ficção científica */}
        <div className="treanding">
          <div className="titulo-destaque mt-5 mb-4">
            <h1>
              Filmes de <span>Ficção científica</span>
            </h1>
          </div>
          <div className="carrosel-trending">
            <CarroselCard id="carrosel-ficcao" movies={ficcao} tipo="movie" />
          </div>
        </div>

        {/* Carrossel de Categorias */}
        <CarroselCategorias />
      </div>
    </>
  );
}
