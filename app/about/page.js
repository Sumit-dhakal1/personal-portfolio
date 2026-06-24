export default function About() {
  const skills = [
    "React", "Next.js", "Node.js", "NumPy", "Pandas",
    "Servlet", "MongoDB", "Tailwind CSS", "JavaScript",
    "TypeScript", "MySQL",
  ];

  const approaches = [
    { label: "Design",       desc: "Clean layouts and intuitive structure planned before a single line of code is written." },
    { label: "Development",  desc: "Turning designs into production-ready code with modern frameworks and clean architecture." },
    { label: "Scalability",  desc: "Systems built to grow — maintainable architecture that handles real-world user load." },
    { label: "Security",     desc: "Protecting data and users through secure design patterns and threat-aware development." },
    { label: "Performance",  desc: "Efficient, fast experiences through optimization at every layer of the stack." },
  ];

  const projects = [
    "Inventory Management System",
    "Vehicle Booking System",
    "Anti-Theft Bike Detection",
    "Civic Watch",
  ];

  return (
    <main className="bg-white text-gray-900 min-h-screen font-sans">

      {/* ── Hero ── */}
      <section className="max-w-6xl mx-auto px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* Left */}
        <div>
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-black-900 mb-5">
            I build modern web apps &{" "}
            <span className="text-green-400">scalable software</span>
          </h1>
          <p className="text-black-500 text-base leading-relaxed max-w-md">
            Passionate about blending creative UI design with robust backend systems.
            I focus on reliable, performant applications that solve real problems.
          </p>

          {/* Contact */}
          <div className="mt-20 flex flex-col gap-3">
            {[
              { icon: "✉", label: "sumitdhakal51@gmail.com", href: "mailto:sumitdhakal51@gmail.com" },
              { icon: "☏", label: "+977-9827443797",         href: "tel:+9779827443797" },
              { icon: "⌖", label: "Itahari-04, Sunsari, Nepal", href: "#" },
            ].map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-3  text-black-600 group no-underline"
              >
            
                <span className="group-hover:text-sky-500 transition-colors duration-200">{label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right — Skills */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
          <p className=" font-bold   text-green-600 mb-5">
            Technical Skills
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <span
                key={skill}
                className="px-4 py-1.5 rounded-full bg-white border border-gray-200 text-sm text-gray-700 font-medium cursor-default transition-all duration-200 hover:bg-green-500 hover:border-green-500 hover:text-white hover:-translate-y-0.5"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <hr className="max-w-6xl mx-auto border-gray-100" />

      {/* ── Info Cards ── */}
      <section className="max-w-6xl mx-auto px-8 py-14 grid grid-cols-1 md:grid-cols-2 gap-5">

        {/* Projects */}
        <div className=" border-black-200 rounded-1xl p-7 hover:border-black-600 hover:shadow transition-all duration-200">
          <p className="text- font-bold  text-green-600 mb-4">
            What I'm Building
          </p>
          <ul className="flex flex-col gap-2.5">
            {projects.map(p => (
              <li key={p} className="flex items-start gap-3  text-black-700">
                <span className="text-black-400 font-bold mt-0.5">-</span>
                {p}
              </li>
            ))}
          </ul>
        </div>

      
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-7 hover:border-sky-200 hover:shadow-sm transition-all duration-200">
          <p className=" font-bold uppercase text-green-600 mb-4">
            Education
          </p>
          <div className="mb-4">
            <h4 className=" font-semibold text-gray-900">BSc (Hons) Computing</h4>
            <p className=" text-black-400 mt-0.5">Itahari International College · Currently enrolled</p>
          </div>
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-900">Business Management — Grade XII</h4>
            <p className=" text-black-400 mt-0.5">Merryland Higher Secondary School · 2023</p>
          </div>
          <p className=" font-bold  uppercase text-green-600 mb-3 mt-5">
            Certifications
          </p>
          <ul className="flex flex-col gap-2">
            {["COIT — Computer Operator", "LOC — Fundamentals, Networking, Hardware & Multimedia"].map(c => (
              <li key={c} className="flex items-start gap-3  text-black-600">
                <span className="text-black-400 font-bold mt-0.5">-</span>
                {c}
              </li>
            ))}
          </ul>
        </div>

     
        <div className="md:col-span-2 bg-black-510 border border-gray-200 rounded-2xl p-7 hover:border-sky-200 hover:shadow-sm transition-all duration-200">
          <p className=" font-bold  uppercase text-green-600 mb-4">
            Soft Skills
          </p>
          <div className="flex flex-wrap gap-3">
            {["Communication", "Leadership", "Team Work", "Punctuality"].map(s => (
              <span key={s} className="flex items-center gap-2  text-black-700">
                <span className="text-black-400 font-bold">-</span>
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Approach ── */}
      <section className="bg-gray-50 border-t border-gray-100 py-16 px-8">
        <div className="max-w-6xl mx-auto">
         
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-10">
            My approach
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {approaches.map(a => (
              <div
                key={a.label}
                className="bg-sky-200 border border-gray-200 rounded-xl p-5 group transition-all duration-200 hover:-translate-y-1 hover:border-orange-200 hover:shadow-md"
              >
                <h3 className=" font-bold text-black-900 mb-2">{a.label}</h3>
                <p className=" text-black-500 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}