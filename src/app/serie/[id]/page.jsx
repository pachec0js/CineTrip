import './style.css';

export async function generateMetadata({ params }) {
  const serieId = params.id;
  const chave = 'de7216d4878c63a09391f1c1257f3f7b';
  const resposta = await fetch(
    `https://api.themoviedb.org/3/tv/${serieId}?api_key=${chave}&language=pt-BR`
  );
  const serie = await resposta.json();
  return { title: `Cine Trip | ${serie.name}` };
}

export default async function Serie({ params }) {
  const serieId = params.id;
  const chave = 'de7216d4878c63a09391f1c1257f3f7b';

  const resposta = await fetch(
    `https://api.themoviedb.org/3/tv/${serieId}?api_key=${chave}&language=pt-BR&append_to_response=credits,videos`
  );
  const serie = await resposta.json();

  const trailer =
    serie.videos &&
    serie.videos.results.find(
      (video) => video.type === 'Trailer' && video.site === 'YouTube'
    );
  const elenco = serie.credits && serie.credits.cast.slice(0, 5);

  const statusTraduzido = {
    'Returning Series': 'Em exibição',
    Ended: 'Finalizada',
    Canceled: 'Cancelada',
    'In Production': 'Em produção',
    Planned: 'Planejada',
    Pilot: 'Episódio piloto',
  };

  return (
    <>
      <div
        className="backdrop"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${serie.backdrop_path})`,
        }}
      >
        <div className="content-main d-flex flex-column flex-md-row align-items-center justify-content-center p-3 gap-5">
          <img
            className="poster"
            src={`https://image.tmdb.org/t/p/original${serie.poster_path}`}
          />
          <div className="info">
            <h1>
              {serie.name} ({new Date(serie.first_air_date).getFullYear()})
            </h1>
            <div className="paragarafos">
              <p className="pb-0">
                <i className="bi bi-star"></i> {serie.vote_average.toFixed(1)}
              </p>
              <p>
                <i className="bi bi-cassette"></i>{' '}
                {serie.genres.map((generos) => generos.name).join(', ')}
              </p>
              <p>
                <i className="bi bi-projector"></i> {serie.number_of_seasons}{' '}
                Temporadas
              </p>
              <p>
                <i className="bi bi-calendar-event"></i> Estreia:{' '}
                {serie.first_air_date}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="content-sec container mt-4">
        <div className="content-sec container mt-4">
          <div className="row justify-content-center gap-4">
            <div className="caixa-1 col-12 col-lg-6 d-flex flex-column gap-4">
              <div className="d-flex flex-wrap gap-5">
                <div className="sinopse">
                  <h2>Sinopse</h2>
                  {serie.overview ? (
                    <p>{serie.overview}</p>
                  ) : (
                    <p>
                      Sinopse <span>não disponível</span> desculpe
                    </p>
                  )}
                </div>
              </div>

              <div className="elenco">
                <h2>Elenco Principal</h2>
                {elenco.length > 0 ? (
                  <div className="l">
                    {elenco.map((ator) => (
                      <li key={ator.id}>
                        {ator.name} como <span>{ator.character}</span>
                        <br />
                      </li>
                    ))}
                  </div>
                ) : (
                  <p>
                    Elenco <span>não disponível</span>, desculpe
                  </p>
                )}
              </div>

              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        {serie.name} (
                        {new Date(serie.first_air_date).getFullYear()})
                      </h1>
                    </div>
                    <div className="modal-body d-flex justify-content-center">
                      <iframe
                        width="100%"
                        height="400"
                        src={`https://www.youtube.com/embed/${trailer?.key}`}
                        title="Trailer"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-outline-warning w-100"
                        data-bs-dismiss="modal"
                      >
                        Fechar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="caixa-2 col-12 col-lg-5 card-infos-rapidas">
              <h2 className="info-rapida">Informações Rápidas</h2>
              <ul className="list-unstyled mt-1 d-flex flex-column gap-1">
                <li>
                  <span>Idioma Original:</span>{' '}
                  {serie.original_language.toUpperCase()}
                </li>
                <li>
                  <span>Status:</span> {statusTraduzido[serie.status]}
                </li>
                <li>
                  <span>Episódios:</span> {serie.number_of_episodes}
                </li>
                <li>
                  <span>Classificação:</span> {serie.adult ? '+18' : 'Livre'}
                </li>
                <li>
                  <span>Criador(es):</span>{' '}
                  {serie.created_by
                    ?.map((criador) => criador.name)
                    .join(', ') || 'Não informado'}
                </li>
              </ul>
              <div className="trailer">
                <h2 className="pb-2">Trailer</h2>
                {trailer ? (
                  <>
                    <p className="mt-2">{serie.name}</p>
                    <button
                      type="button"
                      className="btn btn-outline-warning"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Ver Trailer
                    </button>
                  </>
                ) : (
                  <p>
                    Trailer <span>não disponível</span>, desculpe
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
