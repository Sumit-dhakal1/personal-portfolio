import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
return (
    <>
    <Navbar />

    <main className="min-h-screen bg-slate-100 px-6 py-10 text-slate-900">
        
        <div className="mx-auto max-w-4xl space-y-8 rounded-3xl border border-slate-200 bg-white p-10 shadow-xl shadow-slate-200/50 animate-slide-up">
        <header className="space-y-4">
        <h1 className="text-3x1 font-semibold tracking-tight sm:text-6x1">
            Sumit Dhakal
            </h1>
        
            <p className="text-sm text-slate-600">
            Itahari-04, Sunsari, Nepal | sumudhakal94@gmail.com | +977-9827443797
            </p>
        </header>

        <div className="space-y-6 border-t border-slate-200 pt-6 text-slate-700">
            <p className="text-base leading-8">
            I am an aspiring fullstack developer with a strong interest in networking and web development. I focus on
            building clean, reliable, and user-friendly applications that solve real problems.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
            <div>
                <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">
                Focus areas
                </h2>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                Fullstack web development, responsive UI, backend APIs, and practical solution design.
                </p>
            </div>
            <div>
                <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">
                Tools & skills
                </h2>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                Python, Java, JavaScript, HTML, CSS, React, Node.js, MongoDB.
                </p>
            </div>
            </div>

            <div className="border-t border-slate-200 pt-6 text-sm text-slate-600">
            <p className="font-semibold text-slate-900">Links</p>
            <div className="mt-3 flex flex-wrap gap-4">
                <a href="#linkedin" className="text-sky-700 hover:underline">
                LinkedIn
                </a>
                <a href="#github" className="text-slate-700 hover:text-slate-900 hover:underline">
                GitHub
                </a>
            </div>
            </div>
        </div>
        </div>
    </main>

    <Footer />
    </>
);
}

