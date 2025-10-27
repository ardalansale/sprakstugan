import { Users, Heart, Target } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero-sektion */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Om Språkstugan</h1>
          <p className="text-xl opacity-90">
            Vi skapar mötesplatser för språkinlärare att träffas, öva och växa tillsammans.
          </p>
        </div>
      </section>

      {/* Innehåll-section */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        {/* Mission */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <Target size={32} className="text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-800">Vår Mission</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Språkstugan är en community-driven plattform dedikerad till att göra svenska språkinlärning tillgänglig, rolig och socialt meningsfull. Vi tror att det bästa sättet att lära sig ett språk är genom verklig interaktion med andra människor.
          </p>
        </div>

        {/* Values */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <Heart size={32} className="text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-800">Våra Värden</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Inkludering</h3>
              <p className="text-gray-700">
                Vi välkomnar alla nivåer - från nybörjare till avancerad. Oavsett bakgrund eller tidigare erfarenhet.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Gemenskap</h3>
              <p className="text-gray-700">
                Genom att träffas tillsammans skapar vi en stödjande miljö där alla kan växa och utvecklas.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Tillgänglighet</h3>
              <p className="text-gray-700">
                Vi organiserar aktiviteter på olika tider och platser för att passa alla.
              </p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <Users size={32} className="text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-800">Vem är vi?</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Språkstugan grundades av en grupp språkentusiaster som insåg behovet av mötesplatser för svenska språkinlärare. Vi är ett team av volontärer och språkinlärare som själva förstår utmaningarna med att lära sig ett nytt språk.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Vår passion är att skapa en welcoming miljö där människor från olika bakgrunder kan träffas, öva svenska och bygga nya vänskaper.
          </p>
        </div>

        {/* Activities */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Vad vi erbjuder</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-3">
              <span className="text-blue-600 font-bold">•</span>
              Språkcaféer och informella träffar
            </li>
            <li className="flex items-center gap-3">
              <span className="text-blue-600 font-bold">•</span>
              Konversationsgrupper för olika nivåer
            </li>
            <li className="flex items-center gap-3">
              <span className="text-blue-600 font-bold">•</span>
              Sociala aktiviteter och utflykter
            </li>
            <li className="flex items-center gap-3">
              <span className="text-blue-600 font-bold">•</span>
              Möjlighet att träffa andra språkinlärare
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Vill du vara med?</h3>
          <p className="text-lg text-gray-700 mb-6">
            Kom och deltag i en av våra aktiviteter och blir del av Språkstugan-communityn!
          </p>
          <a
            href="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Se alla aktiviteter
          </a>
        </div>
      </section>
    </main>
  );
}