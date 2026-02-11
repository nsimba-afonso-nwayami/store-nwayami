import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import HeroImg1 from "../../assets/img/hero1.jpg";
import HeroImg2 from "../../assets/img/hero2.jpg";
import HeroImg3 from "../../assets/img/hero3.png";
import HeroImg4 from "../../assets/img/hero4.png";
import HeroImg5 from "../../assets/img/hero5.jpg";

export default function Hero() {
  return (
    <section className="relative w-full h-[95vh] pt-[160px}">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="h-full relative"
      >
        {/* Slide 1 — Eletrodomésticos */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={HeroImg1}
              alt="Eletrodomésticos"
              className="w-full h-full object-cover brightness-75"
            />
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-10 z-10">
              <h1 className="text-4xl md:text-6xl font-extrabold text-neutral-50 uppercase tracking-wider mb-4">
                Eletrodomésticos de Qualidade
              </h1>
              <p className="text-neutral-400 text-lg md:text-xl mb-6 max-w-2xl">
                Encontre os melhores eletrodomésticos para sua casa.
              </p>
              <Link
                to="/produtos/eletrodomesticos"
                className="bg-orange-500 text-neutral-50 px-6 py-3 rounded-lg font-bold uppercase hover:bg-orange-600 transition"
              >
                Ver Produtos
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 — Energia */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={HeroImg2}
              alt="Energia"
              className="w-full h-full object-cover brightness-75"
            />
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-10 z-10">
              <h1 className="text-4xl md:text-6xl font-extrabold text-neutral-50 uppercase tracking-wider mb-4">
                Soluções em Energia
              </h1>
              <p className="text-neutral-400 text-lg md:text-xl mb-6 max-w-2xl">
                Painéis solares, baterias e equipamentos elétricos confiáveis.
              </p>
              <Link
                to="/produtos/energia"
                className="bg-orange-500 text-neutral-50 px-6 py-3 rounded-lg font-bold uppercase hover:bg-orange-600 transition"
              >
                Ver Produtos
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 — Imagem & Som */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={HeroImg3}
              alt="Imagem e Som"
              className="w-full h-full object-cover brightness-75"
            />
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-10 z-10">
              <h1 className="text-4xl md:text-6xl font-extrabold text-neutral-50 uppercase tracking-wider mb-4">
                Imagem & Som
              </h1>
              <p className="text-neutral-400 text-lg md:text-xl mb-6 max-w-2xl">
                TVs, sistemas de som e equipamentos para entretenimento.
              </p>
              <Link
                to="/produtos/imagem-e-som"
                className="bg-orange-500 text-neutral-50 px-6 py-3 rounded-lg font-bold uppercase hover:bg-orange-600 transition"
              >
                Ver Produtos
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 — Impressão */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={HeroImg4}
              alt="Impressão"
              className="w-full h-full object-cover brightness-75"
            />
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-10 z-10">
              <h1 className="text-4xl md:text-6xl font-extrabold text-neutral-50 uppercase tracking-wider mb-4">
                Impressão Profissional
              </h1>
              <p className="text-neutral-400 text-lg md:text-xl mb-6 max-w-2xl">
                Impressoras, suprimentos e soluções para escritórios e empresas.
              </p>
              <Link
                to="/produtos/impressao"
                className="bg-orange-500 text-neutral-50 px-6 py-3 rounded-lg font-bold uppercase hover:bg-orange-600 transition"
              >
                Ver Produtos
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 5 — Informática */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={HeroImg5}
              alt="Informática"
              className="w-full h-full object-cover brightness-75"
            />
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-10 z-10">
              <h1 className="text-4xl md:text-6xl font-extrabold text-neutral-50 uppercase tracking-wider mb-4">
                Informática & Periféricos
              </h1>
              <p className="text-neutral-400 text-lg md:text-xl mb-6 max-w-2xl">
                Computadores, notebooks, acessórios e componentes de qualidade.
              </p>
              <Link
                to="/produtos/informatica"
                className="bg-orange-500 text-neutral-50 px-6 py-3 rounded-lg font-bold uppercase hover:bg-orange-600 transition"
              >
                Ver Produtos
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
