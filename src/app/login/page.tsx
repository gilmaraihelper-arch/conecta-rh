import Link from "next/link";

export default function Login() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans">
      <div className="max-w-md mx-auto px-6 py-20">
        <h1 className="text-2xl font-bold text-zinc-900 mb-6">
          Login - Conecta RH
        </h1>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">
              Email
            </label>
            <input 
              type="email" 
              className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="seu@email.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">
              Senha
            </label>
            <input 
              type="password" 
              className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="••••••••"
            />
          </div>
          
          <button 
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
          >
            Entrar
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-zinc-500">
          Não tem conta? <Link href="/cadastro" className="text-blue-600 hover:underline">Cadastre-se</Link>
        </div>
        
        <div className="mt-8 text-center">
          <Link href="/" className="text-sm text-zinc-400 hover:underline">← Voltar</Link>
        </div>
      </div>
    </div>
  );
}