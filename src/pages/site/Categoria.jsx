import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";

import ProdutoImg1 from "../../assets/img/hero1.jpg";
import ProdutoImg2 from "../../assets/img/hero2.jpg";
import ProdutoImg3 from "../../assets/img/hero3.png";
import ProdutoImg4 from "../../assets/img/hero4.png";
import ProdutoImg5 from "../../assets/img/hero5.jpg";
import ProdutoImg6 from "../../assets/img/hero1.jpg";
import ProdutoImg7 from "../../assets/img/hero2.jpg";
import ProdutoImg8 from "../../assets/img/hero3.png";

const produtos = [
  {
    id: 1,
    nome: "Geladeira Frost Free",
    codigo: "NW-001",
    preco: "320.000 Kz",
    img: ProdutoImg1,
    categoria: "geladeiras",
  },
  {
    id: 2,
    nome: "Painel Solar 550W",
    codigo: "NW-002",
    preco: "210.000 Kz",
    img: ProdutoImg2,
    categoria: "energia",
  },
  {
    id: 3,
    nome: "Smart TV 55”",
    codigo: "NW-003",
    preco: "450.000 Kz",
    img: ProdutoImg3,
    categoria: "imagem-e-som",
  },
  {
    id: 4,
    nome: "Impressora Multifuncional",
    codigo: "NW-004",
    preco: "95.000 Kz",
    img: ProdutoImg4,
    categoria: "impressao",
  },
  {
    id: 5,
    nome: "Notebook Core i5",
    codigo: "NW-005",
    preco: "520.000 Kz",
    img: ProdutoImg5,
    categoria: "informatica",
  },
  {
    id: 6,
    nome: "Bateria Solar",
    codigo: "NW-006",
    preco: "180.000 Kz",
    img: ProdutoImg6,
    categoria: "energia",
  },
  {
    id: 7,
    nome: "Sistema de Som",
    codigo: "NW-007",
    preco: "130.000 Kz",
    img: ProdutoImg7,
    categoria: "imagem-e-som",
  },
  {
    id: 8,
    nome: "Monitor LED 24”",
    codigo: "NW-008",
    preco: "150.000 Kz",
    img: ProdutoImg8,
    categoria: "informatica",
  },
];

export default function Categoria() {
  const { nome } = useParams();

  const produtosFiltrados = produtos.filter((p) => p.categoria === nome);

  useEffect(() => {
    document.title = `${nome} | Nwayami Store`;
  }, [nome]);

  return (
    <>
      <Header />

      <section className="w-full bg-neutral-100 py-16 pt-47">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-10 capitalize">
            Categoria: {nome.replaceAll("-", " ")}
          </h1>

          {produtosFiltrados.length === 0 ? (
            <div className="max-w-md mx-auto bg-white rounded-xl shadow p-8 text-center">
              <i className="fas fa-box-open text-4xl text-orange-500 mb-4"></i>
              <h2 className="text-xl font-bold text-neutral-800 mb-2">
                Nenhum produto encontrado
              </h2>
              <p className="text-neutral-600 text-sm">
                Não existem produtos nesta categoria.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {produtosFiltrados.map((produto) => (
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
          )}
        </div>
      </section>
    </>
  );
}
