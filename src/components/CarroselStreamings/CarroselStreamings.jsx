'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/navigation';
import './CarrosselStreamings.css';

export default function CarroselCategorias() {
  const [streaming, setstreaming] = useState([]);

  useEffect(() => {
    fetch('/json/streaming.json')
      .then((res) => res.json())
      .then((data) => setstreaming(data))
      .catch((err) =>
        console.error('Erro ao carregar os dados do Carrosel:', err)
      );
  }, []);

  return (
    <>
      <div className="titulo-destaque mt-5 mb-5">
        <h1>
          Streamings mais <span>famosos</span>
        </h1>
      </div>

      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
        className="swiper-categorias"
        breakpoints={{
          0: { slidesPerView: 1 },
          280: { slidesPerView: 1.4 },
          347: { slidesPerView: 1.8 },
          396: { slidesPerView: 2 },
          500: { slidesPerView: 2.4 },
          768: { slidesPerView: 3 },
          992: { slidesPerView: 4 },
          1146: { slidesPerView: 4.9 },
          1246: { slidesPerView: 5.4 },
        }}
      >
        {streaming.map((item) => (
          <SwiperSlide key={item.id}>
            <Link href={`${item.rota}`}>
              <img className="streamings-logo" src={item.imagem} alt="logo" />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
