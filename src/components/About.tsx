const About = () => {
  return (
    <section className="py-8 animate-slideInUp">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight">Sobre mim</h2>
      <div className="space-y-6">
        <p className="text-lg md:text-xl text-gray-300 font-light flex items-center gap-2">
          <span>Desenvolvedora Fullstack | Entusiasta de Tecnologia | Estudante de Ciência da Computação</span>
        </p>
        <p className="text-gray-400 leading-relaxed text-base md:text-lg">
          Apaixonada por tecnologia e inovação, sou uma Desenvolvedora Fullstack com experiência em{' '}
          <span className="text-white font-medium">Business Intelligence, UI/UX Design, IoT e Desenvolvimento Fullstack</span>.
          Atualmente cursando Ciência da Computação, estou sempre buscando aprender e aplicar novas
          tecnologias para criar soluções inovadoras. Minha jornada na tecnologia tem sido marcada por um
          desejo constante de crescer e contribuir para projetos significativos.
        </p>
      </div>
    </section>
  )
}

export default About

