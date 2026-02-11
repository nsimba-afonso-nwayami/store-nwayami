import { Link } from "react-router-dom";

import ProdutoImg1 from "../../assets/img/hero1.jpg";
import ProdutoImg2 from "../../assets/img/hero2.jpg";
import ProdutoImg3 from "../../assets/img/hero3.png";
import ProdutoImg4 from "../../assets/img/hero4.png";
import ProdutoImg5 from "../../assets/img/hero5.jpg";
import ProdutoImg6 from "../../assets/img/hero1.jpg";
import ProdutoImg7 from "../../assets/img/hero2.jpg";
import ProdutoImg8 from "../../assets/img/hero3.png";

export default function ProdutosDestaque() {
  return (
    <section className="w-full py-16 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Título */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-800">
            Produtos em Destaque
          </h2>

          <Link
            to="/produtos"
            className="text-orange-500 font-semibold hover:underline"
          >
            Ver todos
          </Link>
        </div>

        {/* Grid de produtos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Produto 1 */}
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col">
            <div className="w-full overflow-hidden rounded-lg mb-4">
              <img
                src={ProdutoImg1}
                alt="Geladeira"
                className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            <h3 className="text-sm font-semibold text-neutral-800 mb-1">
              Geladeira Frost Free
            </h3>

            <p className="text-xs text-neutral-500 mb-2">Código: NW-001</p>

            <p className="text-orange-500 text-lg font-bold mb-2">320.000 Kz</p>

            <span className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-1 rounded mb-4 w-fit">
              Disponível
            </span>

            <Link
              to="/produtos/detalhe/1"
              className="mt-auto block text-center bg-orange-500 text-white py-2 rounded-lg text-sm font-semibold hover:bg-orange-600 transition"
            >
              Ver produto
            </Link>
          </div>

          {/* Produto 2 */}
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col">
            <div className="w-full overflow-hidden rounded-lg mb-4">
              <img
                src={ProdutoImg2}
                alt="Painel Solar"
                className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            <h3 className="text-sm font-semibold text-neutral-800 mb-1">
              Painel Solar 550W
            </h3>

            <p className="text-xs text-neutral-500 mb-2">Código: NW-002</p>

            <p className="text-orange-500 text-lg font-bold mb-2">210.000 Kz</p>

            <span className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-1 rounded mb-4 w-fit">
              Disponível
            </span>

            <Link
              to="/produtos/detalhe/2"
              className="mt-auto block text-center bg-orange-500 text-white py-2 rounded-lg text-sm font-semibold hover:bg-orange-600 transition"
            >
              Ver produto
            </Link>
          </div>

          {/* Produto 3 */}
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col">
            <div className="w-full overflow-hidden rounded-lg mb-4">
              <img
                src={ProdutoImg3}
                alt="Smart TV"
                className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            <h3 className="text-sm font-semibold text-neutral-800 mb-1">
              Smart TV 55”
            </h3>

            <p className="text-xs text-neutral-500 mb-2">Código: NW-003</p>

            <p className="text-orange-500 text-lg font-bold mb-2">450.000 Kz</p>

            <span className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-1 rounded mb-4 w-fit">
              Disponível
            </span>

            <Link
              to="/produtos/detalhe/3"
              className="mt-auto block text-center bg-orange-500 text-white py-2 rounded-lg text-sm font-semibold hover:bg-orange-600 transition"
            >
              Ver produto
            </Link>
          </div>

          {/* Produto 4 */}
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col">
            <div className="w-full overflow-hidden rounded-lg mb-4">
              <img
                src={ProdutoImg4}
                alt="Impressora"
                className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            <h3 className="text-sm font-semibold text-neutral-800 mb-1">
              Impressora Multifuncional
            </h3>

            <p className="text-xs text-neutral-500 mb-2">Código: NW-004</p>

            <p className="text-orange-500 text-lg font-bold mb-2">95.000 Kz</p>

            <span className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-1 rounded mb-4 w-fit">
              Disponível
            </span>

            <Link
              to="/produtos/detalhe/4"
              className="mt-auto block text-center bg-orange-500 text-white py-2 rounded-lg text-sm font-semibold hover:bg-orange-600 transition"
            >
              Ver produto
            </Link>
          </div>

          {/* Produto 5 */}
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col">
            <div className="w-full overflow-hidden rounded-lg mb-4">
              <img
                src={ProdutoImg5}
                alt="Notebook"
                className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            <h3 className="text-sm font-semibold text-neutral-800 mb-1">
              Notebook Core i5
            </h3>

            <p className="text-xs text-neutral-500 mb-2">Código: NW-005</p>

            <p className="text-orange-500 text-lg font-bold mb-2">520.000 Kz</p>

            <span className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-1 rounded mb-4 w-fit">
              Disponível
            </span>

            <Link
              to="/produtos/detalhe/5"
              className="mt-auto block text-center bg-orange-500 text-white py-2 rounded-lg text-sm font-semibold hover:bg-orange-600 transition"
            >
              Ver produto
            </Link>
          </div>

          {/* Produto 6 */}
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col">
            <div className="w-full overflow-hidden rounded-lg mb-4">
              <img
                src={ProdutoImg6}
                alt="Bateria Solar"
                className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            <h3 className="text-sm font-semibold text-neutral-800 mb-1">
              Bateria Solar
            </h3>

            <p className="text-xs text-neutral-500 mb-2">Código: NW-006</p>

            <p className="text-orange-500 text-lg font-bold mb-2">180.000 Kz</p>

            <span className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-1 rounded mb-4 w-fit">
              Disponível
            </span>

            <Link
              to="/produtos/detalhe/6"
              className="mt-auto block text-center bg-orange-500 text-white py-2 rounded-lg text-sm font-semibold hover:bg-orange-600 transition"
            >
              Ver produto
            </Link>
          </div>

          {/* Produto 7 */}
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col">
            <div className="w-full overflow-hidden rounded-lg mb-4">
              <img
                src={ProdutoImg7}
                alt="Sistema de Som"
                className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            <h3 className="text-sm font-semibold text-neutral-800 mb-1">
              Sistema de Som
            </h3>

            <p className="text-xs text-neutral-500 mb-2">Código: NW-007</p>

            <p className="text-orange-500 text-lg font-bold mb-2">130.000 Kz</p>

            <span className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-1 rounded mb-4 w-fit">
              Disponível
            </span>

            <Link
              to="/produtos/detalhe/7"
              className="mt-auto block text-center bg-orange-500 text-white py-2 rounded-lg text-sm font-semibold hover:bg-orange-600 transition"
            >
              Ver produto
            </Link>
          </div>

          {/* Produto 8 */}
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col">
            <div className="w-full overflow-hidden rounded-lg mb-4">
              <img
                src={ProdutoImg8}
                alt="Monitor"
                className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            <h3 className="text-sm font-semibold text-neutral-800 mb-1">
              Monitor LED 24”
            </h3>

            <p className="text-xs text-neutral-500 mb-2">Código: NW-008</p>

            <p className="text-orange-500 text-lg font-bold mb-2">150.000 Kz</p>

            <span className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-1 rounded mb-4 w-fit">
              Disponível
            </span>

            <Link
              to="/produtos/detalhe/8"
              className="mt-auto block text-center bg-orange-500 text-white py-2 rounded-lg text-sm font-semibold hover:bg-orange-600 transition"
            >
              Ver produto
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
