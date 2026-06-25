"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

export default function reg() {
    const [fullName, setFullName] =useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [address, setAddress] = useState("")

    const handleRegister = (e) => {
        e.preventDefault()
    }

    return(
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-10 via-blue-500">
    

            <form onSubmit={handleRegister}>

                <div  className="backdrop-blur-lg bg-black/30 p-4 h-100 mt-5  rounded-2xl shadow-xl w-100 border border-white/3">
                    <h2 className="text-2xl font-bold text-white text-center">Register Account</h2>

                    <input
                    type="string"
                    placeholder="name"
                    onChange={(e)=> setFullName(e.target.value)}
                    className=" w-full mb-4 px-4 py-2 mt-3 rounded-lg bg-white/15 text-white placeholder-white outline-none "/> 
                    
                    <input
                    type="string"
                    placeholder="email"
                    onChange={(e)=> setEmail(e.target.value)}
                    className="w-full mb-4 px-4 py-2 mt-3 rounded-lg bg-white/15 text-white placeholder-white outline-none"
                    />
                    
                    <input
                    type="int"
                    placeholder="contact"
                    onChange={(e)=> setContact(e.target.value)}
                    className="w-full mb-4 px-4 py-2 mt-3 rounded-lg bg-white/15 text-white placeholder-white outline-none"
                    />

                    <input
                    type="string"
                    placeholder="Address"
                    onChange={(e)=>setAddress(e.target.value)}
                    className="w-full mb-4 px-4 py-2 mt-3 rounded-lg bg-white/15 text-white placeholder-white outline-none"
                    />

                    <div className="flex items-center justify-center">

                    <button className="w-40 py-2 rounded-lg bg-white text-black-500 font-bold hover:bg-green-100 transition  ">
                        register
                    </button>
                    </div>

                </div>


            </form>
        </div>
    )
}