import './nav.css';
import Link from 'next/link';
import Busca from '@/components/Busca/busca';
import DropdownCategorias from '@/components/DropdownCategorias/DropdownCategorias';

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg pt-2 px-1">
      <div className="container">
        <Link className="navbar-brand me-3" href="/">
          <img src="/logo.png" alt="Logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="w-100 w-lg-50 pt-3 pt-lg-0 mb-2 mb-lg-0">
            <Busca />
          </div>

          <ul className="navbar-nav w-100 d-flex flex-column flex-lg-row align-items-start align-items-lg-center gap-0 gap-lg-2 position-relative">
            <li className="nav-item">
              <Link className="nav-link color-nav text-nowrap item-1" href="/">
                Home
              </Link>
            </li>

            <DropdownCategorias />

            <li className="nav-item">
              <Link
                className="nav-link color-nav text-nowrap item-3"
                href="/blog"
              >
                Blog de Cinema
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link color-nav text-nowrap item-4"
                href="/streaming"
              >
                Nos Streamings
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link color-nav text-nowrap item-5"
                href="/contato"
              >
                Fale Conosco
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
