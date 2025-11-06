const Skills = () => {
  const frontendSkills = [
    'React',
    'Angular',
    'TypeScript',
    'JavaScript (ES6+)',
    'HTML5',
    'CSS3',
    'SASS',
    'Figma',
    'UX/UI',
    'Next',
    "MFE's",
    'Redux',
    'Jest',
    'React Testing Library',
    'JSDoc',
  ]

  const backendSkills = [
    'Node.js (Express)',
    'NestJS',
    'Django (Python)',
    'Java (Spring Boot)',
    'REST APIs',
    'Autenticação JWT',
    'PostgreSQL',
    'MySQL',
    'MongoDB',
  ]

  const otherSkills = [
    'Git & GitHub',
    'Docker',
    'CI/CD (noções)',
    'Clean Code',
    'SOLID',
    'Design Patterns',
    'Microsserviços',
    'Arquitetura em Camadas',
    'Metodologias Ágeis (Scrum/Kanban)',
    'Documentação técnica',
    'Inglês Avançado',
  ]

  return (
    <section className="py-8 animate-slideInUp">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight">Habilidades</h2>

      {/* Detailed Skills */}
      <div className="space-y-6">
        <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800/50 hover:border-gray-700/50 transition-colors">
          <h3 className="text-lg md:text-xl font-semibold text-white mb-4">Front-end:</h3>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">{frontendSkills.join(', ')}</p>
        </div>

        <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800/50 hover:border-gray-700/50 transition-colors">
          <h3 className="text-lg md:text-xl font-semibold text-white mb-4">Back-end:</h3>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">{backendSkills.join(', ')}</p>
        </div>

        <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800/50 hover:border-gray-700/50 transition-colors">
          <h3 className="text-lg md:text-xl font-semibold text-white mb-4">Outros:</h3>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">{otherSkills.join(' • ')}</p>
        </div>
      </div>
    </section>
  )
}

export default Skills

