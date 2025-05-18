'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function DropdownCategorias() {
  const [generos, setGeneros] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Detecta mudança de rota
  const chave = 'de7216d4878c63a09391f1c1257f3f7b';

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${chave}&language=pt-BR`
    )
      .then((res) => res.json())
      .then((data) => setGeneros(data.genres || []))
      .catch((err) => console.error('Erro ao buscar gêneros:', err));
  }, []);

  useEffect(() => {
    // Fecha o dropdown quando trocar de página
    setIsOpen(false);
  }, [pathname]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className={`nav-item dropdown ${isOpen ? 'show' : ''}`}>
      <button
        className="nav-link dropdown-toggle color-nav categ text-nowrap item-2"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
      >
        Categorias
      </button>
      <ul className={`dropdown-menu dropdown-generos ${isOpen ? 'show' : ''}`}>
        <div
          className="d-flex flex-wrap menu"
          style={{ minWidth: '400px', maxWidth: '600px' }}
        >
          <li className="col-4 mb-2">
            <Link className="dropdown-item color-nav px-2" href="/categorias">
              Geral
            </Link>
          </li>
          {generos.map((genero) => (
            <li key={genero.id} className="col-4 mb-2">
              <Link
                className="dropdown-item color-nav px-2"
                href={`/categorias/${genero.id}`}
              >
                {genero.name}
              </Link>
            </li>
          ))}
        </div>
      </ul>
    </li>
  );
}
