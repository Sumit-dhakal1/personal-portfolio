import Image from "next/image"
import React from "react"



export default function Main() {


return (
    <section id="main ">    
            

            <main className=" text-white relative h-200   gap-1 relative h-screen bg-[#0A0A0A] overflow-hidden flex items-center justify-center  ">

    
    <div className="absolute w-[200px] h-[600px] bg-green-300 rounded-full blur-[200px] top-[-10px] left-[-100px] opacity-80"></div>

      <div className="absolute w-[600px] h-[600px] bg-blue-300 rounded-full blur-[200px] top-[-10px] right-[-10px] opacity-90"></div>

      <div className="absolute w-[600px] h-[600px] bg-blue-500 rounded-full blur-[150px] bottom-[-19px] right-[0px] opacity-80"></div>

      <div className="relative z-10 text-white max-w-xl px-6">

        <h1 id="FONT" className="text-5xl md:text-2x2 font-bold  mb-10 px-10 ">
        
          HI iam software engineer 
        </h1>

        <p className="text-black-100 mb-6">
        
        </p>

        <div className="flex gap-4">
          <button className="px-20 py-3 bg-green-500 hover:bg-indigo-500 rounded-full">
            <a href="/project">
          view project 
            </a>
          
          </button>

          <button className="px-10 py-3 bg-blue-100 text-black rounded-full">
            <a href="/contact">
          contact 
            </a>
            
          </button>
        </div>
      </div>
    
    </main>
    </section>
)
};
