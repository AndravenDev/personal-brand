export default function Home() {
  const skills = [
    { name: "React", level: "Expert" },
    { name: "JavaScript", level: "Expert" },
    { name: "HTML", level: "Expert" },
    { name: "CSS", level: "Expert" },
    { name: "Git", level: "Advanced" },
    { name: "C#", level: "Intermediate" },
    { name: "SQL", level: "Basic" },
  ];

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-orange-400 to-orange-500 text-white py-32 px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-white/80 text-lg mb-4">Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Andrey Ivanov</h1>
          <h2 className="text-2xl md:text-3xl font-light mb-8">Frontend Developer</h2>
          <p className="text-xl text-white/80 max-w-2xl mb-10">
            With 5 years of experience crafting beautiful, responsive, and user-friendly web applications.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="#contact"
              className="bg-slate-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-slate-700 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-orange-500 transition-colors"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Skills & Expertise</h2>
          <p className="text-slate-500 mb-12 text-lg">Technologies I work with every day</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-slate-50 border-2 border-slate-200 rounded-xl p-6 hover:border-orange-400 hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{skill.name}</h3>
                <span className="text-orange-500 font-medium">{skill.level}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
          <p className="text-slate-500 mb-12 text-lg">Some of my recent work</p>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((project) => (
              <div
                key={project}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-orange-300 to-orange-500"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Project {project}</h3>
                  <p className="text-slate-500 mb-4">
                    A brief description of the project and the technologies used to build it.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">React</span>
                    <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm">TypeScript</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-8 bg-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
          </p>
          <a
            href="mailto:hello@example.com"
            className="inline-block bg-gradient-to-r from-orange-400 to-orange-500 text-white px-10 py-4 rounded-full font-semibold text-lg hover:from-orange-500 hover:to-orange-600 transition-all"
          >
            andro.m.ivanov@gmail.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-400">2026 Andrey Ivanov.</p>
        </div>
      </footer>
    </main>
  );
}
