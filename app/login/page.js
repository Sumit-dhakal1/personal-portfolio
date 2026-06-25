"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
const router = useRouter();

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

const correctusername = "admin@gmail.com";
const correctpassword = "1234";

const handleLogin = (e) => {
    e.preventDefault()


    if (username === correctusername && password === correctpassword) {
    router.push("/dashboard"); 
    } else {
    alert(" invalid ");
    }
    
};
return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-30 via-blue-400 ">
    <form 
    onSubmit={handleLogin}
    >
        <div className="backdrop-blur-lg bg-black/20 p-8 rounded-2xl shadow-xl w-100 border border-white/3">
        <h2 className="text-2xl font-bold text-white text-center mb-6">
        Login
        </h2>

        {/* Email */}
        <input
        type="email"
        placeholder="Email"
        onChange={(e)=>setUsername(e.target.value)}
        className="w-full mb-4 px-4 py-2 rounded-lg bg-white/30 text-white placeholder-white outline-none"
        />

        {/* Password */}
        <input
        type="password"
        placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)}
        className="w-full mb-6 px-4 py-2 rounded-lg bg-white/30 text-white placeholder-white outline-none"
        />

        {/* Button */}
        <button className="w-full py-2 rounded-lg bg-white text-black-500 font-bold hover:bg-green-100 transition">
        Login
        </button>
    </div>
    </form>
    </div>
);
}
