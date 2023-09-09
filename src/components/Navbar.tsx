'use client'
import { useState } from "react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    const links = ["Projects","Experience","About","Contact"]

    return (
        <nav>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 text-white">
                <div className="flex items-center">
                    <h1 className="text-3xl lg:text-5xl text-white font-semibold">AC</h1>
                </div>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-row">
                        {links.map((link) => (
                            <li key={link}>
                                <a href="#" className="mx-9">{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <button type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm md:hidden" onClick={() => toggleMenu()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
                <div className={`w-full block flex-grow md:hidden ${isOpen ? "block" : "hidden"}`}>
                    <ul className="flex backdrop-blur-sm flex-col p-4 mt-4 border border-gray-100 rounded-lg ">
                        {links.map((link) => (
                            <li className="my-4" key={link}>
                                <a href="#" className="mx-9">{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                
            </div>
        </nav>
    );
}