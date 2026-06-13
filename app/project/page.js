"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const projects = [
    {
        title: "Inventory management system",
        description: "A project that is build for optimize work of vendor. ",
        details:"technology used: python and database schema design. the reason behind building this project is to automate the task of vendor to calculate and store their stock record ,selling stock on the basis of brand name and so on. ",
        
    },
    {
        title: "Anti theft bike detection system",
        description: "A system that is build for to secure the two-wheeler from open place. basically it is connected to the IOT devices where the sensor reading the movement of two-wheeler and it sends notification into email of owner",
        details:
            "technology software used: Python, JavaScript, Node.js, MongoDB--- technology hardware used: ESP32, MPU6050, NEO-6M gps, active piezo buzzer. " 
    
    },
    {
        title: "vehical booking system",
        description: "A system is build for the booking the vechical for long-trip as well as short destination with driver or without driver integerate online payment system, pre-booking features, cancel booking and so on ",
        details:
            "technology used: react, node.js, JavaScript MongoDB",
        
    },
    {
        title: "civic watch",
        description: "A system is build full-stack website to raised voice of public here report the issues, facing into our society ",
        details:
            "technology used: java, servlet, jsp",
        
    },

];

export default function Project() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <>
            <Navbar />

            <main className="min-h-screen bg-green-700 px-6 py-16 text-white">
            <section className="mx-auto max-w-6xl">
                <h1 className="text-5xl font-semibold mb-6 text-white">Projects</h1>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((p, idx) => (
        <article key={p.title} className=" bg-slate-700   p-6">
                                <h3 className="text-2xl font-semibold mb-4 text-white">{p.title}</h3>
                                <p className="text-sm text-white mb-8">{p.description}</p>

                                <div className="flex gap-20">
                                    <button
                                        onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                        className="inline-flex items-center rounded-full bg-slate-800 px-4 py-2 text-sm font-medium text-white"
                                    >
                                        {openIndex === idx ? "Hide details" : "View more"}
                                    </button>

                                
                                </div>

                                {openIndex === idx && (
                                    <div className="mt-4 rounded bg-black p-4 text-sm text-white">
                                        {p.details}
                                    </div>
                                )}
                            </article>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}