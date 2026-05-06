import Link from "next/link";

export default function Vagas() {
  const vagas = [
    { id: 1, titulo: "Desenvolvedor Frontend", empresa: "TechCorp", local: "Remoto", type: "CLT" },
    { id: 2, titulo: "Desenvolvedor Backend", empresa: "TechCorp", local: "Curitiba-PR", type: "PJ" },
    { id: 3, titulo: "Designer UX/UI", empresa: "Studio Digital", local: "Remoto", type: "CLT" },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 font-sans">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-zinc-900">Vagas Abertas</h1>
          <Link href="/" className="text-zinc-500 hover:text-zinc-700">← Início</Link>
        </div>
        
        <div className="space-y-4">
          {vagas.map((vaga) => (
            <div key={vaga.id} className="bg-white p-6 rounded-lg shadow-sm border border-zinc-200">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900">{vaga.titulo}</h3>
                  <p className="text-zinc-600">{vaga.empresa} • {vaga.local}</p>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                  {vaga.type}
                </span>
              </div>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
                Candidatar
              </button>
            </div>
          ))}
        </div>

        {vagas.length === 0 && (
          <div className="text-center py-12 text-zinc-500">
            Nenhuma vaga no momento. Volte em breve!
          </div>
        )}
      </div>
    </div>
  );
}