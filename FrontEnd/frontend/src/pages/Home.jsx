import React from "react"

export const Home = () => {
    return(
        <div className="bg-[#d88a84] min-h-screen">
            <header className="flex justify-between items-center px-6 py-4 bg-[#d88a84] text-white">
            <h1 className="text-2xl font-bold">bazar.</h1>
            <nav className="space-x-4">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Login</a>
            <button className="bg-white text-[#d88a84] hover:bg-gray-100">Cadastre-se</button>
            </nav>
            </header>
      </div>
    );
};