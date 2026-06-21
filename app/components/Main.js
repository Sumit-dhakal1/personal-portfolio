import Image from "next/image"
import React from "react"



export default function Main() {


return (
    <section id="main ">    
            

            <main className=" text-white relative  bg-cover bg-center  ">
    <div className="align">
            <Image 
            src="/hero.png"
            alt="Hero illustration"
            
            width={2000}
            height={800}
            style={{ opacity: 0.85 }} 
            />
            </div>

    <div className="mx-auto flex max-w-9x1 absolute inset-1 bg-black/30 gap-10 lg:flex-row  ">



        <div className="max-w-5x1 space-y-10 px-100 py-60 w-800 ">
    
        <h1 className="text-6xl  font-bold ">
        
        Sumit Dhakal
        </h1>
        <p className=" leading-7   text-lg">
            Aspring a fullstack devloper  with curiosity and contributing
        in the inovative projects.
        </p>
        <div className="flex flex-col gap-4 flex-row ">
            <a
            href="/project"
            className="inline-flex items-center justify-center rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-white w-50"
            >
            View projects
            </a>
            <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-1 text-sm font-semibold text-slate-900 transition hover:border-slate-500 hover:bg-slate-100 w-40 "
            >
            Say hello
            </a>
        </div>
        </div>
        </div>
    
    
    </main>
    </section>
)
};
