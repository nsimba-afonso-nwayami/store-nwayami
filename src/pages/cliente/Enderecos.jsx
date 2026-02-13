import { useState } from "react";
import ClienteLayout from "./components/ClienteLayout";
import Modal from "./components/Modal";

export default function Enderecos() {
  const [enderecos, setEnderecos] = useState([
    {
      id: 1,
      apelido: "Casa",
      rua: "Rua 1, Talatona",
      bairro: "Talatona",
      cidade: "Luanda",
      provincia: "Luanda",
    },
    {
      id: 2,
      apelido: "Trabalho",
      rua: "Av. Deolinda Rodrigues, 50",
      bairro: "Maianga",
      cidade: "Luanda",
      provincia: "Luanda",
    },
  ]);

  const [openModal, setOpenModal] = useState(false);
  const [enderecoSelecionado, setEnderecoSelecionado] = useState(null);

  const abrirModal = (endereco = null) => {
    setEnderecoSelecionado(endereco);
    setOpenModal(true);
  };

  return (
    <>
      <title>Meus Endereços | Dashboard Cliente</title>

      <ClienteLayout title="Meus Endereços">
        {/* Botão adicionar endereço */}
        <div className="flex justify-end mb-6">
          <button
            onClick={() => abrirModal()}
            className="px-5 py-3 cursor-pointer bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold flex items-center gap-2"
          >
            <i className="fas fa-plus"></i> Novo Endereço
          </button>
        </div>

        {/* Lista de endereços */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {enderecos.map((endereco) => (
            <div
              key={endereco.id}
              className="bg-white p-6 rounded-xl shadow-sm border border-orange-200 hover:shadow-md transition"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold text-neutral-900">
                  {endereco.apelido}
                </h3>
                <button
                  onClick={() => abrirModal(endereco)}
                  className="text-orange-500 cursor-pointer hover:text-orange-600 text-sm flex items-center gap-1"
                >
                  <i className="fas fa-edit"></i> Editar
                </button>
              </div>

              <p className="text-neutral-700">{endereco.rua}</p>
              <p className="text-neutral-500 text-sm">
                {endereco.bairro} • {endereco.cidade} • {endereco.provincia}
              </p>
            </div>
          ))}
        </div>

        {/* Modal adicionar/editar endereço */}
        <Modal
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
          title={enderecoSelecionado ? "Editar Endereço" : "Novo Endereço"}
          icon="fas fa-map-marker-alt"
        >
          <form className="max-w-3xl mx-auto space-y-4">
            <div>
              <label className="block text-neutral-700 font-medium mb-1">
                Apelido
              </label>
              <input
                type="text"
                defaultValue={enderecoSelecionado?.apelido || ""}
                placeholder="Ex: Casa, Trabalho"
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-neutral-700 font-medium mb-1">
                Rua
              </label>
              <input
                type="text"
                defaultValue={enderecoSelecionado?.rua || ""}
                placeholder="Ex: Rua 1, Talatona"
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-neutral-700 font-medium mb-1">
                Bairro
              </label>
              <input
                type="text"
                defaultValue={enderecoSelecionado?.bairro || ""}
                placeholder="Ex: Talatona"
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-neutral-700 font-medium mb-1">
                Cidade / Província
              </label>
              <input
                type="text"
                defaultValue={
                  enderecoSelecionado
                    ? `${enderecoSelecionado.cidade} / ${enderecoSelecionado.provincia}`
                    : ""
                }
                placeholder="Ex: Luanda / Luanda"
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div className="flex justify-end gap-3 mt-4">
              <button
                type="button"
                onClick={() => setOpenModal(false)}
                className="px-6 py-3 bg-neutral-200 hover:bg-neutral-300 text-neutral-800 rounded-lg cursor-pointer"
              >
                Cancelar
              </button>

              <button
                type="submit"
                className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg cursor-pointer"
              >
                Salvar Endereço
              </button>
            </div>
          </form>
        </Modal>
      </ClienteLayout>
    </>
  );
}
