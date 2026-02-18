import React from 'react';
import { Facebook, Instagram, MessageCircle, ExternalLink, Code2, Cpu, Globe } from 'lucide-react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            ArhatZz
          </div>
          <div className="flex gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        
        {/* Hero Section */}
        <section className="mb-24 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            I'm <span className="text-white">ArhatZz</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl leading-relaxed">
            Full-stack Developer | UI-UX Enthusiast 
            <br />
            <span className="text-cyan-400/80 text-lg">Building digital experiences with Next.js & Tailwind CSS.</span>
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            <a href="#" className="p-3 bg-slate-900 rounded-xl hover:bg-blue-600 transition-all hover:-translate-y-1">
              <Facebook size={24} />
            </a>
            <a href="#" className="p-3 bg-slate-900 rounded-xl hover:bg-pink-600 transition-all hover:-translate-y-1">
              <Instagram size={24} />
            </a>
            <a href="#" className="p-3 bg-slate-900 rounded-xl hover:bg-green-600 transition-all hover:-translate-y-1">
              <MessageCircle size={24} />
            </a>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-20">
          <h2 className="text-2xl font-bold mb-10 flex items-center gap-2">
            <Code2 className="text-cyan-400" /> Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2].map((project) => (
              <div key={project} className="group bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all">
                <div className="aspect-video bg-slate-800 rounded-lg mb-4 overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center text-slate-600 group-hover:scale-110 transition-transform">
                    [Project Thumbnail {project}]
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Project Title {project}</h3>
                <p className="text-slate-400 text-sm mb-4">
                  A high-performance web application built using Next.js 14, 
                  focusing on user experience and clean code architecture.
                </p>
                <div className="flex gap-2">
                  <span className="text-[10px] px-2 py-1 bg-slate-800 rounded uppercase font-bold text-cyan-400">Next.js</span>
                  <span className="text-[10px] px-2 py-1 bg-slate-800 rounded uppercase font-bold text-blue-400">Tailwind</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-10 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} ArhatZz. Built with Next.js & Tailwind CSS</p>
        </footer>
      </main>
    </div>
  );
}
