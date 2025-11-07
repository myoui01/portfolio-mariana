import { useState } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'
import collectyImage from '../assets/collecty.png'

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const projects = [
    {
      id: 1,
      title: 'Collecty Card',
      image: collectyImage,
      link: 'https://www.linkedin.com/posts/mariana-marques-dev_ol%C3%A1-gostaria-de-compartilhar-o-aplicativo-activity-7208622268501942272-C5Zk?utm_source=share&utm_medium=member_desktop&rcm=ACoAADjWweABv1ezKgWVtJvTa-8ASWlUMb7a6l0',
      github: 'https://github.com/myoui01/app_collecty',
      techs: ['Figma', 'TypeScript', 'Angular + Ionic', 'Firebase'],
      summary:
        'O CollectyCard combina um sistema de vendas com uma rede social para quem coleciona cards de K-pop, oferecendo uma experiência completa para fãs e vendedores.',
      impact:
        'Mesmo sendo um nicho específico, o aplicativo conquistou a comunidade: o vídeo de apresentação já ultrapassou 25 mil visualizações no Twitter e recebeu diversos comentários positivos.',
      context:
        'As vendas acontecem hoje de forma informal em redes sociais. O Collecty propõe resolver esse problema com mais organização, segurança e eficiência para colecionadores.',
      extra:
        'Disponibilizei uma landing page com vídeo demonstrativo, link para o repositório no GitHub e todas as telas desenhadas do produto.',
    },
    {
      id: 2,
      title: 'Projeto 2',
      image: 'https://via.placeholder.com/400x250?text=Reppub',
      link: '#',
      techs: [],
      summary: 'Em breve adicionarei mais detalhes sobre este projeto.',
    },
    {
      id: 3,
      title: 'Projeto 3',
      image: 'https://via.placeholder.com/400x250?text=Reppub',
      link: '#',
      techs: [],
      summary: 'Em breve adicionarei mais detalhes sobre este projeto.',
    },
    {
      id: 4,
      title: 'Projeto 4',
      image: 'https://via.placeholder.com/400x250?text=PicPay',
      link: '#',
      techs: [],
      summary: 'Em breve adicionarei mais detalhes sobre este projeto.',
    },
    {
      id: 5,
      title: 'Projeto 5',
      image: 'https://via.placeholder.com/400x250',
      link: '#',
      techs: [],
      summary: 'Em breve adicionarei mais detalhes sobre este projeto.',
    },
  ]

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section className="py-8 animate-slideInUp">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Projetos</h2>
        <div className="flex items-center gap-2">
          <span className="text-gray-400 text-sm">
            {currentIndex + 1} / {projects.length}
          </span>
        </div>
      </div>

      {/* Carrossel */}
      <div className="relative">
        <div className="overflow-hidden rounded-xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project) => {
              const hasRealLink = project.link && project.link !== '#'
              const hasImage = project.image && !project.image.includes('via.placeholder.com')
              
              return (
                <div key={project.id} className="min-w-full">
                  <div
                    className={`group bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-black/20 block ${hasRealLink ? '' : 'relative'}`}
                    onClick={() => {
                      if (hasRealLink && project.link) {
                        window.open(project.link, '_blank', 'noopener,noreferrer')
                      }
                    }}
                  >
                    <div className="aspect-video bg-gray-800/50 overflow-hidden relative">
                      {hasImage ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-gray-800/80 to-gray-900/80"></div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      {!hasRealLink && (
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-white text-sm font-medium px-4 py-2 bg-gray-900/80 rounded-lg border border-gray-700/50">
                            Em breve será atualizado
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-white font-semibold text-xl group-hover:text-gray-100 transition-colors">
                            {project.title}
                          </h3>
                        </div>
                        {project.github && project.github !== '#' && (
                          <button
                            onClick={(event) => {
                              event.stopPropagation()
                              window.open(project.github, '_blank', 'noopener,noreferrer')
                            }}
                            className="text-gray-500 hover:text-white transition-colors duration-200"
                            aria-label={`Abrir repositório GitHub de ${project.title}`}
                          >
                            <FaGithub className="w-6 h-6" />
                          </button>
                        )}
                      </div>

                      {project.techs && project.techs.length > 0 && (
                        <div className="space-y-2">
                          <div className="flex flex-wrap gap-2">
                            {project.techs.map((tech) => (
                              <span
                                key={tech}
                                className="text-xs text-gray-200 bg-gray-800/80 border border-gray-700/50 rounded-full px-3 py-1"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {project.summary && (
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {project.summary}
                        </p>
                      )}
                      {(project.impact || project.context || project.extra) && (
                        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                          {project.impact && <p>{project.impact}</p>}
                          {project.context && <p>{project.context}</p>}
                          {project.extra && <p>{project.extra}</p>}
                        </div>
                      )}

                      <div className="flex items-center justify-end">
                        <span
                          className={`text-gray-600 group-hover:text-white group-hover:translate-x-1 transition-all duration-200 text-xl ${!hasRealLink ? 'opacity-50' : ''}`}
                        >
                          →
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Navigation Buttons */}
        {projects.length > 1 && (
          <>
            <button
              onClick={prevProject}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-900/80 hover:bg-gray-900 text-white p-3 rounded-full border border-gray-700/50 backdrop-blur-sm transition-all duration-200 hover:scale-110 z-10"
              aria-label="Projeto anterior"
            >
              <HiChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-900/80 hover:bg-gray-900 text-white p-3 rounded-full border border-gray-700/50 backdrop-blur-sm transition-all duration-200 hover:scale-110 z-10"
              aria-label="Próximo projeto"
            >
              <HiChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'w-8 bg-white'
                  : 'w-2 bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Ir para projeto ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

