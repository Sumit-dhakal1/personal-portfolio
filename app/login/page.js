import { Link } from "react-router-dom";

export default function Login() {
return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-30 via-blue-400 ">

    <div className="backdrop-blur-lg bg-black/20 p-8 rounded-2xl shadow-xl w-100 border border-white/3">

        <h2 className="text-2xl font-bold text-white text-center mb-6">
        Login
        </h2>

        {/* Email */}
        <input
        type="email"
        placeholder="Email"
        className="w-full mb-4 px-4 py-2 rounded-lg bg-white/30 text-white placeholder-white outline-none"
        />

        {/* Password */}
        <input
        type="password"
        placeholder="Password"
        className="w-full mb-6 px-4 py-2 rounded-lg bg-white/30 text-white placeholder-white outline-none"
        />

        {/* Button */}
        <button className="w-full py-2 rounded-lg bg-white text-blue-500 font-semibold hover:bg-blue-100 transition">
        Login
        </button>

    
    </div>
    </div>
);
}