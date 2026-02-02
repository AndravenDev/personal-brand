export default function Home() {
  const skills = [
    {
      name: "React",
      level: "Expert",
      description: "This is my bread and butter. I've worked on lots of different projects with React over the years.",
    },
    {
      name: "JavaScript",
      level: "Expert",
      description: "Being the default frontend programming language, I've used JS for all my years as a developer.",
    },
    {
      name: "TypeScript",
      level: "Advanced",
      description: "TS is like C# and JS had a child, so I always liked it. It brings the type safety I missed from C#.",
    },
    {
      name: "HTML",
      level: "Expert",
      description: "I started learning basic HTML in high school and ended up becoming a frontend dev.",
    },
    {
      name: "CSS",
      level: "Expert",
      description: "CSS was pretty difficult at the beginning, but now it's like second nature.",
    },
    {
      name: "Git",
      level: "Advanced",
      description: "Git seemed intimidating at first, but after years of using it I cannot imagine my workflow without it.",
    },
    {
      name: "C#",
      level: "Intermediate",
      description: "The first programming language I learned, so it has a special place in my heart. I eventually landed a fullstack position where I was happy to reunite with it.",
    },
    {
      name: "SQL",
      level: "Basic",
      description: "When I got into fullstack I had to learn SQL. It was actually pretty interesting and I still use it in my day to day work.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-orange-400 to-orange-500 text-white py-32 px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-white/80 text-lg mb-4">Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Andrey Ivanov</h1>
          <h2 className="text-2xl md:text-3xl font-light mb-8">Frontend Developer</h2>
          <p className="text-xl text-white/80 max-w-2xl mb-10">
            With over 5 years of experience crafting beautiful, responsive, and user-friendly web applications.
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
              My Experience
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Skills & Expertise</h2>
          <p className="text-slate-500 mb-12 text-lg">Technologies I work with every day</p>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-slate-50 border-2 border-slate-200 rounded-xl p-6 hover:border-orange-400 hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-slate-800">{skill.name}</h3>
                  <span className="text-orange-500 font-medium text-sm">{skill.level}</span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Professional Experience</h2>
          <p className="text-slate-500 mb-12 text-lg">Projects I've contributed to throughout my career</p>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-orange-400">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">Education</span>
                <span className="text-slate-400 text-sm">Fullstack Developer</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Course Learning Platform</h3>
              <p className="text-slate-500">
                Delivered a complete UI overhaul giving the website a fresh new look. The interesting challenge here was working against the clock to deliver before the holidays — and we made it!
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-orange-400">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">Education</span>
                <span className="text-slate-400 text-sm">Fullstack Developer</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">University Management System</h3>
              <p className="text-slate-500">
                An educational platform used by big universities to manage complex paperwork. Here I transitioned to fullstack, utilizing my C# knowledge and learning SQL. A big challenge was leading a full-scale UI facelift for the entire website.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-orange-400">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">Fintech</span>
                <span className="text-slate-400 text-sm">Frontend Developer</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">European Bank UI Overhaul</h3>
              <p className="text-slate-500">
                I was part of a complete UI overhaul for a European bank, modernizing their digital banking experience and improving the overall user interface.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-orange-400">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">Enterprise</span>
                <span className="text-slate-400 text-sm">Frontend Developer</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Product & Project Management Platform</h3>
              <p className="text-slate-500">
                Worked on a large project for a major company in the product and project management sector. Here we focused heavily on the accessibility aspect, ensuring the platform was usable by everyone.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-orange-400">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">Education</span>
                <span className="text-slate-400 text-sm">Frontend Developer</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">American Educational Platform</h3>
              <p className="text-slate-500">
                One of my all-time favorite projects. A really interesting educational platform for the American market where I learned React, TypeScript, and many other soft skills. Loved every moment working on this one.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-orange-400">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">Fintech</span>
                <span className="text-slate-400 text-sm">Junior Developer</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Middle East Banking Software</h3>
              <p className="text-slate-500">
                After getting promoted to junior, I joined a large-scale banking project. Developing banking software was quite the challenge, and here I learned a lot about collaboration and communication in bigger teams.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-orange-400">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">Healthcare</span>
                <span className="text-slate-400 text-sm">2020 · Intern</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">AI-Powered Healthcare Platform</h3>
              <p className="text-slate-500">
                Started my career working on a revolutionary project that used AI to make hospital bureaucracy easier to understand for patients. This was quite ahead of its time, before the big AI boom.
              </p>
            </div>
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
            href="https://www.upwork.com/freelancers/~010c104f3c1e4096e6?mp_source=share"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-orange-400 to-orange-500 text-white px-10 py-4 rounded-full font-semibold text-lg hover:from-orange-500 hover:to-orange-600 transition-all"
          >
            Hire me on Upwork
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
