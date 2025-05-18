import Link from 'next/link';
export default function Noticias({ noticia }) {
  return (
    <>
      <div className="blog-item">
        <div className="blog-img">
          <img src={noticia.imagem} alt="" />
        </div>
        <div className="blog-text">
          <span>
            {noticia.data} às {noticia.horario}
          </span>
          <h2>{noticia.titulo}</h2>
          <p>{noticia.descricao}</p>
          <Link href={`noticia/${noticia.id}`}>Ler Mais</Link>
        </div>
      </div>
    </>
  );
}
