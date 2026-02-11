import { Routes, Route } from "react-router-dom";
//Site
import Home from "../pages/site/Home";
import Produtos from "../pages/site/Produtos";
import DetalhesProduto from "../pages/site/DetalhesProduto";
import Categoria from "../pages/site/Categoria";
import Carrinho from "../pages/site/Carrinho";
import  Sobre from "../pages/site/Sobre";
import  Contato from "../pages/site/Contato";
import  PoliticaPrivacidade from "../pages/site/PoliticaPrivacidade";
import NotFound from "../pages/site/NotFound";

//Autenticação
import Login from "../pages/auth/Login";

export default function AppRoutes() {
  return (
    <Routes>
      {/*Rotas do site */}
      <Route path="/" element={<Home />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/produtos/detalhe/:id" element={<DetalhesProduto />} />
      <Route path="/categoria/:nome" element={<Categoria />} />
      <Route path="/carrinho" element={<Carrinho />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
      <Route path="*" element={<NotFound />} />

      {/*Rotas de autenticação */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
