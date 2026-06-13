import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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

export default function About() {
return (
    <>
    <Navbar />

    <main className=" bg-green-700 ">
        <section className="relative overflow-hidden px-100 py-10 sm:px-10 lg:px-10">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] bg-sky-500/1 blur-3xl" />
        <div className="absolute right-11 top-240 h-500 bg-violet-200/20 blur-3xl" />

        <div className="relative mx-auto max-w-10xl  gap-10 lg:flex-row ">
            <div className="space-y-7 lg:w-1/1">
        
            <h1 className="text-8xl  tracking-tight text-grey text-1xl">
                I build modern webpage, application potery 
                experiences with elegant motion and strong logic.
            </h1>
            <p className="max-w-xl text-slate-200 sm:text-lg leading-9">
                I am a passionate fullstack developer blending creative UI design with robust backend systems. My work focuses on reliable applications that feel delightful to use.
            </p>

            </div>

            <div className=" flex flex direction shadow-4xl shadow-slate-150/10 backdrop-blur-x10">
                <div className="flex h-1 p-10 animate-float display text-white shadow-sky-10/5">
                <div className="space-y-10 ">
                    <h1 className="text-5xl font-semibold">HI, iam software engineer</h1>
                </div>
                </div>

                <div className="mt-1 space-y-5 ">
                <div className=" border border-white/20 bg-slate-950/100   p-5 ">
                    <h3 className="text-lg font-semibold  text-white">Contact</h3>
                    <p className="mt-5 text-white  flex flex-wrap leading-8">
                    Itahari-04, Sunsari, Nepal
                    <br />
                    sumitdhakal51@gmail.com 
                    <br />
                    +977-9827443797
                    </p>
                </div>

                <div className=" p-10 bg-black h-200">
                    <h3 className=" font-semibold text-2xl m-4 font-bold text-white ">What I building</h3>
                    
                    <p className="mt-3  text-white  leading-7">
                        Inventory management system <br/>
                        vechile booking system<br/>
                        Anti-theft bike detication<br/>
                        CIVIC watch
                    </p>

                <div className="text-white">
                    <p className=" text-2xl m-4 font-bold text-white">Education</p>
                    <h2 className=" mt-4 leading-6  text-white-400"> secondary: merryland higher secondary school 2023 passout faculty- business management 
            
                    </h2>
                
                <h2 className=" mt-4 leading-6  text-white-400"> undergraduate: Itahari international college currently running/ faculty- BSC-HONS computing 
            
                    </h2>
                

                <p className="text-2xl m-4 font-bold text-white">Project and certification</p>
                <p className="mt-4 text-white leading-7">
                    COIT - college of information technology: computer operator<br/>
                    LOC - computer fundamentals, nteworking, hardware concepts, multi-media
                </p>

                <p className="text-2xl m-4 font-bold text-white">Soft skills</p>
                <p className="mt-4 text-white leading-7">
                communication <br/>
                leadership <br/>
                team work<br/>
                punctuality<br/>
                </p>

                </div>
                
                </div>
            
                </div>
                
            </div>
                <p className=" uppercase text-5xl font-bold text-white  p-10 flex flex-wrap text-white-300">Skills</p>
                <div className="mt-1  flex flex-wrap gap-5">
                {skills.map((skill) => (
                    <span key={skill} className="rounded-1x2 bg-white/5 px-4 py-2 text-sm text-slate-200 ring-1 ring-white/10 transition hover:bg-sky-700/100 hover:text-white">
                    {skill}
                    </span>
                ))}
                </div>
            </div>
            

        </section>

        <section className=" g:flex-row h-100 px-1">
            <div className=" bg-slate-600 p-3   ">
            <h2 className="text-5xl font-bold text-white text-white-300">My approach</h2>

            <div className="mt-5 grid gap-2 sm:grid-cols-5">
                <div className="  bg-slate-950 p-5">
                <h3 className="font-semibold text-white">Design</h3>
                <p className="mt-2 text-sm text-white leading-7">
                plan the system structure in Clean layouts, vibrant gradients subtle motion UI friendly.
                </p>
                </div>
                <div className=" bg-slate-950 p-5">
                <h3 className="font-semibold text-white">Development</h3>
                <p className="mt-2 text-sm text-white leading-7">
                Trun the design into beautiful and Scalable code with modern frameworks.
                </p>
                </div>

                <div className=" bg-slate-950 p-5">
                <h3 className="font-semibold text-white">Sclable</h3>
                <p className="mt-2 text-sm text-white leading-7">
                build system that handle growing users in the future easily through Scalable code with modern frameworks and maintainable architecture.
                </p>
                </div>

                <div className=" bg-slate-950 p-5">
                <h3 className="font-semibold text-white">security</h3>
                <p className="mt-2 text-sm text-white leading-7">
                    protect the system along with data from threats, attracts, and unauthorize access through optimization a long with secure system design. 
                </p>
                </div>

                <div className=" bg-slate-950 p-5">
                <h3 className="font-semibold text-white">performance</h3>
                <p className="mt-2 text-sm text-white leading-7">
                    making the system efficiently and reliable for mass users through performance optimization in the system. 
                </p>
                </div>

                
            </div>
            </div>
        </section>
    </main>
    <Footer />
    </>
);
}

