import { useState } from "react";
import { Link } from "react-router-dom";

import ProdutoImg1 from "../../assets/img/hero1.jpg";
import ProdutoImg2 from "../../assets/img/hero2.jpg";
import ProdutoImg3 from "../../assets/img/hero3.png";
import ProdutoImg4 from "../../assets/img/hero4.png";
import ProdutoImg5 from "../../assets/img/hero5.jpg";
import ProdutoImg6 from "../../assets/img/hero1.jpg";
import ProdutoImg7 from "../../assets/img/hero2.jpg";
import ProdutoImg8 from "../../assets/img/hero3.png";
import ProdutoImg9 from "../../assets/img/hero1.jpg";
import ProdutoImg10 from "../../assets/img/hero2.jpg";
import ProdutoImg11 from "../../assets/img/hero3.png";
import ProdutoImg12 from "../../assets/img/hero4.png";
import ProdutoImg13 from "../../assets/img/hero5.jpg";
import ProdutoImg14 from "../../assets/img/hero1.jpg";
import ProdutoImg15 from "../../assets/img/hero2.jpg";
import ProdutoImg16 from "../../assets/img/hero3.png";

const produtos = [
  {
    id: 1,
    nome: "Geladeira Frost Free",
    codigo: "NW-001",
    preco: "320.000 Kz",
    img: ProdutoImg1,
  },
  {
    id: 2,
    nome: "Painel Solar 550W",
    codigo: "NW-002",
    preco: "210.000 Kz",
    img: ProdutoImg2,
  },
  {
    id: 3,
    nome: "Smart TV 55”",
    codigo: "NW-003",
    preco: "450.000 Kz",
    img: ProdutoImg3,
  },
  {
    id: 4,
    nome: "Impressora Multifuncional",
    codigo: "NW-004",
    preco: "95.000 Kz",
    img: ProdutoImg4,
  },
  {
    id: 5,
    nome: "Notebook Core i5",
    codigo: "NW-005",
    preco: "520.000 Kz",
    img: ProdutoImg5,
  },
  {
    id: 6,
    nome: "Bateria Solar",
    codigo: "NW-006",
    preco: "180.000 Kz",
    img: ProdutoImg6,
  },
  {
    id: 7,
    nome: "Sistema de Som",
    codigo: "NW-007",
    preco: "130.000 Kz",
    img: ProdutoImg7,
  },
  {
    id: 8,
    nome: "Monitor LED 24”",
    codigo: "NW-008",
    preco: "150.000 Kz",
    img: ProdutoImg8,
  },
  {
    id: 9,
    nome: "Geladeira Duplex",
    codigo: "NW-009",
    preco: "350.000 Kz",
    img: ProdutoImg9,
  },
  {
    id: 10,
    nome: "Painel Solar 300W",
    codigo: "NW-010",
    preco: "180.000 Kz",
    img: ProdutoImg10,
  },
  {
    id: 11,
    nome: "Smart TV 42”",
    codigo: "NW-011",
    preco: "380.000 Kz",
    img: ProdutoImg11,
  },
  {
    id: 12,
    nome: "Impressora 3D",
    codigo: "NW-012",
    preco: "120.000 Kz",
    img: ProdutoImg12,
  },
  {
    id: 13,
    nome: "Notebook Core i7",
    codigo: "NW-013",
    preco: "720.000 Kz",
    img: ProdutoImg13,
  },
  {
    id: 14,
    nome: "Bateria Externa",
    codigo: "NW-014",
    preco: "80.000 Kz",
    img: ProdutoImg14,
  },
  {
    id: 15,
    nome: "Caixa de Som Bluetooth",
    codigo: "NW-015",
    preco: "95.000 Kz",
    img: ProdutoImg15,
  },
  {
    id: 16,
    nome: "Monitor LED 27”",
    codigo: "NW-016",
    preco: "220.000 Kz",
    img: ProdutoImg16,
  },
];

const categoriasFiltro = [
  "Geladeiras",
  "Painéis Solares",
  "Smart TVs",
  "Impressoras",
  "Notebooks",
  "Baterias",
  "Sistemas de Som",
  "Monitores",
];

export default function Produtos() {
  const [visibleCount, setVisibleCount] = useState(8); // produtos visíveis inicialmente

  return (
    <section className="w-full bg-neutral-100 pt-47 pb-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-6">
        {/* Filtros laterais fixos */}
        <aside className="hidden lg:block w-64 bg-white rounded-xl p-6 shadow sticky top-32 self-start">
          <h3 className="text-lg font-bold text-neutral-800 mb-4">Filtros</h3>
          <ul className="flex flex-col gap-2">
            {categoriasFiltro.map((cat, idx) => (
              <li key={idx}>
                <button className="w-full cursor-pointer text-left px-3 py-2 rounded hover:bg-orange-50 hover:text-orange-500 transition-colors font-semibold text-neutral-700">
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Grid de produtos */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-10">
            Todos os Produtos
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {produtos.slice(0, visibleCount).map((produto) => (
              <div
                key={produto.id}
                className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col"
              >
                <div className="w-full overflow-hidden rounded-lg mb-4">
                  <img
                    src={produto.img}
                    alt={produto.nome}
                    className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <h3 className="text-sm font-semibold text-neutral-800 mb-1">
                  {produto.nome}
                </h3>
                <p className="text-xs text-neutral-500 mb-2">
                  Código: {produto.codigo}
                </p>
                <p className="text-orange-500 text-lg font-bold mb-2">
                  {produto.preco}
                </p>
                <span className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-1 rounded mb-4 w-fit">
                  Disponível
                </span>

                <Link
                  to={`/produto/${produto.id}`}
                  className="mt-auto block text-center bg-orange-500 text-white py-2 rounded-lg text-sm font-semibold hover:bg-orange-600 transition"
                >
                  Ver produto
                </Link>
              </div>
            ))}
          </div>

          {/* Botão "Ver Mais" */}
          {visibleCount < produtos.length && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setVisibleCount((prev) => prev + 8)}
                className="px-6 py-3 cursor-pointer bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition"
              >
                Ver Mais
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
