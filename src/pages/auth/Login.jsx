import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <title>Entrar | Nwayami Store</title>

      <section className="w-full min-h-screen flex items-center justify-center bg-neutral-100 py-16">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
          {/* Ícone do carrinho */}
          <div className="flex justify-center mb-4">
            <i className="fa-solid fa-cart-shopping text-4xl text-orange-500"></i>
          </div>

          <h1 className="text-3xl font-bold text-neutral-800 mb-6 text-center">
            Entrar na Nwayami Store
          </h1>

          <form className="flex flex-col gap-4">
            {/* Email */}
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-neutral-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="seuemail@exemplo.com"
                className="px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Senha */}
            <div className="flex flex-col">
              <label
                htmlFor="senha"
                className="text-sm font-semibold text-neutral-700 mb-1"
              >
                Senha
              </label>
              <input
                type="password"
                id="senha"
                placeholder="Digite sua senha"
                className="px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Esqueceu a senha */}
            <div className="text-right">
              <Link
                to="/recuperar-senha"
                className="text-sm text-orange-500 hover:underline"
              >
                Esqueceu a senha?
              </Link>
            </div>

            {/* Botão login */}
            <button
              type="submit"
              className="w-full cursor-pointer bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
            >
              Entrar
            </button>
          </form>

          {/* Link para registro */}
          <p className="text-sm text-neutral-500 mt-4 text-center">
            Não tem uma conta?{" "}
            <Link
              to="/criar-conta"
              className="text-orange-500 font-semibold hover:underline"
            >
              Cadastre-se
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
