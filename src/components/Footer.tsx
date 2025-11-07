import { FaLinkedin } from 'react-icons/fa'
import { HiOutlineArrowRight } from 'react-icons/hi'

const Footer = () => {
  return (
    <footer className="border-t border-gray-900/50 py-16 mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
            Obrigada por visitar meu portfólio!
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Sinta-se à vontade para entrar em contato comigo se estiver procurando um desenvolvedor,
            tiver alguma dúvida ou simplesmente quiser se conectar.
          </p>
          <a
            href="https://www.linkedin.com/in/mariana-marques-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <FaLinkedin className="text-lg" />
            <span>Fale comigo no LinkedIn</span>
            <HiOutlineArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

