import { Button } from "@/components/ui/button";
import { SmokeBackground } from "@/components/ui/spooky-smoke-animation";
import { SectionDivider } from "@/components/SectionDivider";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, Github, Linkedin, ExternalLink, Code, Zap, Palette } from "lucide-react";
import { useState } from "react";

/**
 * Design System: Dark Mode Sofisticado com Glassmorphism
 * - Fundo: Gradiente escuro (#0a0e27 → #1a1f3a)
 * - Acentos: Ciano (#00d9ff) e Roxo (#a855f7)
 * - Tipografia: Space Grotesk (títulos) + Inter (corpo)
 * - Componentes: Glassmorphism com backdrop blur e bordas semi-transparentes
 * - Animações: Fade-in ao scroll, hover effects com glow, transições suaves
 */

export default function Home() {
  const [activeTab, setActiveTab] = useState("projects");
  const aboutRef = useScrollReveal();
  const projectsRef = useScrollReveal();
  const skillsRef = useScrollReveal();
  const contactRef = useScrollReveal();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/10 bg-background/50">
        <div className="container flex items-center justify-between h-16">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Filipe Alves
          </div>
          <div className="flex gap-8 items-center">
            <a href="#about" className="hover:text-cyan-400 transition-colors">Sobre</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projetos</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Habilidades</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contato</a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Smoke Animation */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Smoke Background */}
        <div className="absolute inset-0 w-full h-full">
          <SmokeBackground smokeColor="#00d9ff" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 container text-center max-w-4xl mx-auto px-4">
          <div className="animate-fade-in space-y-6">
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
              Filipe Alves
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              Desenvolvedor Backend
            </p>
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
              
            </p>
            <div className="flex gap-4 justify-center pt-8">
              <Button 
                className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-8 py-6 text-lg rounded-lg glow-cyan"
              >
                Ver Projetos
              </Button>
              <Button 
                variant="outline" 
                className="border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-6 text-lg rounded-lg"
              >
                Contato
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider />

      {/* About Section */}
      <section id="about" className="py-20 relative z-20" ref={aboutRef}>
        <div className="container max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Sobre Mim
          </h2>
          <div className="glass-card p-8 md:p-12">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Sou estudante de Engenharia de Software e tenho muita vontade de criar soluções tecnológicas que realmente façam a diferença na vida das pessoas. Estou sempre buscando aprender mais, principalmente em lógica de programação, fundamentos da computação e boas práticas de desenvolvimento.
Tenho curiosidade, gosto de entender como as coisas funcionam por trás e estou sempre disposto a evoluir e encarar novos desafios.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              
            </p>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider />

      {/* Projects Section */}
      <section id="projects" className="py-20 relative z-20" ref={projectsRef}>
        <div className="container max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Projetos em Destaque
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="glass-card overflow-hidden group cursor-pointer">
              <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 group-hover:from-cyan-500/20 group-hover:to-purple-500/20 transition-all duration-300"></div>
                <Code className="w-16 h-16 text-cyan-400 relative z-10" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Sistema de Contatos</h3>
                <p className="text-gray-400 mb-4">
                  Aplicação para gerenciamento de contatos com armazenamento persistente e interface intuitiva.
                </p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm">Python</span>
                  <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm">SQLite</span>
                </div>
                  <a
                  href="https://github.com/Filipeffz/Sistema-de-contatos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 flex items-center gap-2 transition-colors">
                  Ver Projeto <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="glass-card overflow-hidden group cursor-pointer">
              <div className="h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-all duration-300"></div>
                <Palette className="w-16 h-16 text-purple-400 relative z-10" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Organizador de Arquivos</h3>
                <p className="text-gray-400 mb-4">
                  Ferramenta para organizar e gerenciar arquivos do sistema de forma eficiente.
                </p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm">Python</span>
                </div>
                 <a
                  href="https://github.com/Filipeffz/Organizador-de-arquivos--automa--o-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 flex items-center gap-2 transition-colors">
                  Ver Projeto <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="glass-card overflow-hidden group cursor-pointer">
              <div className="h-48 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 group-hover:from-emerald-500/20 group-hover:to-cyan-500/20 transition-all duration-300"></div>
                <Zap className="w-16 h-16 text-emerald-400 relative z-10" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Lista de Tarefas</h3>
                <p className="text-gray-400 mb-4">
                  Aplicação para gerenciar tarefas do dia a dia com persistência de dados.
                </p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-sm">Python</span>
                  <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm">SQLite</span>
                </div>
                 <a
                  href="https://github.com/Filipeffz/Listas-de-tarefas-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 flex items-center gap-2 transition-colors">
                  Ver Projeto <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Project 4 */}
            <div className="glass-card overflow-hidden group cursor-pointer">
              <div className="h-48 bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 group-hover:from-orange-500/20 group-hover:to-red-500/20 transition-all duration-300"></div>
                <Code className="w-16 h-16 text-orange-400 relative z-10" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Página de Login</h3>
                <p className="text-gray-400 mb-4">
                  Sistema de autenticação com validação de credenciais e armazenamento seguro.
                </p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-sm">Python</span>
                  <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-sm">SQLite</span>
                </div>
                 <a
                  href="https://github.com/Filipeffz/Pagina-de-login-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 flex items-center gap-2 transition-colors">
                  Ver Projeto <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider />

      {/* Skills Section */}
      <section id="skills" className="py-20 relative z-20" ref={skillsRef}>
        <div className="container max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Habilidades & Tecnologias
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Backend */}
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-4 text-purple-400">Backend</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Python</li>
                <li>• Java</li>
                <li>• SQLite</li>
                <li>• MySQL</li>
              </ul>
            </div>

            {/* Tools */}
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-4 text-emerald-400">Ferramentas</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Git</li>
                <li>• GitHub</li>
                <li>• VS Code</li>
                <li>• Spring Boot</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider />

      {/* Contact Section */}
      <section id="contact" className="py-20 relative z-20" ref={contactRef}>
        <div className="container max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Vamos Trabalhar Juntos?
          </h2>
          <div className="glass-card p-8 md:p-12">
            <p className="text-lg text-gray-300 mb-8 text-center">
              Estou sempre aberto a novas oportunidades e projetos interessantes. Sinta-se à vontade para entrar em contato!
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href="mailto:filipealvesfernandes152@gmail.com" className="flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan-500/20 border border-cyan-500/50 hover:bg-cyan-500/30 transition-colors">
                <Mail className="w-5 h-5" />
                Email
              </a>
              <a href="https://github.com/Filipeffz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-lg bg-purple-500/20 border border-purple-500/50 hover:bg-purple-500/30 transition-colors">
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/filipeffz/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan-500/20 border border-cyan-500/50 hover:bg-cyan-500/30 transition-colors">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 relative z-20">
        <div className="container text-center text-gray-400">
          <p>© 2026 Filipe Alves. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
