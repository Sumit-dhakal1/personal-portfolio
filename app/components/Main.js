import Image from "next/image";

export default function Main() {
return (
    <main className="min-h-screen w-full bg-gradient-to-br from-white via-slate-100 to-sky-50 px-6 py-16 text-slate-900">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-10 lg:flex-row lg:gap-16">
        <div className="max-w-2xl space-y-6 animate-slide-up">
    
        <h1 className="text-2x2 font-extrabold tracking-tight sm:text-4xl">
            Hi, I&apos;m Sumit Dhakal
        </h1>
        <p className="text-base leading-5 text-slate-400 sm:text-lg">
            Aspring a fullstack devloper  with curiosity and contributing
        in the inovative projects.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
            <a
            href="/project"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-200 transition hover:-translate-y-0.5 hover:bg-slate-700"
            >
            View projects
            </a>
            <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-500 hover:bg-slate-100"
            >
            Say hello
            </a>
        </div>
        </div>

        <div className="relative flex w-full max-w-xl items-center justify-center">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-72 rounded-full bg-sky-20/50 blur-3xl" />
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white/20 p-4 shadow-2xl shadow-slate-100/50 animate-float">
            <Image
            src="/hero.png"
            alt="Hero illustration"
            width={400}
            height={400}
            className="h-auto w-full rounded-[1.5rem] object-cover"
            />
        </div>
        </div>
    </div>
    </main>
)};