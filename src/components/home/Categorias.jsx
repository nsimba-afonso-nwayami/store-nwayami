import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Categorias() {
  const categorias = [
    { name: "Eletrônicos", iconClass: "fa-solid fa-tv" },
    { name: "Notebooks", iconClass: "fa-solid fa-laptop" },
    { name: "Energia Solar", iconClass: "fa-solid fa-solar-panel" },
    { name: "Celulares", iconClass: "fa-solid fa-mobile-screen" },
    { name: "Móveis", iconClass: "fa-solid fa-couch" },
    { name: "Áudio", iconClass: "fa-solid fa-headphones" },
    { name: "Eletrodomésticos", iconClass: "fa-solid fa-blender" },
    { name: "Câmeras", iconClass: "fa-solid fa-camera" },
    { name: "Relógios", iconClass: "fa-solid fa-clock" },
    { name: "Brinquedos", iconClass: "fa-solid fa-puzzle-piece" },
    { name: "Iluminação", iconClass: "fa-solid fa-lightbulb" },
    { name: "Ferramentas", iconClass: "fa-solid fa-screwdriver-wrench" },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Título */}
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-8">
          Categorias
        </h2>

        {/* Slider */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 5 },
            1024: { slidesPerView: 6 },
            1280: { slidesPerView: 8 },
          }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
        >
          {categorias.map((categoria, index) => (
            <SwiperSlide key={index}>
              <Link
                to="/categoria"
                className="flex flex-col items-center justify-center bg-neutral-100 rounded-xl p-6 hover:shadow-lg transition"
              >
                <i className={`${categoria.iconClass} text-orange-500 text-2xl mb-2`}></i>
                <span className="text-sm font-semibold text-neutral-800 text-center">
                  {categoria.name}
                </span>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
