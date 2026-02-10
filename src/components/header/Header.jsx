import { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const categorias = [
    "Ferramentas",
    "Equipamentos",
    "Segurança",
    "Construção",
    "Elétrica",
    "Hidráulica",
    "Soldadura",
    "Peças",
    "Tintas",
    "Parafusos",
    "Máquinas",
    "Jardinagem",
    "Lubrificantes",
    "EPI",
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-neutral-900 border-b border-neutral-800 shadow-lg z-50">
      {/* Topo principal */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between gap-4">
        {/* Botão menu mobile */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-neutral-50 text-xl"
        >
          <i className="fas fa-bars"></i>
        </button>

        {/* Logo */}
        <Link
          to="/"
          className="text-xl md:text-2xl font-extrabold tracking-wide text-neutral-50"
        >
          NWAYAMI <span className="text-orange-500">STORE</span>
        </Link>

        {/* Input de pesquisa desktop (sempre visível) */}
        <div className="hidden md:block flex-1 max-w-xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Pesquisar produtos..."
              className="w-full bg-neutral-800 text-neutral-50 placeholder-neutral-400 px-4 py-2 rounded-lg border border-neutral-700 focus:outline-none focus:border-orange-500"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-orange-500">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>

        {/* Ações */}
        <div className="flex items-center gap-4 text-neutral-50 text-xl">
          {/* Botão pesquisa mobile */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="md:hidden hover:text-orange-500 transition-colors"
          >
            <i className="fas fa-search"></i>
          </button>

          {/* Login */}
          <Link to="/login" className="hover:text-orange-500 transition-colors">
            <i className="fas fa-user"></i>
          </Link>

          {/* Carrinho */}
          <Link
            to="/carrinho"
            className="relative hover:text-orange-500 transition-colors"
          >
            <i className="fas fa-shopping-cart"></i>
            <span className="absolute -top-2 -right-2 bg-orange-500 text-neutral-50 text-xs w-5 h-5 flex items-center justify-center rounded-full">
              2
            </span>
          </Link>
        </div>
      </div>

      {/* Input de pesquisa mobile */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          searchOpen ? "max-h-24 opacity-100 pb-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4">
          <input
            type="text"
            placeholder="Pesquisar produtos..."
            className="w-full bg-neutral-800 text-neutral-50 placeholder-neutral-400 px-4 py-3 rounded-lg border border-neutral-700 focus:outline-none focus:border-orange-500"
          />
        </div>
      </div>

      {/* Slider de categorias automático */}
      <div className="bg-neutral-800 border-t border-neutral-700">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={12}
            slidesPerView={"auto"}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            {categorias.map((cat, index) => (
              <SwiperSlide key={index} style={{ width: "auto" }}>
                <Link
                  to={`/categoria/${cat.toLowerCase()}`}
                  className="whitespace-nowrap px-4 py-2 bg-neutral-900 text-neutral-50 rounded-lg border border-neutral-700 hover:border-orange-500 hover:text-orange-500 transition-colors text-sm font-semibold"
                >
                  {cat}
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Menu (único, adaptativo) */}
      <nav>
        {/* Desktop */}
        <div className="hidden md:flex bg-neutral-900 border-t border-neutral-800">
          <div className="max-w-7xl mx-auto px-6 py-3 flex flex-row items-center gap-6">
            <Link
              to="/"
              className="uppercase text-neutral-50 hover:text-orange-500 transition-colors text-sm font-semibold"
            >
              Home
            </Link>
            <Link
              to="/produtos"
              className="uppercase text-neutral-50 hover:text-orange-500 transition-colors text-sm font-semibold"
            >
              Produtos
            </Link>
            <Link
              to="/sobre"
              className="uppercase text-neutral-50 hover:text-orange-500 transition-colors text-sm font-semibold"
            >
              Sobre
            </Link>
            <Link
              to="/contato"
              className="uppercase text-neutral-50 hover:text-orange-500 transition-colors text-sm font-semibold"
            >
              Contato
            </Link>
          </div>
        </div>

        {/* Mobile (lateral deslizante) */}
        {/* Overlay */}
        <div
          onClick={() => setMenuOpen(false)}
          className={`fixed inset-0 bg-black/50 z-40 transition-opacity md:hidden ${
            menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        />

        {/* Menu lateral */}
        <aside
          className={`fixed top-0 left-0 h-full w-72 bg-neutral-900 z-50 transform transition-transform duration-300 md:hidden ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-6 border-b border-neutral-800 flex justify-between items-center">
            <span className="text-xl font-bold text-neutral-50">Menu</span>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-neutral-50 text-xl"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          <nav className="flex flex-col p-6 gap-6">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-neutral-50 hover:text-orange-500 font-semibold"
            >
              Home
            </Link>
            <Link
              to="/produtos"
              onClick={() => setMenuOpen(false)}
              className="text-neutral-50 hover:text-orange-500 font-semibold"
            >
              Produtos
            </Link>
            <Link
              to="/sobre"
              onClick={() => setMenuOpen(false)}
              className="text-neutral-50 hover:text-orange-500 font-semibold"
            >
              Sobre
            </Link>
            <Link
              to="/contato"
              onClick={() => setMenuOpen(false)}
              className="text-neutral-50 hover:text-orange-500 font-semibold"
            >
              Contato
            </Link>
          </nav>
        </aside>
      </nav>
    </header>
  );
}
