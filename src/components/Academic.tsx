import { MdLocationOn } from 'react-icons/md'

const Academic = () => {
  const academic = [
    {
      location: 'Belo Horizonte, MG',
      degree: 'Ciência da Computação',
      institution: 'FUMEC',
      description: 'Graduação em Ciência da Computação com foco em desenvolvimento de software e arquitetura de sistemas. Principais disciplinas: Linguagens e Técnicas de Programação, Bancos de Dados, Programação Orientada a Objetos, Estruturas de Dados, Desenvolvimento Web Front-End e Back-End, Desenvolvimento Mobile, Inteligência Artificial etc.',
    },
    {
      location: 'Belo Horizonte, MG',
      degree: 'Técnico em Informática',
      institution: 'IFMG',
      description: 'Curso técnico com ênfase em programação, banco de dados e desenvolvimento de sistemas. Estudei sistemas operacionais, aplicativos e periféricos para desktops e servidores. Desenvolvi e documentei aplicativos para desktop com acesso à web e banco de dados. Realizei manutenção em computadores de uso geral. Instalei e configurei pequenas redes locais de computadores.',
    },
  ]

  return (
    <section className="py-8 animate-slideInUp">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 tracking-tight">Formação Acadêmica</h2>
      <div className="space-y-8">
        {academic.map((item, index) => (
          <div key={index} className="relative pl-6 group">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-800 group-hover:bg-gray-700 transition-colors"></div>
            {/* Timeline dot */}
            <div className="absolute left-[-4px] top-0 w-3 h-3 rounded-full bg-gray-800 group-hover:bg-gray-600 border-2 border-[#0a0a0a] transition-all duration-300"></div>
            
            <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300 hover:bg-gray-900/40">
              <div className="mb-3">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                  <MdLocationOn />
                  <span>{item.location}</span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-1">{item.degree}</h3>
                <p className="text-gray-300 font-medium">{item.institution}</p>
              </div>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Academic

