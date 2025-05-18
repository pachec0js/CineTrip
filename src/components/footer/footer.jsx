import Link from 'next/link';
import './footer.css'; // cria ou inclua no seu global

export default function Footer() {
  return (
    <footer className="footer-cinetrip pt-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 mb-4 text-center text-md-start div-logo-footer">
            <img
              src="/logo.png"
              alt="Logo CineTrip"
              className="footer-logo mb-3"
            />
            <p className="footer-description">
              CineTrip é sua plataforma para explorar o melhor do cinema e das
              séries. Descubra, pesquise e se conecte com histórias
              inesquecíveis.
            </p>
          </div>

          <div className="col-6 col-md-2 mb-3 navigation">
            <h5 className="footer-title">Navegação</h5>
            <ul className="nav flex-column">
              <li>
                <Link href="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/categorias" className="footer-link">
                  Categorias
                </Link>
              </li>
              <li>
                <Link href="/blog" className="footer-link">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="footer-link">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/contato" className="footer-link">
                  Fale Conosco
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3 navigation">
            <h5 className="footer-title">Redes</h5>
            <ul className="nav flex-column">
              <li>
                <a href="https://www.instagram.com/" className="footer-link">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/" className="footer-link">
                  YouTube
                </a>
              </li>
              <li>
                <a href="https://discord.com/" className="footer-link">
                  Discord
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 mb-3 newsletter">
            <h5 className="footer-title text-center">Newsletter</h5>
            <p className="footer-text text-center">
              Receba atualizações sobre os melhores filmes da semana.
            </p>
            <form className="d-flex flex-column flex-sm-row gap-2">
              <input
                type="email"
                className="form-control"
                placeholder="Seu e-mail"
              />
              <button type="submit" className="btn btn-outline-warning">
                Inscrever
              </button>
            </form>
          </div>
        </div>

        <div className="border-footer mt-4 pt-3 pb-2 d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="mb-0 text-white-50">
            © 2025 CineTrip. Todos os direitos reservados.
          </p>
          <div className="d-flex gap-3 mt-2 mt-md-0">
            <a href="https://www.instagram.com/" className="footer-social">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://www.youtube.com/" className="footer-social">
              <i className="bi bi-youtube"></i>
            </a>
            <a href="https://discord.com/" className="footer-social">
              <i className="bi bi-discord"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
