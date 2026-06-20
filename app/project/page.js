"use client";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";


const projects = [
{
    title: "Inventory Management System",
    description:
    "Streamlined vendor operations with intelligent stock tracking.",
    details:
    "Technology: Python, Database Schema Design. Automates vendor tasks including stock calculation, storage management, and brand-based selling records.",
    technologies: ["Python", "SQL", "Database Design"],
    
},
{
    title: "Anti-Theft Bike Detection System",
    description: "IoT-powered security system with real-time alerts.",
    details:
    "Software: Python, JavaScript, Node.js, MongoDB. Hardware: ESP32, MPU6050, NEO-6M GPS, Active Piezo Buzzer. Real-time movement detection with email notifications.",
    technologies: [
    "Python",
    "JavaScript",
    "Node.js",
    "MongoDB",
    "IoT",
    "ESP32",
    ],
    
},
{
    title: "Vehicle Booking System",
    description: "Full-featured booking platform with online payments.",
    details:
    "Technology: React, Node.js, JavaScript, MongoDB. Features include flexible booking, driver options, online payment integration, pre-booking, and cancellation management.",
    technologies: ["React", "Node.js", "JavaScript", "MongoDB"],
},
{
    title: "Civic Watch",
    description: "Community-driven civic issue reporting platform.",
    details:
    "Technology: Java, Servlet, JSP. Full-stack website empowering citizens to report and track societal issues in their communities.",
    technologies: ["Java", "Servlet", "JSP"],
},
];


export default function Project() {
const [openIndex, setOpenIndex] = useState(null);
const [hoveredIndex, setHoveredIndex] = useState(null);
const [dogImage, setDogImage] = useState("");

const getDog = async () => {
    try {
    const response = await axios.get(API);

      // Save image URL in state
    setDogImage(response.data.message);

    console.log(response.data);
    } catch (error) {
    console.log(error.message);
    }
};
useEffect(() => {
    getDog();
}, []);

return (
    <>
    <div className="flex flex-col items-center mb-10">
        {dogImage && (
        <img
            src={dogImage}
            alt="Random Dog"
            className="w-80 h-80 object-cover rounded-xl shadow-lg"
        />
        )}

    
    </div>
    <main className=" bg-balck t-black">
        {/* Animated background elements */}
        <div className="absolute  overflow-hidden ">
        <div className="absolute top-20 left-10 w-72 h-72  rounded-full animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-black"></div>
        </div>

        <section className="relative z-10 mx-auto max-w-7xl px-6 py-20">
          {/* Hero Section */}
        <div className="mb-16 text-center">
        
            <h1 className=" md:text-6xl  mb-4 bg-clip-text bg-black-500">
            PROJECT
            </h1>
            <p className=" text-blue-600 max-w-6xl mx-auto mb-4">
            Innovative solutions of real-world driven problems 
            </p>
            <div className="h-1 w-24 bg-brown  rounded-full mx-auto mt-4"></div>
        </div>

        
        <div className="grid  md:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mb-10 m-30 p">
            {projects.map((p, idx) => (
            <article
                key={p.title}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative h-full"
            >
            
                <div className="absolute -inset-0.5 bg-green  "></div>


                <div className="relative bg-orange-200  rounded-3xl p-8  group-hover: transition duration-100 h-full flex flex-col overflow-hidden">
                
                
                <div className="absolute inset-0.5 opacity-0.10 group-hover:opacity-100 transition duration-100 ">
                    <div className="absolute inset-0 bg-blue-200  transform -skew-x-20 group-hover:translate-x-full duration-700"></div>
                </div>

                <div className="relative  z-10">
                    {/* Icon and Status */}
                    <div className="flex items-start justify-between mb-4">
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold mb-10 text-black   group-hover:from-orange-400 group-hover:to-black-400 transition duration-300">
                    {p.title}
                    </h3>

                    {/* Description */}
                    <p className="text-black-300 text-base mb-10 leading-relaxed">
                    {p.description}
                    </p>

                    {/* Technology badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                    {p.technologies.map((tech) => (
                        <span
                        key={tech}
                        className="px-3 py-1 bg-green-600  rounded-full text-purple-200 text-xs font-semibold"
                        >
                        {tech}
                        </span>
                    ))}
                    </div>

                    {/* Details Button */}
                    <button
                    onClick={() =>
                        setOpenIndex(openIndex === idx ? null : idx)
                    }
                    className="w-50 group/btn relative overflow-hidden rounded-lg bg-green-600 px-10 py-3 font-semibold text-white"
                    >
                    <div className="relative flex items-center justify-center gap-1">
                        <span>
                        {openIndex === idx ? "Hide Details" : "View Details"}
                        </span>
                        <ChevronDown
                        size={1}
                        className={`transition-transform duration-30 ${
                            openIndex === idx ? "rotate-180" : ""
                        }`}
                        />
                    </div>
                    </button>

                    {/* Expandable Details */}
                    <div
                    className={`overflow-hidden transition-all duration-100 ease-out ${
                        openIndex === idx ? "mt-6 max-h-96" : "max-h-0"
                    }`}
                    >
                    <div className=" pt-1">
                        <div className="bg-white">
                        <p className="text-black-200 text-sm leading-relaxed">
                            {p.details}
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </article>
            ))}
        </div>

        
        <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-slate-700/50">
            <div className="text-center">
            <div className="text-4xl font-black mb-2">
                4+
            </div>
            <p className="text-black-400">Projects Delivered</p>
            </div>
            <div className="text-center">
            <div className="text-4xl font-black mb-2">
                10+
            </div>
            <p className="text-black-400">Technologies Used</p>
            </div>
            <div className="text-center">
            <div className="text-4xl font-black  mb-2">
                100%
            </div>
            <p className="text-black-400">self Built</p>
            </div>
        </div>
        </section>
    </main>
      {/* Global styles for animations */}
    <style jsx>{`
        @keyframes blob {
        0%,
        100% {
            transform: translate(0, 0) scale(1);
        }
        33% {
            transform: translate(30px, -50px) scale(1.1);
        }
        66% {
            transform: translate(-20px, 20px) scale(0.9);
        }
        }

        .animate-blob {
        animation: blob 7s infinite;
        }

        .animation-delay-2000 {
        animation-delay: 2s;
        }

        .animation-delay-4000 {
        animation-delay: 4s;
        }
    `}</style>
    </>
);
}
