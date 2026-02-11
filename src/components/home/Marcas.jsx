import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Marcas() {
  const marcas = [
    { name: "Apple", iconClass: "fab fa-apple" },
    { name: "Microsoft", iconClass: "fab fa-microsoft" },
    { name: "Google", iconClass: "fab fa-google" },
    { name: "Facebook", iconClass: "fab fa-facebook" },
    { name: "Twitter", iconClass: "fab fa-twitter" },
    { name: "LinkedIn", iconClass: "fab fa-linkedin" },
    { name: "GitHub", iconClass: "fab fa-github" },
    { name: "Instagram", iconClass: "fab fa-instagram" },
    { name: "YouTube", iconClass: "fab fa-youtube" },
    { name: "Pinterest", iconClass: "fab fa-pinterest" },
  ];

  return (
    <section className="w-full py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Título */}
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-8">
          Marcas Mais Pesquisadas
        </h2>

        {/* Slider */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            640: { slidesPerView: 4 },
            768: { slidesPerView: 5 },
            1024: { slidesPerView: 6 },
            1280: { slidesPerView: 6 },
          }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
        >
          {marcas.map((marca, index) => (
            <SwiperSlide key={index}>
              <Link
                to="/categoria/"
                className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
              >
                <i
                  className={`${marca.iconClass} text-4xl text-orange-500 mb-2`}
                ></i>
                <span className="text-sm font-semibold text-neutral-800">
                  {marca.name}
                </span>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
