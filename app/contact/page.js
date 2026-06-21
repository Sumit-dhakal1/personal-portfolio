"use client";

import { useState, useRef } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSending, setIsSending] = useState(false);
    const [sent, setSent] = useState(false);
    const shuttleRef = useRef(null);

    const handleSend = (e) => {
        e.preventDefault();
        if (!message && !name && !email) return;
        setIsSending(true);
        setSent(false);

    

        setTimeout(() => {
            setIsSending(false);
            setSent(true);
            setName("");
            setEmail("");
            setMessage("");
        }, 1100);
    };

    return (
        <>

            <main className=" bg-white-20 px-8 py-20 text-black">
                <section className="mx-auto max-w-6xl gap-20 lg:flex ">
                    <div className="lg:w-1/3 space-y-10 space-x-10">
                    <h1 className="text-5xl font-semibold text-black">Get in touch</h1>
                        <p className="text-lg leading-7 text-black">
                        I&apos;m open to new projects and collaborations. Send a message and I&apos;ll get back to you as soon as possible.
                        </p>

                    <div className="  p-1 h-9 px-15 mx-15 rounded-full bg-green-600 text- font-bold text-white disabled:opacity-60 transition">
                        <p className=" text-white  leading-7 ">
                        fell free to contact.
                            </p>
                        </div>
                    </div>

                    <div className="mt-2 lg:mt-1 lg:w-170 ">
                        <form onSubmit={handleSend} className="relative space-y-4 bg-blue-200 p-17 rounded-md ">
                            <div className="input group">
                                <label className="block  mb-1 text-black font-bold">Name</label>
                                <input value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded px-3 py-2 bg-slate-400 border border-slate-10 text-black  " placeholder="enter your name" />
                            </div>

                            <div>
                                <label className="block mb-1 text-black font-bold">Email</label>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded px-3 py-2 bg-slate-400 border border-slate-10 text-black " placeholder="your@email.com" />
                            </div>

                            <div>
                                <label className="block mb-1 text-black font-bold">Message</label>
                                <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="w-full rounded px-3 py-2 bg-slate-300 border border-slate-70 text-black placeholder-slate-400 " rows={6} placeholder="Your message here..." />
                            </div>

                            <div className="flex items-center justify-between">
                                <button type="submit" disabled={isSending} className="inline-flex items-center rounded-full bg-green-600 hover:bg-green-700 px-6 py-3 text-sm font-semibold text-white disabled:opacity-60 transition">
                                    {isSending ? "Sending..." : "Send"}
                                </button>

                            

                                
                            
                                </div>
                            </form>
                        </div>
                    </section>
                </main>

        </>
    );
}