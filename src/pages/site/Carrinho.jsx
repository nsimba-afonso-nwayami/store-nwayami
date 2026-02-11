import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import ProdutoImg1 from "../../assets/img/hero1.jpg";
import ProdutoImg2 from "../../assets/img/hero2.jpg";

const itensCarrinho = [
  {
    id: 1,
    nome: "Geladeira Frost Free",
    codigo: "NW-001",
    preco: "320.000 Kz",
    quantidade: 1,
    img: ProdutoImg1,
  },
  {
    id: 2,
    nome: "Smart TV 55”",
    codigo: "NW-003",
    preco: "450.000 Kz",
    quantidade: 2,
    img: ProdutoImg2,
  },
];

export default function Carrinho() {
  return (
    <>
      <title>Carrinho | Nwayami Store</title>
      <Header />

      <section className="w-full bg-neutral-100 py-16 pt-47">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-10">
            Carrinho de Compras
          </h1>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Lista de produtos */}
            <div className="flex-1 flex flex-col gap-4">
              {itensCarrinho.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow p-4 flex flex-col sm:flex-row gap-4 items-center"
                >
                  {/* Imagem */}
                  <img
                    src={item.img}
                    alt={item.nome}
                    className="w-24 h-24 object-cover rounded-lg"
                  />

                  {/* Informações */}
                  <div className="flex-1 text-center sm:text-left">
                    <h2 className="font-semibold text-neutral-800">
                      {item.nome}
                    </h2>
                    <p className="text-xs text-neutral-500">
                      Código: {item.codigo}
                    </p>
                    <p className="text-orange-500 font-bold mt-1">
                      {item.preco}
                    </p>
                  </div>

                  {/* Quantidade */}
                  <div className="flex items-center gap-2">
                    <button className="w-8 h-8 bg-neutral-200 rounded hover:bg-neutral-300">
                      -
                    </button>
                    <span className="font-semibold">{item.quantidade}</span>
                    <button className="w-8 h-8 bg-neutral-200 rounded hover:bg-neutral-300">
                      +
                    </button>
                  </div>

                  {/* Remover */}
                  <button
                    className="text-red-500 hover:text-red-600 cursor-pointer text-lg flex items-center justify-center w-10 h-10 rounded-lg hover:bg-red-50 transition"
                    title="Remover"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              ))}

              {/* Botão continuar a comprar */}
              <div className="mt-4">
                <Link
                  to="/produtos"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-400 text-neutral-700 rounded-lg font-semibold hover:bg-neutral-200 transition"
                >
                  <i className="fa-solid fa-arrow-left"></i>
                  Continuar a comprar
                </Link>
              </div>
            </div>

            {/* Resumo do pedido */}
            <aside className="w-full lg:w-80">
              <div className="bg-white rounded-xl shadow p-6">
                <h2 className="text-lg font-bold text-neutral-800 mb-4">
                  Resumo do Pedido
                </h2>

                <div className="flex justify-between text-sm text-neutral-600 mb-2">
                  <span>Subtotal</span>
                  <span>1.220.000 Kz</span>
                </div>

                <div className="flex justify-between text-sm text-neutral-600 mb-4">
                  <span>Entrega</span>
                  <span>Grátis</span>
                </div>

                <div className="flex justify-between text-lg font-bold text-neutral-800 mb-6">
                  <span>Total</span>
                  <span className="text-orange-500">1.220.000 Kz</span>
                </div>

                <button className="w-full cursor-pointer bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
                  Finalizar Compra
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
