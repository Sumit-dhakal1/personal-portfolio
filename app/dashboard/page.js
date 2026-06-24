"use client";

import { Users } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  const handleLogout = (e) => {
    e.preventDefault()

router.push("/login");    
    
  };
  return (
    <div className="flex min-h-screen bg-gray-100 text-white">

      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-bold mb-10">Admin</h1>

          <nav className="flex flex-col gap-4">
            <div className="text-gray-500 hover:text-blue-500 cursor-pointer">
              Dashboard
            </div>
            <div className=" text-blue-600 px-3 py-2 rounded-lg cursor-pointer">
              Projects
            </div>
          <form >
            <div className="bg-red-600  px-9 py-2 mx-10 rounded-lg cursor-pointer mt-100">
            <button onClick={handleLogout}>
              logout
            </button>
            </div>
          </form>
        
          </nav>
        </div>

        <div className="flex items-center gap-3 mt-10">
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          <div>
            <p className="text-sm font-medium">Admin</p>
            <p className="text-xs text-gray-500">Administrator</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Projects</h1>
            <p className="text-gray-500">
              Overview of all completed projects.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
          </div>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">

          {/* Card */}
          {["Portfolio Website", "E-Commerce Platform", "Task Manager", "Analytics Dashboard"].map((title, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="w-10 h-10 rounded-full bg-blue-100 mb-4"></div>

              <h2 className="font-semibold">{title}</h2>
              <p className="text-sm text-gray-500 mt-1">
                Minimal modern UI project description.
              </p>

              <p className="text-green-500 text-sm mt-4">
                ● Completed
              </p>
            </div>
          ))}
        </div>

        {/* Project Details Section */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">

          <h2 className="text-xl font-semibold mb-6">
            Project Details
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Left Preview */}
            <div>
              <div className="bg-gray-200 rounded-xl h-60 mb-4"></div>

              <div className="flex gap-3">
                <div className="w-16 h-12 bg-gray-300 rounded"></div>
                <div className="w-16 h-12 bg-gray-300 rounded"></div>
                <div className="w-16 h-12 bg-gray-300 rounded"></div>
              </div>
            </div>

            {/* Right Details */}
            <div className="grid grid-cols-2 gap-4 text-sm">

              <div>
                <p className="text-gray-500">Project Name</p>
                <p className="font-medium">Portfolio Website</p>
              </div>

              <div>
                <p className="text-gray-500">Status</p>
                <p className="text-green-500 font-medium">Completed</p>
              </div>

              <div>
                <p className="text-gray-500">Category</p>
                <p className="font-medium">Web Development</p>
              </div>

              <div>
                <p className="text-gray-500">Client</p>
                <p className="font-medium">Personal Project</p>
              </div>

              <div>
                <p className="text-gray-500">Technologies</p>
                <div className="flex gap-2 mt-1 flex-wrap">
                  <span className="bg-blue-100 px-2 py-1 rounded text-xs">
                    React
                  </span>
                  <span className="bg-blue-100 px-2 py-1 rounded text-xs">
                    Tailwind
                  </span>
                  <span className="bg-blue-100 px-2 py-1 rounded text-xs">
                    Framer
                  </span>
                </div>
              </div>

              <div>
                <p className="text-gray-500">Duration</p>
                <p className="font-medium">Apr 2024 - May 2024</p>
              </div>

              <div className="col-span-2">
                <p className="text-gray-500">About Project</p>
                <p className="text-gray-600 mt-1">
                  A personal portfolio website to showcase skills,
                  projects and experience with modern UI design.
                </p>
              </div>

            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
    
