import { useParams } from "react-router-dom";
import { useEffect } from "react";

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
  { id: 1, nome: "Geladeira Frost Free", codigo: "NW-001", preco: "320.000 Kz", img: ProdutoImg1 },
  { id: 2, nome: "Painel Solar 550W", codigo: "NW-002", preco: "210.000 Kz", img: ProdutoImg2 },
  { id: 3, nome: "Smart TV 55”", codigo: "NW-003", preco: "450.000 Kz", img: ProdutoImg3 },
  { id: 4, nome: "Impressora Multifuncional", codigo: "NW-004", preco: "95.000 Kz", img: ProdutoImg4 },
  { id: 5, nome: "Notebook Core i5", codigo: "NW-005", preco: "520.000 Kz", img: ProdutoImg5 },
  { id: 6, nome: "Bateria Solar", codigo: "NW-006", preco: "180.000 Kz", img: ProdutoImg6 },
  { id: 7, nome: "Sistema de Som", codigo: "NW-007", preco: "130.000 Kz", img: ProdutoImg7 },
  { id: 8, nome: "Monitor LED 24”", codigo: "NW-008", preco: "150.000 Kz", img: ProdutoImg8 },
  { id: 9, nome: "Geladeira Duplex", codigo: "NW-009", preco: "350.000 Kz", img: ProdutoImg9 },
  { id: 10, nome: "Painel Solar 300W", codigo: "NW-010", preco: "180.000 Kz", img: ProdutoImg10 },
  { id: 11, nome: "Smart TV 42”", codigo: "NW-011", preco: "380.000 Kz", img: ProdutoImg11 },
  { id: 12, nome: "Impressora 3D", codigo: "NW-012", preco: "120.000 Kz", img: ProdutoImg12 },
  { id: 13, nome: "Notebook Core i7", codigo: "NW-013", preco: "720.000 Kz", img: ProdutoImg13 },
  { id: 14, nome: "Bateria Externa", codigo: "NW-014", preco: "80.000 Kz", img: ProdutoImg14 },
  { id: 15, nome: "Caixa de Som Bluetooth", codigo: "NW-015", preco: "95.000 Kz", img: ProdutoImg15 },
  { id: 16, nome: "Monitor LED 27”", codigo: "NW-016", preco: "220.000 Kz", img: ProdutoImg16 },
];

export default function DetalhesProduto() {
  const { id } = useParams();
  const produto = produtos.find((p) => p.id === parseInt(id));

  // Atualiza o título da página
  useEffect(() => {
    if (produto) {
      document.title = `${produto.nome} | Nwayami Store`;
    } else {
      document.title = "Produto não encontrado | Nwayami Store";
    }
  }, [produto]);

  return (
    <>

      <section className="w-full bg-neutral-100 py-16 pt-47">
        <div className="max-w-7xl mx-auto px-4">
          {!produto ? (
            /* Card quando produto não for encontrado */
            <div className="max-w-md mx-auto bg-white rounded-xl shadow p-8 text-center">
              <i className="fas fa-box-open text-4xl text-orange-500 mb-4"></i>
              <h2 className="text-xl font-bold text-neutral-800 mb-2">
                Produto não encontrado
              </h2>
              <p className="text-neutral-600 text-sm mb-4">
                O produto que você procura não existe ou foi removido.
              </p>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Imagem */}
              <div className="lg:w-1/2">
                <img
                  src={produto.img}
                  alt={produto.nome}
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>

              {/* Informações */}
              <div className="lg:w-1/2 flex flex-col">
                <h1 className="text-3xl font-bold text-neutral-800 mb-4">
                  {produto.nome}
                </h1>
                <p className="text-sm text-neutral-500 mb-2">
                  Código: {produto.codigo}
                </p>
                <p className="text-2xl text-orange-500 font-bold mb-4">
                  {produto.preco}
                </p>
                <span className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-1 rounded w-fit mb-6">
                  Disponível
                </span>

                <button className="bg-orange-500 cursor-pointer text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition mb-6">
                  Adicionar ao carrinho
                </button>

                <div className="bg-white p-4 rounded-xl shadow">
                  <h2 className="text-lg font-bold text-neutral-800 mb-2">
                    Descrição do Produto
                  </h2>
                  <p className="text-neutral-700 text-sm">
                    Este é um produto de alta qualidade, perfeito para atender
                    às suas necessidades. Você pode adicionar informações
                    detalhadas aqui, como especificações técnicas.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
