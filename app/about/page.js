export default function About() {
const skills = [
    "React",
    "Next.js",
    "Node.js",
    "numpy",
    "panda",
    "servlet",
    "MongoDB",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "MYSQL",
];

return (
    <>
    <main className="about">
        <section className="relative overflow-hidden px- py-30 bg-white-200  sm:px-10 lg:px-7">
        <div className=" top-240 h-50  blur-3xl" />

        <div className="relative mx-auto max-w-10xl  gap-1 lg:flex-row ">
            <div className="space-y-5 lg:w-1/1">
            <h1 className="text-4xl tracking-tight text-black text-1xl">
                I build modern web-application and scalable software
            </h1>
            <p className="max-w-xl text-black-200 sm:text-lg leading-9  ">
                I am a passionate fullstack developer blending creative UI
                design with robust backend systems. My work focuses on reliable
                applications.
            </p>
            </div>

            <div className="flex flex-wrap text-black shadow-sky-100/5">

  <div className="px-20 py-20">
    <h1 className="text-5xl font-semibold">
      HI, I am Software Engineer
    </h1>
  </div>

  <div className="flex flex-wrap py-5 px-3 gap-5 w-96">

    {skills.map((skills, index) => (
      <span
        key={skills}
        className="px-4 py-2 rounded-xl bg-blue-500/50 text-sm text-gray-800 
        transition-all duration-300 ease-in-out 
        hover:bg-sky-700 hover:text-white hover:scale-110"
        
        style={{
          animation: `fadeInUp 0.5s ease forwards`,
          animationDelay: `${index * 0.2}s`,
          opacity: 0
        }}
      >
        {skills}
      </span>
    ))}


</div>

        

            <div className="space-y-2  ">
                <div className=" border border-white/20 bg-slate-950/50   p-15 ">
                <h3 className="text-lg font-semibold  text-white">Contact</h3>
                <p className="mt-5 text-white  flex flex-wrap leading-8">
                    Itahari-04, Sunsari, Nepal
                    <br />
                    sumitdhakal51@gmail.com
                    <br />
                    +977-9827443797
                </p>
                </div>

                <div className=" p-10 bg-blue-300 p-15 h-200">
                <h3 className=" font-semibold text-2xl m-4 font-bold text-white ">
                    What I building
                </h3>

                <p className="mt-3  text-white  leading-7">
                    Inventory management system <br />
                    vechile booking system
                    <br />
                    Anti-theft bike detication
                    <br />
                    CIVIC watch
                </p>

                <div className="text-white">
                    <p className=" text-2xl m-4 font-bold text-white">
                    Education
                    </p>
                    <h2 className=" mt-4 leading-6  text-white-400">
                    {" "}
                    secondary: merryland higher secondary school 2023 passout
                    faculty- business management
                </h2>

                    <h2 className=" mt-4 leading-6  text-white-400">
                    {" "}
                    undergraduate: Itahari international college currently
                    running/ faculty- BSC-HONS computing
                    </h2>

                    <p className="text-2xl m-4 font-bold text-white">
                    Project and certification
                    </p>
                    <p className="mt-4 text-white leading-7">
                    COIT - college of information technology: computer
                    operator
                    <br />
                    LOC - computer fundamentals, nteworking, hardware
                    concepts, multi-media
                    </p>

                    <p className="text-2xl m-4 font-bold text-white">
                    Soft skills
                    </p>
                    <p className="mt-4 text-white leading-7">
                    communication <br />
                    leadership <br />
                    team work
                    <br />
                    punctuality
                    <br />
                    </p>
                </div>
                </div>
            </div>
            </div>
        
        </div>
        </section>

        <section className=" g:flex-row h-100 px-1">
        <div className=" bg-blue-200 p-3 h-100  ">
            <h2 className="text-5xl font-bold text-white">My approach</h2>

            <div className="mt-5 grid gap-2 sm:grid-cols-5 ">
            <div className="  bg-orange-300 p-5 rounded-[1.1rem]">
                <h3 className="font-semibold text-black">Design</h3>
                <p className="mt-2 text-sm text-white leading-7">
                plan the system structure in Clean layouts, vibrant gradients
                subtle motion UI friendly.
                </p>
            </div>
            <div className=" bg-orange-300 p-5 rounded-[1.1rem]">
                <h3 className="font-semibold text-black">Development</h3>
                <p className="mt-2 text-sm text-white leading-7">
                Trun the design into beautiful and Scalable code with modern
                frameworks.
                </p>
            </div>

            <div className=" bg-orange-500 p-5 rounded-[1.1rem] ">
                <h3 className="font-semibold text-black">Sclable</h3>
                <p className="mt-2 text-sm text-white leading-7">
                build system that handle growing users in the future easily
                through Scalable code with modern frameworks and maintainable
                architecture.
                </p>
            </div>

            <div className=" bg-orange-400 p-5 rounded-[1.1rem]">
                <h3 className="font-semibold text-black">security</h3>
                <p className="mt-2 text-sm text-white leading-7">
                protect the system along with data from threats, attracts, and
                unauthorize access through optimization a long with secure
                system design.
                </p>
            </div>

            <div className=" bg-orange-600 p-5 rounded-[1.1rem]">
                <h3 className="font-semibold text-black">performance</h3>
                <p className="mt-2 text-sm text-white leading-7">
            making the system efficiently and reliable for mass users
                through performance optimization in the system.
                </p>
            </div>
            </div>
        </div>
        </section>
    </main>
    </>
);
}
