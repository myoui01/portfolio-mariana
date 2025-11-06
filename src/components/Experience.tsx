const Experience = () => {
  const experiences = [
    {
      role: 'Desenvolvedor Fullstack',
      company: 'PTEC',
      period: 'abril/2025- ATUAL',
      description: 'Design, desenvolvimento e manutenção de plataformas de ensino, como Ambientes Virtuais de Aprendizagem e Sistemas de Gestão Acadêmica.',
    },
    {
      role: 'Estagiário de Business Inteligence',
      company: 'VALE',
      period: 'jan/2024 - mar/2025',
      description: 'Desenvolvimento de dashboards, apps e rotinas automatizadas. Gerenciamento do bancos de dados e geração de relatórios para área de Suprimentos.',
    },
    {
      role: 'Estagiário de Soluções de Desenvolvimento',
      company: 'green4T',
      period: 'ago/2023 - dez/2023',
      description: 'Programação de placas de IoT com interfaces web integradas. Design e desenvolvimento de aplicativos para monitoramento de dispositivos.',
    },
    {
      role: 'Estagiário de Desenvolvimento Fullstack',
      company: 'Teknisa',
      period: 'jan/2023 - jul/2023',
      description: 'Desenvolvimento de sistemas para o setor alimentício com Typescript e PHP. Participação no design de interfaces e funcionalidades backend.',
    },
  ]

  return (
    <section className="py-8 animate-slideInUp">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 tracking-tight">Experiência</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-6 group">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-800 group-hover:bg-gray-700 transition-colors"></div>
            {/* Timeline dot */}
            <div className="absolute left-[-4px] top-0 w-3 h-3 rounded-full bg-gray-800 group-hover:bg-gray-600 border-2 border-[#0a0a0a] transition-all duration-300"></div>
            
            <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300 hover:bg-gray-900/40">
              <div className="mb-3">
                <h3 className="text-white font-semibold text-lg mb-1">{exp.role}</h3>
                <p className="text-gray-300 font-medium">{exp.company}</p>
                <p className="text-gray-500 text-sm mt-1">{exp.period}</p>
              </div>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience

