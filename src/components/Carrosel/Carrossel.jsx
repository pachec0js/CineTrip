import './Carrossel.css';
import Link from 'next/link';

export default function MovieCarousel({ movies }) {
  const desktop = movies.desktop || [];
  const mobile = movies.mobile || [];

  return (
    <>
      <div className="d-none d-md-flex">
        <div
          id="carouselExampleCaptionsDesktop"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="3000"
        >
          <div className="carousel-inner">
            {desktop.map((movie, index) => (
              <div
                className={`carousel-item ${index === 0 ? 'active' : ''}`}
                key={index}
              >
                <img
                  src={movie.image}
                  className="d-block w-100"
                  alt={movie.title}
                />
                <div className="carousel-caption d-none d-md-flex flex-column align-items-start ps-0 mb-4 ms-4 row-gap-2">
                  <h1>{movie.title}</h1>
                  <p>{movie.overview}</p>
                  <Link
                    href={movie.link}
                    className="btn btn-outline-warning w-25"
                  >
                    Ver Mais
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptionsDesktop"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Anterior</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptionsDesktop"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Próximo</span>
          </button>
        </div>
      </div>

      {/* Carrossel para mobile */}
      <div className="d-flex d-md-none">
        <div
          id="carouselExampleCaptionsMobile"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="3000"
        >
          <div className="carousel-inner">
            {mobile.map((movie, index) => (
              <div
                className={`carousel-item ${index === 0 ? 'active' : ''}`}
                key={index}
              >
                <Link href={movie.link}>
                  <div className="d-block w-100">
                    <img
                      src={movie.image}
                      className="d-block w-100"
                      alt={`Mobile ${movie.title}`}
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptionsMobile"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Anterior</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptionsMobile"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Próximo</span>
          </button>
        </div>
      </div>
    </>
  );
}
