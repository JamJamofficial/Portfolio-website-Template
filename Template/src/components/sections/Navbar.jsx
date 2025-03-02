import React, { useEffect } from 'react';

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault(); // Prevent default anchor behavior
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <a href="#home" className="font-mono text-xl font-bold text-white"
                        onClick={(e) => handleSmoothScroll(e, "#home")}
                    >
                        Your <span className="font-bold text-purple-500">text goes here</span>
                    </a>

                    <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        &#9776;
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home"
                            className="text-gray-300 hover:text-white transition-colors"
                            onClick={(e) => handleSmoothScroll(e, "#home")}
                        >
                            Home
                        </a>

                        <a href="#about"
                            className="text-gray-300 hover:text-white transition-colors"
                            onClick={(e) => handleSmoothScroll(e, "#about")}
                        >
                            About
                        </a>

                        <a href="#projects"
                            className="text-gray-300 hover:text-white transition-colors"
                            onClick={(e) => handleSmoothScroll(e, "#projects")}
                        >
                            Projects
                        </a>

                        <a href="#contact"
                            className="text-gray-300 hover:text-white transition-colors"
                            onClick={(e) => handleSmoothScroll(e, "#contact")}
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};
