import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { listarProdutos } from "../../services/produtosService";

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [visibleCount, setVisibleCount] = useState(16);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(""); // categoria selecionada

  const formatImageUrl = (url) =>
    url ? url.replace("/media/", "/api/media/") : "";

  useEffect(() => {
    async function carregarProdutos() {
      try {
        const data = await listarProdutos();
        setProdutos(data);
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      } finally {
        setLoading(false);
      }
    }

    carregarProdutos();
  }, []);

  // Pegar categorias únicas do array
  const categorias = Array.from(new Set(produtos.map((p) => p.categoria_nome)));

  // Produtos filtrados
  const produtosFiltrados = selectedCategory
    ? produtos.filter((p) => p.categoria_nome === selectedCategory)
    : produtos;

  if (loading) {
    return (
      <section className="w-full bg-neutral-100 pt-47 pb-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-neutral-600">Carregando produtos...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-neutral-100 pt-47 pb-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-6">
        {/* Filtros laterais */}
        <aside className="hidden lg:block w-64 bg-white rounded-xl p-6 shadow sticky top-32 self-start">
          <h3 className="text-lg font-bold text-neutral-800 mb-4">
            Categorias
          </h3>
          <ul className="flex flex-col gap-2">
            <li>
              <button
                onClick={() => setSelectedCategory("")}
                className={`w-full cursor-pointer text-left px-3 py-2 rounded font-semibold transition-colors ${
                  selectedCategory === ""
                    ? "bg-orange-50 text-orange-500"
                    : "hover:bg-orange-50 hover:text-orange-500 text-neutral-700"
                }`}
              >
                Todas
              </button>
            </li>
            {categorias.map((cat, idx) => (
              <li key={idx}>
                <button
                  onClick={() => setSelectedCategory(cat)}
                  className={`w-full cursor-pointer text-left px-3 py-2 rounded font-semibold transition-colors ${
                    selectedCategory === cat
                      ? "bg-orange-50 text-orange-500"
                      : "hover:bg-orange-50 hover:text-orange-500 text-neutral-700"
                  }`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Grid de produtos */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-10">
            {selectedCategory || "Todos os Produtos"}
          </h2>

          {produtosFiltrados.length === 0 ? (
            <p className="text-neutral-600">Nenhum produto encontrado.</p>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {produtosFiltrados.slice(0, visibleCount).map((produto) => (
                  <div
                    key={produto.id}
                    className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col"
                  >
                    <div className="w-full overflow-hidden rounded-lg mb-4">
                      <img
                        src={formatImageUrl(produto.imagem)}
                        alt={produto.descricao}
                        className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>

                    <h3 className="text-sm font-semibold text-neutral-800 mb-1 line-clamp-2">
                      {produto.descricao}
                    </h3>

                    <p className="text-xs text-neutral-500 mb-2">
                      Código: {produto.codigo}
                    </p>

                    <p className="text-orange-500 text-lg font-bold mb-2">
                      {Number(produto.preco_com_iva).toLocaleString("pt-AO")} Kz
                    </p>

                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded mb-4 w-fit ${
                        produto.stock === "Disponível"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {produto.stock}
                    </span>

                    <Link
                      to={`/produtos/${produto.id}`}
                      className="mt-auto block text-center bg-orange-500 text-white py-2 rounded-lg text-sm font-semibold hover:bg-orange-600 transition"
                    >
                      Ver produto
                    </Link>
                  </div>
                ))}
              </div>

              {visibleCount < produtosFiltrados.length && (
                <div className="flex justify-center mt-8">
                  <button
                    onClick={() => setVisibleCount((prev) => prev + 8)}
                    className="px-6 py-3 cursor-pointer bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition"
                  >
                    Ver Mais
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
