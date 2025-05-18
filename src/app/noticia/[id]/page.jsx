import './noticia.css';

export default async function Noticia({ params }) {
  const noticiaId = Number(params.id);

  const noticiasRes = await fetch('http://localhost:3000/json/noticias.json');
  const noticias = await noticiasRes.json();

  const resultado = noticias.find((item) => item.id === noticiaId);

  return (
    <>
      <header>
        <title>Cine Trip | Notícias</title>
      </header>
      <style>{`
                .item-3 {
                    color: var(--amarelo) !important;
                    border-bottom: 1px solid var(--amarelo);
                }
            `}</style>

      <section className="noticias">
        <div className="superior">
          <div className="title-noticia">
            <h2>{resultado.titulo}</h2>
            <p>{resultado.subtitulo}</p>
          </div>
          <div className="datas">
            <p>{resultado.autor}</p>
            <div className="line"></div>
            <p>
              {resultado.data}, às {resultado.horario}
            </p>
          </div>
        </div>

        <div className="meio">
          <div className="conjunto d-flex flex-column flex-lg-row">
            <div className="icones">
              <div className="circle">
                <i className="bi bi-reply-all"></i>
              </div>
              <div className="circle">
                <i className="bi bi-link-45deg"></i>
              </div>
              <div className="circle">
                <i className="bi bi-inbox"></i>
              </div>
            </div>
            <div className="imagem">
              <img className="bannerNoticia" src={resultado.banner} />
            </div>
          </div>
          <div className="paiLinha">
            <div className="linha"></div>
          </div>
        </div>

        <div className="container">
          <div className="corpoNoticia">
            <p style={{ whiteSpace: 'pre-line' }}>{resultado.conteudo}</p>
          </div>
        </div>
      </section>
    </>
  );
}
