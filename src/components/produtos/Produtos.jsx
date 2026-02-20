import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { listarProdutos } from "../../services/produtosService";

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [visibleCount, setVisibleCount] = useState(16);
  const [loading, setLoading] = useState(true);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const formatImageUrl = (url) =>
    url ? url.replace("/media/", "/api/media/") : "";

  // Carregar produtos da API
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

  const categorias = Array.from(new Set(produtos.map((p) => p.categoria_nome)));
  const subcategorias = selectedCategory
    ? Array.from(
        new Set(
          produtos
            .filter((p) => p.categoria_nome === selectedCategory)
            .map((p) => p.subcategoria_nome),
        ),
      )
    : [];

  const produtosFiltrados = produtos
    .filter((p) => !selectedCategory || p.categoria_nome === selectedCategory)
    .filter(
      (p) =>
        !selectedSubcategory || p.subcategoria_nome === selectedSubcategory,
    )
    .filter(
      (p) =>
        p.descricao.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.codigo.toLowerCase().includes(searchTerm.toLowerCase()),
    );

  return (
    <section className="w-full bg-neutral-100 pt-47 pb-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-6">
        {/* Filtros e pesquisa */}
        <aside className="hidden lg:block w-64 bg-white rounded-xl p-6 shadow sticky top-32 self-start flex-col gap-4">
          {/* Barra de pesquisa */}
          <input
            type="text"
            placeholder="Buscar produtos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          {/* Categorias */}
          <h3 className="text-lg font-bold text-neutral-800 mt-4 mb-2">
            Categorias
          </h3>
          <ul className="flex flex-col gap-2 mb-4">
            <li>
              <button
                onClick={() => {
                  setSelectedCategory("");
                  setSelectedSubcategory("");
                }}
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
                  onClick={() => {
                    setSelectedCategory(cat);
                    setSelectedSubcategory("");
                  }}
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

          {/* Subcategorias */}
          {subcategorias.length > 0 && (
            <>
              <h3 className="text-lg font-bold text-neutral-800 mb-2">
                Subcategorias
              </h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <button
                    onClick={() => setSelectedSubcategory("")}
                    className={`w-full text-left px-3 py-2 rounded font-semibold transition-colors ${
                      selectedSubcategory === ""
                        ? "bg-orange-50 text-orange-500"
                        : "hover:bg-orange-50 hover:text-orange-500 text-neutral-700"
                    }`}
                  >
                    Todas
                  </button>
                </li>
                {subcategorias.map((sub, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => setSelectedSubcategory(sub)}
                      className={`w-full text-left px-3 py-2 rounded font-semibold transition-colors ${
                        selectedSubcategory === sub
                          ? "bg-orange-50 text-orange-500"
                          : "hover:bg-orange-50 hover:text-orange-500 text-neutral-700"
                      }`}
                    >
                      {sub}
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}
        </aside>

        {/* Conteúdo principal */}
        <div className="flex-1 flex flex-col gap-6">
          {loading ? (
            <div className="flex flex-col justify-center items-center h-64 gap-4">
              <i className="fas fa-spinner fa-spin text-3xl text-orange-500"></i>
              <p className="text-neutral-600">Carregando produtos...</p>
            </div>
          ) : produtosFiltrados.length === 0 ? (
            <div className="max-w-md mx-auto bg-white rounded-xl shadow p-8 text-center">
              <i className="fas fa-box-open text-4xl text-orange-500 mb-4"></i>
              <h2 className="text-xl font-bold text-neutral-800 mb-2">
                Nenhum produto encontrado
              </h2>
              <p className="text-neutral-600 text-sm">
                Não existem produtos com os filtros aplicados.
              </p>
            </div>
          ) : (
            <>
              <p className="text-neutral-600 mb-2">
                Mostrando {Math.min(visibleCount, produtosFiltrados.length)} de{" "}
                {produtosFiltrados.length} produtos
              </p>

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
                      to={`/produtos/${produto.descricao
                        .toLowerCase()
                        .replaceAll(" ", "-")
                        .replaceAll("/", "")}`}
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
