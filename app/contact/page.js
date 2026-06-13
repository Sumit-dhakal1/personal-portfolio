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

        // trigger shuttle animation
        const el = shuttleRef.current;
        if (el) {
            el.classList.remove("fly");
            // force reflow
            void el.offsetWidth;
            el.classList.add("fly");
        }

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
            <Navbar />

            <main className="min-h-screen bg-green-700 px-9 py-10 text-white">
                <section className="mx-auto max-w-6xl gap-20 lg:flex lg:items-start">
                    <div className="lg:w-1/3 space-y-10 space-x-10">
                    <h1 className="text-5xl font-semibold text-white">Get in touch</h1>
                        <p className="text-lg leading-7 text-white">
                        I&apos;m open to new projects and collaborations. Send a message and I&apos;ll get back to you as soon as possible.
                        </p>

                    <div className="  p-5 h-45 10 bg-black">
                        <h3 className="text-lg font-semibold  text-white">Contact</h3>
                        <p className="mt-4 text-white leading-7">
                            Itahari-04, Sunsari, Nepal
                            <br />sumitdhakal51@gmail.com
                            <br />
                            +977-9827443797
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 lg:mt-0 lg:w-1/2">
                        <form onSubmit={handleSend} className="relative space-y-4 bg-slate-900 p-6 rounded-md border border-slate-400">
                            <div>
                                <label className="block text-sm mb-1 text-white font-medium">Name</label>
                                <input value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded px-3 py-2 bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-green-500" placeholder="Your name" />
                            </div>

                            <div>
                                <label className="block text-sm mb-1 text-white font-medium">Email</label>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded px-3 py-2 bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-green-500" placeholder="your@email.com" />
                            </div>

                            <div>
                                <label className="block text-sm mb-1 text-white font-medium">Message</label>
                                <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="w-full rounded px-3 py-2 bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-green-500" rows={6} placeholder="Your message here..." />
                            </div>

                            <div className="flex items-center justify-between">
                                <button type="submit" disabled={isSending} className="inline-flex items-center rounded-full bg-green-600 hover:bg-green-700 px-6 py-3 text-sm font-semibold text-white disabled:opacity-60 transition">
                                    {isSending ? "Sending..." : "Send"}
                                </button>

                                <div className="flex items-center gap-3">
                                    <div className={`sent-badge ${sent ? "show" : ""}`}>Sent</div>

                                    <div className="shuttle-container" aria-hidden>
                                        <svg ref={shuttleRef} className="shuttle" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 21l21-9L2 3v7l15 2-15 2v6z" fill="#fff" />
                                        </svg>

                                    </div>

                                </div>
                            
                                </div>
                            </form>
                        </div>
                    </section>
                </main>

            <Footer />
        </>
    );
}