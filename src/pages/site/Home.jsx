import WhatsAppButton from "../../components/WhatsAppButton";
import Hero from "../../components/home/Hero";
import ProdutosDestaque from "../../components/home/ProdutosDestaque";
import Categorias from "../../components/home/Categorias";
import Marcas from "../../components/home/Marcas";

export default function Home() {
  return (
    <>
      <title>Nwayami Store</title>

      <Hero />
      <ProdutosDestaque />
      <Categorias />
      <Marcas />

      {/* Botão WhatsApp fixo */}
      <WhatsAppButton phone="244972614886" size={64} />
    </>
  );
}
