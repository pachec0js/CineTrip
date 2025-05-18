import Oscar from '@/components/Oscar/Oscar';
import Noticias from '@/components/Noticias/Noticias';
import './blog.css';

export const metadata = {
  title: 'CineTrip | Blog',
};

export default async function Blog() {
  const oscarRes = await fetch('http://localhost:3000/json/oscar.json');
  const noticiasRes = await fetch('http://localhost:3000/json/noticias.json');

  const oscarData = await oscarRes.json();
  const noticiasData = await noticiasRes.json();

  return (
    <>
      <style>{`
                .item-3 {
                    color: var(--amarelo) !important;
                    border-bottom: 1px solid var(--amarelo);
                }
            `}</style>

      <section className="design container-geral" id="design">
        <div className="container-geral">
          <div className="designtitle">
            <div className="premio">
              <h2>O Blog</h2>
              <img className="trofeu" src="/noticias/trofeuOscar.png" />
              <h2>ndica</h2>
            </div>
            <div className="subtitulo">
              <p>os 9 últimos ganhadores do prêmio oscar de melhor filme</p>
            </div>
          </div>
          <div className="design-content">
            {oscarData.map((item, index) => (
              <div key={index} className="galeria">
                <Oscar item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="blog" id="blog">
        <div className="container-geral">
          <div className="title1">
            <h2>Tudo sobre cinema</h2>
            <p>
              fique por dentro das últimas noticias do mundo cinematográfico
            </p>
          </div>
          <div className="blog-content">
            {noticiasData.map((noticia, index) => (
              <div key={index} className="noticias">
                <Noticias noticia={noticia} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
