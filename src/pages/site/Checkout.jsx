import { Link } from "react-router-dom";

export default function Checkout() {
  return (
    <>
      <title>Checkout | Nwayami Store</title>

      <section className="w-full bg-neutral-50 py-16 pt-47">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-10">
            Finalizar Compra
          </h1>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* FORMULÁRIO */}
            <div className="flex-1 flex flex-col gap-8">
              {/* Dados de Entrega */}
              <div className="bg-white rounded-xl shadow p-6">
                <h2 className="text-lg font-bold text-neutral-800 mb-6">
                  Dados de Entrega
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-sm text-neutral-800">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      className="w-full border border-neutral-400 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-sm text-neutral-800">Telefone</label>
                    <input
                      type="text"
                      className="w-full border border-neutral-400 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500"
                    />
                  </div>

                  <div className="md:col-span-2 flex flex-col gap-1">
                    <label className="text-sm text-neutral-800">
                      Província
                    </label>
                    <select className="w-full border border-neutral-400 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500">
                      <option value="">Selecione a província</option>
                      <option>Bengo</option>
                      <option>Benguela</option>
                      <option>Bié</option>
                      <option>Cabinda</option>
                      <option>Cuando</option>
                      <option>Cubango</option>
                      <option>Cuanza Norte</option>
                      <option>Cuanza Sul</option>
                      <option>Cunene</option>
                      <option>Huambo</option>
                      <option>Huíla</option>
                      <option>Icolo e Bengo</option>
                      <option>Luanda</option>
                      <option>Lunda Norte</option>
                      <option>Lunda Sul</option>
                      <option>Malanje</option>
                      <option>Moxico</option>
                      <option>Moxico Leste</option>
                      <option>Namibe</option>
                      <option>Uíge</option>
                      <option>Zaire</option>
                    </select>
                  </div>

                  <div className="md:col-span-2 flex flex-col gap-1">
                    <label className="text-sm text-neutral-800">
                      Endereço Completo
                    </label>
                    <input
                      type="text"
                      className="w-full border border-neutral-400 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500"
                    />
                  </div>
                </div>
              </div>

              {/* Método de Entrega */}
              <div className="bg-white rounded-xl shadow p-6">
                <h2 className="text-lg font-bold text-neutral-800 mb-6">
                  Método de Entrega
                </h2>

                <div className="flex flex-col gap-3">
                  <label className="flex items-center gap-3 border border-neutral-400 rounded-lg p-3 cursor-pointer hover:border-orange-500">
                    <input type="radio" name="entrega" />
                    <span className="text-neutral-800">
                      Entrega Normal (2-3 dias)
                    </span>
                  </label>

                  <label className="flex items-center gap-3 border border-neutral-400 rounded-lg p-3 cursor-pointer hover:border-orange-500">
                    <input type="radio" name="entrega" />
                    <span className="text-neutral-800">
                      Entrega Expressa (24h)
                    </span>
                  </label>
                </div>
              </div>

              {/* Método de Pagamento */}
              <div className="bg-white rounded-xl shadow p-6">
                <h2 className="text-lg font-bold text-neutral-800 mb-6">
                  Método de Pagamento
                </h2>

                <div className="flex flex-col gap-3">
                  <label className="flex items-center gap-3 border border-neutral-400 rounded-lg p-3 cursor-pointer hover:border-orange-500">
                    <input type="radio" name="pagamento" />
                    <span className="text-neutral-800">Multicaixa Express</span>
                  </label>

                  <label className="flex items-center gap-3 border border-neutral-400 rounded-lg p-3 cursor-pointer hover:border-orange-500">
                    <input type="radio" name="pagamento" />
                    <span className="text-neutral-800">
                      Transferência Bancária
                    </span>
                  </label>

                  <label className="flex items-center gap-3 border border-neutral-400 rounded-lg p-3 cursor-pointer hover:border-orange-500">
                    <input type="radio" name="pagamento" />
                    <span className="text-neutral-800">
                      Pagamento na Entrega
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* RESUMO */}
            <aside className="w-full lg:w-80">
              <div className="bg-white rounded-xl shadow p-6 sticky top-40">
                <h2 className="text-lg font-bold text-neutral-800 mb-4">
                  Resumo do Pedido
                </h2>

                <div className="flex justify-between text-sm text-neutral-400 mb-2">
                  <span>Subtotal</span>
                  <span>1.220.000 Kz</span>
                </div>

                <div className="flex justify-between text-sm text-neutral-400 mb-4">
                  <span>Entrega</span>
                  <span>Grátis</span>
                </div>

                <div className="flex justify-between text-lg font-bold text-neutral-800 mb-6">
                  <span>Total</span>
                  <span className="text-orange-500">1.220.000 Kz</span>
                </div>

                <button className="w-full bg-orange-500 text-neutral-50 py-3 rounded-lg font-semibold hover:bg-orange-600 transition cursor-pointer">
                  Confirmar Pedido
                </button>

                <Link
                  to="/carrinho"
                  className="block text-center mt-4 text-sm text-neutral-400 hover:text-orange-500 transition"
                >
                  Voltar ao Carrinho
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
