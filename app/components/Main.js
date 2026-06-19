import Image from "next/image"
import React from "react"



export default function Main() {





return (
    <section id="main">    


            <main className="min-h-screen w-full bg-green-700 px-6 py-16 text-white-900">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-10 lg:flex-row lg:gap-16">
        <div className="max-w-2xl space-y-6 ">
    
        <h1 className="text-5xl font-semibold ">
        SUMIT DAHKAL
        </h1>
        <p className=" leading-5 text-white-100 text-lg">
            Aspring a fullstack devloper  with curiosity and contributing
        in the inovative projects.
        </p>
        <div className="flex flex-col gap-4 flex-row">
            <a
            href="/project"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white"
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
        <div className=" rounded-[20rem] border border-slate-500 bg-black/10 p-1">
            <Image
            src="/herono.1.jpg"
            alt="Hero illustration"
            width={400}
            height={100}
            className="h-auto w-full rounded-[7.1rem] object-cover"
            />
        </div>
        </div>
    </div>
    </main>
    </section>
)
};
