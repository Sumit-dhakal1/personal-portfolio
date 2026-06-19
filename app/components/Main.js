import Image from "next/image"
import React from "react"



export default function Main() {


return (
    <section id="main">    


            <main className="min-h-screen w-full bg-white-300 px-5 py-5 text-white-900">
    <div className="mx-auto flex max-w-5xl  items-center justify-center gap-10 lg:flex-row lg:gap-50">
        <div className="max-w-1xl space-y-10 ">
    
        <h1 className="text-5xl  font-bold ">
        
        Sumit Dhakal
        </h1>
        <p className=" leading-7   text-lg">
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


        <div className="relative flex w-full max-w-1xl items-center justify-center">
                    
        <div className="photo">
            <Image 
            src="/herono.1.jpg"
            alt="Hero illustration"
            
            width={200}
            height={90}
            className="h-125 w-full rounded-[3.1rem] object-cover"
            />
            </div>
        </div>
        </div>
    
    </main>
    </section>
)
};
