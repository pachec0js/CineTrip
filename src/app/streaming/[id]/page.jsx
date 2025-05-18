'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Card from '@/components/Card/Card';
import './streaming.css';
import Link from 'next/link';

let nomeStreaming;

export default function Streaming() {
  const params = useParams();
  const id_tmdb = Number(params.id);
  const [filmes, setFilmes] = useState([]);
  const [series, setSeries] = useState([]);
  const [contador, setContador] = useState(1);

  switch (parseInt(id_tmdb)) {
    case 8:
      nomeStreaming = 'Netflix';
      break;
    case 119:
      nomeStreaming = 'Prime Video';
      break;
    case 337:
      nomeStreaming = 'Disney+';
      break;
    case 1899:
      nomeStreaming = 'Max';
      break;
    case 307:
      nomeStreaming = 'Globoplay';
      break;
    case 350:
      nomeStreaming = 'Apple TV+';
      break;
    case 531:
      nomeStreaming = 'Paramount+';
      break;
    default:
      return invalido();
  }

  function invalido() {
    return (
      <div className="d-flex align-items-center justify-content-center px-3 invalido">
        <div className="text-center d-flex flex-column gap-3">
          <h1 className="text-warning">
            <span className="text-white">Ops...</span>
            <br />
            Streaming <span className="text-white">inválido</span>
            <br />
            por favor volte à streamings
          </h1>

          <Link href="/streaming" className="btn btn-outline-warning">
            Voltar à streamings
          </Link>
        </div>
      </div>
    );
  }

  const chave = 'de7216d4878c63a09391f1c1257f3f7b';

  const urlFilmes = `https://api.themoviedb.org/3/discover/movie?api_key=${chave}&language=pt-BR&sort_by=popularity.desc&watch_region=BR&with_watch_monetization_types=flatrate&with_watch_providers=${id_tmdb}&page=${contador}`;
  const urlSeries = `https://api.themoviedb.org/3/discover/tv?api_key=${chave}&language=pt-BR&sort_by=popularity.desc&watch_region=BR&with_watch_monetization_types=flatrate&with_watch_providers=${id_tmdb}&page=${contador}`;

  function handleClickContador() {
    if (contador < 100) {
      setContador(contador + 1);
    }
  }

  function handleClickDiminuir() {
    if (contador > 1) {
      setContador(contador - 1);
    }
  }

  var scrollTop = function () {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    fetch(urlFilmes)
      .then((res) => res.json())
      .then((data) => {
        const resultados = data.results || [];
        resultados.forEach((item) => (item.media_type = 'movie'));
        setFilmes(resultados);
      })
      .catch((err) => console.error('Erro ao carregar filmes:', err));

    fetch(urlSeries)
      .then((res) => res.json())
      .then((data) => {
        const resultados = data.results || [];
        resultados.forEach((item) => (item.media_type = 'tv'));
        setSeries(resultados);
      })
      .catch((err) => console.error('Erro ao carregar séries:', err));

    document.title = `Cine Trip | ${nomeStreaming}`;
  }, [id_tmdb, contador]);

  const resultados = filmes.concat(series);
  const resultadosEncontrados = resultados.filter(
    (item) => item.poster_path != null
  );

  return (
    <>
      <header>
        <title>Cine Trip | Streaming</title>
      </header>
      <style type="text/css">
        {`
                .item-4 {
                color: var(--amarelo) !important;
                border-bottom: 1px solid var(--amarelo);
                }
                `}
      </style>
      <div className="container container-str">
        <div className="header-str">
          <h1 className="titulo text-start mt-5">
            Top do momento em <span>{nomeStreaming}</span>
          </h1>

          <div className="contador mt-4 d-flex justify-content-start">
            <h4>Página {contador}</h4>
            <i onClick={handleClickDiminuir} className="bi bi-caret-left"></i>
            <i onClick={handleClickContador} className="bi bi-caret-right"></i>
          </div>
        </div>

        <div className="d-flex flex-wrap gap-5 justify-content-center pt-4">
          {resultadosEncontrados.map((item) => (
            <Card key={`${item.media_type}${item.id}`} item={item} />
          ))}
        </div>

        <div className="voltar-topo d-flex m-5 justify-content-center">
          <button className="btn btn-outline-warning" onClick={scrollTop}>
            voltar ao topo <i className="bi bi-arrow-bar-up ps-2"></i>
          </button>
        </div>
      </div>
    </>
  );
}
