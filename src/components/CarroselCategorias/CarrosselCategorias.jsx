'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/navigation';

export default function CarroselCategorias() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetch('/json/categorias.json')
      .then((res) => res.json())
      .then((data) => setCategorias(data))
      .catch((err) => console.error('Erro ao carregar categorias:', err));
  }, []);

  return (
    <>
      <div className="titulo-destaque mt-5 mb-5">
        <h1>
          Todas as <span>Categorias</span>
        </h1>
      </div>

      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
        className="swiper-categorias"
        breakpoints={{
          0: { slidesPerView: 1.8 },
          576: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          990: { slidesPerView: 3.8 },
          1024: { slidesPerView: 5 },
          1324: { slidesPerView: 5 },
        }}
      >
        {categorias.map((categoria) => (
          <SwiperSlide key={categoria.id}>
            <Link
              href={`/categorias/${categoria.id}`}
              className="genero-link text-center d-block"
            >
              <div className="genero-bolinha mx-auto">
                <img
                  src={categoria.imagem}
                  alt={categoria.nome}
                  className="genero-imagem"
                  onError={(e) => {
                    e.currentTarget.src =
                      'https://placehold.co/600x400?text=Sem+imagem';
                  }}
                />
              </div>
              <p className="mt-2">{categoria.nome}</p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
