import { MdFavorite } from 'react-icons/md'

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
            <p className="text-gray-600 text-sm flex items-center justify-center gap-1">
              <span>2025 | Designed and coded with</span>
              <MdFavorite className="text-red-500" />
              <span>by Mariana Marques</span>
            </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

