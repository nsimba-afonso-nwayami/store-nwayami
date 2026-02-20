import { Link } from "react-router-dom";

import ProdutoImg1 from "../../assets/img/hero1.jpg";
import ProdutoImg2 from "../../assets/img/hero2.jpg";
import ProdutoImg3 from "../../assets/img/hero3.png";
import ProdutoImg4 from "../../assets/img/hero4.png";

export default function OutrosProdutos() {
  return (
    <section className="w-full py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Título */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-800">
            Outros Produtos
          </h2>

          <Link
            to="/produtos"
            className="text-orange-500 font-semibold hover:text-orange-600 transition"
          >
            Ver mais
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            {
              id: 9,
              nome: "Microondas Digital",
              preco: "85.000 Kz",
              img: ProdutoImg1,
            },
            {
              id: 10,
              nome: "Ar Condicionado 12000BTU",
              preco: "390.000 Kz",
              img: ProdutoImg2,
            },
            {
              id: 11,
              nome: "Fogão 5 Bocas",
              preco: "170.000 Kz",
              img: ProdutoImg3,
            },
            {
              id: 12,
              nome: "Câmara de Segurança",
              preco: "75.000 Kz",
              img: ProdutoImg4,
            },
          ].map((produto) => (
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

              <h3 className="text-sm font-semibold text-neutral-800 mb-2">
                {produto.nome}
              </h3>

              <p className="text-orange-500 text-lg font-bold mb-4">
                {produto.preco}
              </p>

              <Link
                to={`/produtos/detalhe/${produto.id}`}
                className="mt-auto block text-center bg-orange-500 text-neutral-50 py-2 rounded-lg text-sm font-semibold hover:bg-orange-600 transition"
              >
                Ver produto
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
