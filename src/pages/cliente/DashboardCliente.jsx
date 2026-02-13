import ClienteLayout from "./components/ClienteLayout";
import { Link } from "react-router-dom";

export default function DashboardCliente() {
  // Pedidos recentes
  const listaPedidos = [
    {
      id: "NW-1001",
      produto: "Geladeira Frost Free",
      status: "Pendente",
      data: "12/02/2026",
    },
    {
      id: "NW-1002",
      produto: "Smart TV 55”",
      status: "Enviado",
      data: "10/02/2026",
    },
    {
      id: "NW-1003",
      produto: "Micro-ondas Digital",
      status: "Entregue",
      data: "05/02/2026",
    },
    {
      id: "NW-1004",
      produto: "Ar Condicionado 12000BTU",
      status: "Pendente",
      data: "01/02/2026",
    },
  ];

  // Contadores
  const pedidosPendentes = listaPedidos.filter(
    (p) => p.status === "Pendente",
  ).length;

  const pedidosEnviados = listaPedidos.filter(
    (p) => p.status === "Enviado",
  ).length;

  const pedidosEntregues = listaPedidos.filter(
    (p) => p.status === "Entregue",
  ).length;

  return (
    <>
      <title>Dashboard Cliente | Nwayami Store</title>

      <ClienteLayout title="Minha Conta">
        {/* RESUMO */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Total */}
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-orange-500">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-neutral-500">Total de Pedidos</p>
                <h3 className="text-2xl font-bold text-neutral-900">
                  {listaPedidos.length}
                </h3>
              </div>
              <i className="fas fa-box text-orange-500 text-2xl"></i>
            </div>
          </div>

          {/* Pendentes */}
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-yellow-500">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-neutral-500">Pendentes</p>
                <h3 className="text-2xl font-bold text-neutral-900">
                  {pedidosPendentes}
                </h3>
              </div>
              <i className="fas fa-clock text-yellow-500 text-2xl"></i>
            </div>
          </div>

          {/* Enviados */}
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-neutral-500">Enviados</p>
                <h3 className="text-2xl font-bold text-neutral-900">
                  {pedidosEnviados}
                </h3>
              </div>
              <i className="fas fa-truck text-blue-500 text-2xl"></i>
            </div>
          </div>

          {/* Entregues */}
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-neutral-500">Entregues</p>
                <h3 className="text-2xl font-bold text-neutral-900">
                  {pedidosEntregues}
                </h3>
              </div>
              <i className="fas fa-check-circle text-green-500 text-2xl"></i>
            </div>
          </div>
        </section>

        {/* PEDIDOS + AÇÕES */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* LISTA DE PEDIDOS */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-bold text-neutral-800 mb-4">
              Últimos Pedidos
            </h2>

            <ul className="divide-y divide-neutral-200">
              {listaPedidos.map((pedido, idx) => (
                <li key={idx} className="py-3 flex justify-between">
                  <div>
                    <p className="font-medium text-neutral-900">
                      {pedido.produto}
                    </p>
                    <p className="text-sm text-neutral-500">
                      Pedido {pedido.id} • {pedido.status}
                    </p>
                  </div>
                  <span className="text-sm text-neutral-500">
                    {pedido.data}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              to="/dashboard/cliente/pedidos"
              className="mt-4 inline-block text-sm font-semibold text-orange-500 hover:text-orange-600"
            >
              Ver todos os pedidos →
            </Link>
          </div>

          {/* AÇÕES RÁPIDAS */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-bold text-neutral-800 mb-4">
              Ações Rápidas
            </h2>

            <ul className="divide-y divide-neutral-200">
              <li className="py-3 flex justify-between items-center">
                <div>
                  <p className="font-medium text-neutral-900">Meus Pedidos</p>
                  <p className="text-sm text-neutral-500">
                    Acompanhe suas compras
                  </p>
                </div>
                <Link
                  to="/dashboard/cliente/pedidos"
                  className="px-3 py-1 text-sm bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold"
                >
                  Acessar
                </Link>
              </li>

              <li className="py-3 flex justify-between items-center">
                <div>
                  <p className="font-medium text-neutral-900">Editar Perfil</p>
                  <p className="text-sm text-neutral-500">
                    Atualize seus dados
                  </p>
                </div>
                <Link
                  to="/dashboard/cliente/perfil"
                  className="px-3 py-1 text-sm bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold"
                >
                  Acessar
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </ClienteLayout>
    </>
  );
}
