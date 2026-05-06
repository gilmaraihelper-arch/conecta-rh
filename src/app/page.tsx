import Link from "next/link";

export default async function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-zinc-900 mb-4">
          Conecta RH
        </h1>
        <p className="text-xl text-zinc-600 mb-8">
          Plataforma de recrutamento e seleção
        </p>
        
        <div className="flex gap-4">
          <Link 
            href="/vagas" 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Ver Vagas
          </Link>
          <Link 
            href="/login" 
            className="px-6 py-3 border border-zinc-300 rounded-lg hover:bg-zinc-100"
          >
            Login
          </Link>
        </div>

        <div className="mt-12 text-sm text-zinc-400">
          API: <Link href="/api/ping" className="underline">/api/ping</Link>
        </div>
      </div>
    </div>
  );
}