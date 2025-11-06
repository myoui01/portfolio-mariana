import { useState } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import collectyImage from '../assets/collecty.png'

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const projects = [
    {
      id: 1,
      title: 'Collecty Card',
      image: collectyImage,
      link: 'https://www.linkedin.com/posts/mariana-marques-dev_ol%C3%A1-gostaria-de-compartilhar-o-aplicativo-activity-7208622268501942272-C5Zk?utm_source=share&utm_medium=member_desktop&rcm=ACoAADjWweABv1ezKgWVtJvTa-8ASWlUMb7a6l0',
    },
    {
      id: 2,
      title: 'Projeto 2',
      image: 'https://via.placeholder.com/400x250?text=Reppub',
      link: '#',
    },
    {
      id: 3,
      title: 'Projeto 3',
      image: 'https://via.placeholder.com/400x250?text=Reppub',
      link: '#',
    },
    {
      id: 4,
      title: 'Projeto 4',
      image: 'https://via.placeholder.com/400x250?text=PicPay',
      link: '#',
    },
    {
      id: 5,
      title: 'Projeto 5',
      image: 'https://via.placeholder.com/400x250'
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
                    <div className="p-5 flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-white font-semibold text-lg group-hover:text-gray-100 transition-colors">{project.title}</h3>
                        {!hasRealLink && (
                          <p className="text-gray-500 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Em breve será atualizado
                          </p>
                        )}
                      </div>
                      <span className={`text-gray-600 group-hover:text-white group-hover:translate-x-1 transition-all duration-200 text-xl ${!hasRealLink ? 'opacity-50' : ''}`}>
                        →
                      </span>
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

