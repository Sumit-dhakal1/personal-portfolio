"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const projects = [
    {
        title: "Portfolio Website",
        description: "A personal portfolio built with Next.js and Tailwind CSS.",
        details:
            "Built with the app directory, responsive design, and deployment-ready optimizations. Uses Next Image for optimized assets.",
        href: "/",
    },
    {
        title: "Task Manager",
        description: "A fullstack task manager with authentication and REST API.",
        details:
            "Implements JWT auth, CRUD operations, and a simple role-based permission layer. Backend built with Express and MongoDB.",
        href: "/",
    },
    {
        title: "E-commerce Mock",
        description: "Shopping UI with cart state and product pages.",
        details:
            "Demo storefront showcasing product listing, cart state, and checkout flow using local state and context.",
        href: "/",
    },
    {
        title: "Blog Engine",
        description: "Markdown-powered blog with dynamic routes and SEO.",
        details:
            "Supports markdown posts, syntax highlighting, and static generation for fast performance.",
        href: "/",
    },
    {
        title: "Realtime Chat",
        description: "A lightweight realtime chat using WebSockets.",
        details:
            "Features rooms, typing indicators, and basic persistence. Built with Socket.IO and a simple Node server.",
        href: "/",
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
        <article key={p.title} className="rounded bg-slate-900 p-6">
                                <h3 className="text-2xl font-semibold mb-2 text-white">{p.title}</h3>
                                <p className="text-sm text-white mb-4">{p.description}</p>

                                <div className="flex gap-3">
                                    <button
                                        onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                        className="inline-flex items-center rounded-full bg-slate-800 px-4 py-2 text-sm font-medium text-white"
                                    >
                                        {openIndex === idx ? "Hide details" : "View more"}
                                    </button>

                                    <a href={p.href} className="inline-flex items-center rounded-full bg-slate-700 px-4 py-2 text-sm font-medium text-white">
                                        Visit
                                    </a>
                                </div>

                                {openIndex === idx && (
                                    <div className="mt-4 rounded bg-slate-800 p-4 text-sm text-white">
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