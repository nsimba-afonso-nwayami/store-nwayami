import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/home/Hero";
import ProdutosDestaque from "../../components/home/ProdutosDestaque";

export default function Home() {
  return (
    <>
      <title>Nwayami Store</title>

      {/* Header */}
      <Header />
      
      <Hero />
      <ProdutosDestaque />

      {/* Footer */}
      <Footer />
    </>
  );
}
