import ClienteLayout from "./components/ClienteLayout";
import { Link } from "react-router-dom";

export default function NotFoundCliente() {
  return (
    <>
      <title>Página não encontrada | Dashboard Cliente</title>

      <ClienteLayout title="Página não encontrada"></ClienteLayout>
    </>
  );
}
