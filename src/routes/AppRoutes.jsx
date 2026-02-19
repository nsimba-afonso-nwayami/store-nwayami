import { Routes, Route } from "react-router-dom";
//Site
import Home from "../pages/site/Home";
import Produtos from "../pages/site/Produtos";
import DetalhesProduto from "../pages/site/DetalhesProduto";
import Categoria from "../pages/site/Categoria";
import Carrinho from "../pages/site/Carrinho";
import Sobre from "../pages/site/Sobre";
import Contato from "../pages/site/Contato";
import Checkout from "../pages/site/Checkout";
import PoliticaPrivacidade from "../pages/site/PoliticaPrivacidade";
import NotFound from "../pages/site/NotFound";

//Autenticação
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import RecuperarSenha from "../pages/auth/RecuperarSenha";

//dashboard cliente
import DashboardCliente from "../pages/cliente/DashboardCliente";
import MeusPedidos from "../pages/cliente/MeusPedidos";
import Enderecos from "../pages/cliente/Enderecos";
import PerfilCliente from "../pages/cliente/PerfilCliente";
import NotificacoesCliente from "../pages/cliente/NotificacoesCliente";
import NotFoundCliente from "../pages/cliente/NotFoundCliente";

export default function AppRoutes() {
  return (
    <Routes>
      {/*Rotas do site */}
      <Route path="/" element={<Home />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/produtos/detalhe/:id" element={<DetalhesProduto />} />
      <Route path="/categoria/:nome" element={<Categoria />} />
      <Route path="/carrinho" element={<Carrinho />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
      <Route path="*" element={<NotFound />} />

      {/*Rotas de autenticação */}
      <Route path="/login" element={<Login />} />
      <Route path="/criar-conta" element={<Register />} />
      <Route path="/recuperar-senha" element={<RecuperarSenha />} />

      {/*Rotas do dashboard cliente */}
      <Route path="/dashboard/cliente/">
        <Route path="" element={<DashboardCliente />} />
        <Route path="/dashboard/cliente/pedidos" element={<MeusPedidos />} />
        <Route path="/dashboard/cliente/enderecos" element={<Enderecos />} />
        <Route path="/dashboard/cliente/perfil" element={<PerfilCliente />} />
        <Route path="/dashboard/cliente/notificacoes" element={<NotificacoesCliente />} />
        <Route path="*" element={<NotFoundCliente />} />
      </Route>
    </Routes>
  );
}
