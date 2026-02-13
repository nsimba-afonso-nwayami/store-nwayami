import { useState } from "react";
import ClienteLayout from "./components/ClienteLayout";
import Modal from "./components/Modal";

export default function MeusPedidos() {
  const [filtroStatus, setFiltroStatus] = useState("");
  const [busca, setBusca] = useState("");
  const [openDetalhes, setOpenDetalhes] = useState(false);
  const [pedidoSelecionado, setPedidoSelecionado] = useState(null);

  const meusPedidos = [
    {
      id: "NW-1001",
      produto: "Geladeira Frost Free",
      data: "12/02/2026",
      valor: "850.000 AKZ",
      status: "Pendente",
    },
    {
      id: "NW-1002",
      produto: "Smart TV 55”",
      data: "10/02/2026",
      valor: "420.000 AKZ",
      status: "Enviado",
    },
    {
      id: "NW-1003",
      produto: "Micro-ondas Digital",
      data: "05/02/2026",
      valor: "95.000 AKZ",
      status: "Entregue",
    },
    {
      id: "NW-1004",
      produto: "Ferro de Engomar",
      data: "02/02/2026",
      valor: "35.000 AKZ",
      status: "Cancelado",
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Pendente":
        return "bg-yellow-100 text-yellow-700";
      case "Enviado":
        return "bg-blue-100 text-blue-700";
      case "Entregue":
        return "bg-green-100 text-green-700";
      case "Cancelado":
        return "bg-red-100 text-red-700";
      default:
        return "bg-neutral-200 text-neutral-700";
    }
  };

  const pedidosFiltrados = meusPedidos.filter((item) => {
    const matchBusca = item.produto.toLowerCase().includes(busca.toLowerCase());

    const matchStatus = filtroStatus ? item.status === filtroStatus : true;

    return matchBusca && matchStatus;
  });

  const abrirDetalhes = (item) => {
    setPedidoSelecionado(item);
    setOpenDetalhes(true);
  };

  return (
    <>
      <title>Meus Pedidos | Nwayami Store</title>

      <ClienteLayout title="Meus Pedidos">
        {/* FILTROS */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-6 flex flex-col lg:flex-row gap-4 items-center">
          <input
            type="text"
            placeholder="Buscar por produto..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="p-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-orange-500 w-full lg:flex-1"
          />

          <select
            value={filtroStatus}
            onChange={(e) => setFiltroStatus(e.target.value)}
            className="w-full lg:w-auto p-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
          >
            <option value="">Todos os status</option>
            <option>Pendente</option>
            <option>Enviado</option>
            <option>Entregue</option>
            <option>Cancelado</option>
          </select>
        </div>

        {/* LISTA DE PEDIDOS */}
        <div className="flex flex-col gap-4">
          {pedidosFiltrados.map((item) => (
            <div
              key={item.id}
              className="bg-neutral-50 border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-between items-center mb-2">
                <div>
                  <p className="font-semibold text-neutral-900">
                    {item.produto}
                  </p>
                  <p className="text-neutral-500 text-sm">Pedido {item.id}</p>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyle(
                    item.status,
                  )}`}
                >
                  {item.status}
                </span>
              </div>

              <p className="text-neutral-600 text-sm">
                Data: <strong>{item.data}</strong>
              </p>
              <p className="text-neutral-600 text-sm">
                Valor: <strong>{item.valor}</strong>
              </p>

              <div className="flex justify-end items-center mt-4">
                <button
                  onClick={() => abrirDetalhes(item)}
                  className="text-orange-500 hover:text-orange-600 cursor-pointer flex items-center gap-1 text-sm font-semibold"
                >
                  <i className="fas fa-eye"></i> Ver Detalhes
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL DETALHES */}
        <Modal
          isOpen={openDetalhes}
          onClose={() => setOpenDetalhes(false)}
          title="Detalhes do Pedido"
          icon="fas fa-box"
        >
          {pedidoSelecionado && (
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-6">
                <h2 className="text-xl font-bold text-neutral-800">
                  {pedidoSelecionado.produto}
                </h2>
                <p className="text-neutral-500">Produto</p>
                <span
                  className={`inline-block mt-3 px-4 py-1 rounded-full text-xs font-semibold ${getStatusStyle(
                    pedidoSelecionado.status,
                  )}`}
                >
                  {pedidoSelecionado.status}
                </span>
              </div>

              <div className="bg-white border border-neutral-200 rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-neutral-500">Número do Pedido</p>
                  <p className="font-semibold text-neutral-800">
                    {pedidoSelecionado.id}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-neutral-500">Data</p>
                  <p className="font-semibold text-neutral-800">
                    {pedidoSelecionado.data}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-neutral-500">Valor</p>
                  <p className="font-semibold text-neutral-800">
                    {pedidoSelecionado.valor}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-neutral-500">Status</p>
                  <p className="font-semibold text-neutral-800">
                    {pedidoSelecionado.status}
                  </p>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setOpenDetalhes(false)}
                  className="px-6 py-2 bg-neutral-200 hover:bg-neutral-300 text-neutral-800 rounded-lg cursor-pointer"
                >
                  Fechar
                </button>
              </div>
            </div>
          )}
        </Modal>
      </ClienteLayout>
    </>
  );
}
