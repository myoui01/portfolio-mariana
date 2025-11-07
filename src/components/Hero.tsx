import { MdDownload } from 'react-icons/md'
import { FaGithub, FaLinkedin, FaBehance, FaWhatsapp } from 'react-icons/fa'
import { HiOutlineArrowRight } from 'react-icons/hi'
import euImage from '../assets/eu.jpg'
import cvFile from '../assets/CV Mariana.pdf'

const Hero = () => {
  return (
    <section className="pt-12 md:pt-16 pb-16 md:pb-24 animate-fadeIn">
      <div className="flex flex-col items-center text-center">
        {/* Profile Picture with Decorative Elements */}
        <div className="relative mb-6 md:mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-full blur-2xl opacity-20 animate-pulse"></div>
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 overflow-hidden border-2 border-gray-700/50 shadow-2xl group">
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-700/20 to-transparent"></div>
            <img
              src={euImage}
              alt="Mariana Marques"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 relative z-10"
            />
          </div>
        </div>

        {/* Main Info */}
        <div className="space-y-3 mb-6 md:mb-8">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-2 md:mb-3">
              Mariana Marques
            </h1>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-gray-700"></div>
              <p className="text-xl md:text-2xl text-gray-400 font-light">
                Desenvolvedora Fullstack
              </p>
              <div className="h-px w-12 bg-gray-700"></div>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-8 md:mb-10">
          Desenvolvedora Fullstack apaixonada por criar soluções inovadoras e impactantes.
          Especializada em desenvolvimento web moderno e arquitetura de sistemas escaláveis. Com experiência em UI/UX design.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 md:mb-10">
          <a
            href="https://wa.me/5531984946938"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <FaWhatsapp className="text-lg" />
            <span>Entre em contato</span>
            <HiOutlineArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href={cvFile}
            download="Mariana-Marques-CV.pdf"
            className="group inline-flex items-center gap-3 px-6 py-3 bg-gray-900 text-white border border-gray-700 rounded-lg font-medium hover:bg-gray-800 hover:border-gray-600 transition-all duration-200 hover:scale-105"
          >
            <MdDownload className="text-lg" />
            <span>Baixar CV</span>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6">
          <a 
            href="https://github.com/myoui01" 
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 bg-gray-900/50 border border-gray-800/50 rounded-lg text-gray-400 hover:text-white hover:border-gray-600 hover:bg-gray-800/50 transition-all duration-200 hover:scale-110"
            aria-label="Github"
          >
            <FaGithub className="text-xl" />
          </a>
          <a 
            href="https://www.linkedin.com/in/mariana-marques-dev/" 
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 bg-gray-900/50 border border-gray-800/50 rounded-lg text-gray-400 hover:text-white hover:border-gray-600 hover:bg-gray-800/50 transition-all duration-200 hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-xl" />
          </a>
          <a 
            href="https://www.behance.net/marianamarques108" 
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 bg-gray-900/50 border border-gray-800/50 rounded-lg text-gray-400 hover:text-white hover:border-gray-600 hover:bg-gray-800/50 transition-all duration-200 hover:scale-110"
            aria-label="Behance"
          >
            <FaBehance className="text-xl" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero

