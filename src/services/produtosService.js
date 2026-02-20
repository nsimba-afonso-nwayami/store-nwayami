import { api } from "./api";

/**
 * Listar todos os produtos
 */
export async function listarProdutos() {
  const response = await api.get("produtos/");
  return response.data;
}

/**
 * Buscar produto por ID
 */
export async function buscarProdutoPorId(id) {
  const response = await api.get(`produtos/${id}/`);
  return response.data;
}