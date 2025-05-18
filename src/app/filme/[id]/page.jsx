import './style.css';

export async function generateMetadata({ params }) {
  const filmeId = params.id;
  const chave = 'de7216d4878c63a09391f1c1257f3f7b';
  const resposta = await fetch(
    `https://api.themoviedb.org/3/movie/${filmeId}?api_key=${chave}&language=pt-BR`
  );
  const filme = await resposta.json();
  return { title: `Cine Trip | ${filme.title}` };
}

export default async function Filme({ params }) {
  const filmeId = params.id;
  const chave = 'de7216d4878c63a09391f1c1257f3f7b';

  const resposta = await fetch(
    `https://api.themoviedb.org/3/movie/${filmeId}?api_key=${chave}&language=pt-BR&append_to_response=credits,videos,watch/providers`
  );
  const filme = await resposta.json();

  const trailer =
    filme.videos &&
    filme.videos.results.find(
      (video) => video.type === 'Trailer' && video.site === 'YouTube'
    );
  const diretor =
    filme.credits &&
    filme.credits.crew.find((pessoa) => pessoa.job === 'Director');
  const elenco = filme.credits && filme.credits.cast.slice(0, 5);

  return (
    <>
      <header>
        <title>Cine Trip | {filme.title}</title>
      </header>
      <div
        className="backdrop"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${filme.backdrop_path})`,
        }}
      >
        <div className="content-main d-flex flex-column flex-md-row align-items-center justify-content-center p-3 gap-5">
          <img
            className="poster"
            src={`https://image.tmdb.org/t/p/original${filme.poster_path}`}
          />
          <div className="info">
            <h1>
              {filme.title} ({new Date(filme.release_date).getFullYear()})
            </h1>
            <div className="paragarafos">
              <p className="pb-0">
                <i className="bi bi-star"></i> {filme.vote_average.toFixed(1)}
              </p>
              <p>
                <i className="bi bi-cassette"></i>{' '}
                {filme.genres.map((generos) => generos.name).join(', ')}
              </p>
              <p>
                <i className="bi bi-stopwatch"></i> {filme.runtime} min
              </p>
              <p>
                <i className="bi bi-calendar-event"></i> Lançamento:{' '}
                {filme.release_date}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="content-sec container mt-4">
        <div className="row justify-content-center gap-4">
          <div className="caixa-1 col-12 col-lg-6 d-flex flex-column gap-4">
            <div className="d-flex flex-wrap gap-5">
              <div className="sinopse">
                <h2>Sinopse</h2>
                {filme.overview ? (
                  <p>{filme.overview}</p>
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
                      {filme.title} (
                      {new Date(filme.release_date).getFullYear()})
                    </h1>
                  </div>
                  <div className="modal-body d-flex justify-content-center">
                    <iframe
                      width="100%"
                      height="400"
                      src={`https://www.youtube.com/embed/${
                        trailer ? trailer.key : ''
                      }`}
                      title="Trailer"
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
                {filme.original_language.toUpperCase()}
              </li>
              <li>
                <span>Orçamento:</span>{' '}
                {filme.budget
                  ? `$ ${filme.budget.toLocaleString()}`
                  : 'Não informado'}
              </li>
              <li>
                <span>Receita:</span>{' '}
                {filme.revenue
                  ? `$ ${filme.revenue.toLocaleString()}`
                  : 'Não informado'}
              </li>
              <li>
                <span>Classificação:</span> {filme.adult ? '+18' : 'Livre'}
              </li>
              <li>
                <span>Diretor:</span> {diretor ? diretor.name : 'Não informado'}
              </li>
            </ul>

            <div className="trailer">
              <h2 className="pb-2">Trailer</h2>
              {trailer ? (
                <>
                  <p className="mt-2">{filme.title}</p>
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
    </>
  );
}
