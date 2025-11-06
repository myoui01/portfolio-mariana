import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Academic from './components/Academic'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen text-white bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-30">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gray-800/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gray-700/20 rounded-full blur-3xl"></div>
        
        {/* Subtle Lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-900/50 to-transparent"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-900/50 to-transparent"></div>
      </div>
      
      <div className="relative z-10">
        <Header />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <section id="inicio">
          <Hero />
        </section>
        <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-800 to-transparent my-8"></div>
        <section id="sobre">
          <About />
        </section>
        <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-800 to-transparent my-8"></div>
        <section id="habilidades">
          <Skills />
        </section>
        <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-800 to-transparent my-8"></div>
        <section id="projetos">
          <Projects />
        </section>
        <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-800 to-transparent my-8"></div>
        <section id="experiencia">
          <Experience />
        </section>
        <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-800 to-transparent my-8"></div>
        <section id="contato">
          <Academic />
          <Footer />
        </section>
      </main>
      </div>
    </div>
  )
}

export default App

