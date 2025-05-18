'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Busca() {
  const [valorBuscado, setValorBuscado] = useState('');
  const router = useRouter();

  function buscar() {
    router.push('/busca?valorBuscado=' + encodeURIComponent(valorBuscado));
  }

  return (
    <>
      <div className="d-flex form-search ms-3 me-4">
        <div className="input-group">
          <input
            className="form-control search ps-3"
            type="text"
            placeholder="Busque um título de filme ou série"
            aria-label="Search"
            value={valorBuscado}
            onChange={(e) => {
              setValorBuscado(e.target.value);
            }}
            onKeyDown={(e) => e.key === 'Enter' && buscar()}
          />
          <button
            className="input-group-text btn-search"
            type="button"
            id="inputGroup-sizing-default"
            onClick={buscar}
          >
            <i className="bi bi-search"></i>
          </button>
        </div>
      </div>
    </>
  );
}
