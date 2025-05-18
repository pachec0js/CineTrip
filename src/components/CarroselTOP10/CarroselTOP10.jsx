'use client';

import Card from '@/components/Card/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './CarroselTOP10.css';

export default function Carrosel({ movies = [], tipo }) {
  return (
    <>
      <style>
        {`.movie-card:hover {
            transform: translateY(0px);
            filter: brightness(80%);
            transition: .5s;
          }`}
      </style>

      <div className="container-fluid px-0">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={0}
          loop={false}
          breakpoints={{
            0: { slidesPerView: 1.3, spaceBetween: 12 },
            330: { slidesPerView: 1.6, spaceBetween: 14 },
            480: { slidesPerView: 1.8, spaceBetween: 14 },
            768: { slidesPerView: 3, spaceBetween: 16 },
            1024: { slidesPerView: 4.5, spaceBetween: 16 },
            1280: { slidesPerView: 5.1, spaceBetween: 18 },
            1536: { slidesPerView: 6, spaceBetween: 20 },
            1800: { slidesPerView: 7, spaceBetween: 20 },
          }}
        >
          {movies.slice(0, 10).map((item, index) => (
            <SwiperSlide key={item.id} className="slide-ajustado">
              <div className="top10-wrapper">
                <div className="numero-top10-wrapper">
                  <img
                    src={`/numeros/num${index + 1}.png`}
                    alt={`Top ${index + 1}`}
                    className="numero-top10"
                  />
                </div>
                <Card item={item} tipo={tipo} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
