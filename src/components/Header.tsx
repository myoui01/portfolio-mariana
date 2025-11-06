import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

const Header = () => {
  const [activeSection, setActiveSection] = useState('Início')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Habilidades', href: '#habilidades' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'Experiência', href: '#experiencia' },
    { name: 'Contato', href: '#contato' }
  ]

  const handleNavClick = (itemName: string) => {
    setActiveSection(itemName)
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-gray-900/50">
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <div className="flex items-center">
            <a 
              href="#inicio" 
              onClick={() => handleNavClick('Início')}
              className="text-xl font-semibold text-white tracking-tight hover:text-gray-300 transition-colors cursor-pointer"
            >
              Mariana Marques
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  onClick={() => handleNavClick(item.name)}
                  className={`relative px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-lg block ${
                    activeSection === item.name
                      ? 'text-white'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-1.5">
                    {item.name}
                  </span>
                  
                  {/* Active indicator - subtle background */}
                  {activeSection === item.name && (
                    <span className="absolute inset-0 bg-gray-900/50 rounded-lg -z-0"></span>
                  )}
                  
                  {/* Hover effect */}
                  <span className="absolute inset-0 bg-gray-900/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-0"></span>
                </a>
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-900/50 mt-2 pt-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => handleNavClick(item.name)}
                  className={`px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-lg ${
                    activeSection === item.name
                      ? 'text-white bg-gray-900/50'
                      : 'text-gray-400 hover:text-white hover:bg-gray-900/30'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header

