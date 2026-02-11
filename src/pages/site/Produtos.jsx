import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Produtoss from "../../components/produtos/Produtos";

export default function Produtos() {
  return (
    <>
      <title>Produtos | Nwayami Store</title>

      {/* Header */}
      <Header />

      <Produtoss />

      {/* Footer */}
      <Footer />
    </>
  );
}
