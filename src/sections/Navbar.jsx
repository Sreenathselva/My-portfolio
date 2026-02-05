import { useState, useEffect } from 'react';
import { motion } from "motion/react";
function Navigation({ onClick }) {
    return (
        <ul className='nav-ul'>
            <li><a href="#home" className='nav-link' onClick={onClick}>Home</a></li>
            <li><a href="#about" className='nav-link' onClick={onClick}>About</a></li>
            <li><a href="#experience" className='nav-link' onClick={onClick}>Work</a></li>
            <li><a href="#contact" className='nav-link' onClick={onClick}>Contact</a></li>
        </ul>
    );
}
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScroll, setIsScroll] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 60) {
                setIsScroll(true);
                console.log("scrolled");
            } else {
                setIsScroll(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return <div className={`fixed inset-x-0 z-200 2-full backdrop-blur-lg bg-primary ${isScroll ? "bg-primary" : "bg-secondary" }`}>
        <div
            className={`navbar-container c-space max-w-8xl transition-all duration-300 ${isScroll ? "py-0" : "py-3"
                }`}
        >
            <div className="flex items-center justify-between py-2 ">
                <a href="" className="text-xl font-bold transition-colors text-neutral-400 hover:text-white">
                    Sreeeyy
                </a>
                <button onClick={() => setIsOpen(!isOpen)}
                    className='flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden'
                >
                    <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
                        className="w-6 h-6" alt="toggle-button" />
                </button>
                <nav className='hidden sm:flex'>
                    <Navigation />
                </nav>
            </div>
        </div>
        {isOpen && (
            <motion.div className="block overflow-hidden text-center
             sm:hidden" initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ maxHeight: "100vh" }}
                transition={{ duration: .5 }}>
                <nav className='pb-5'>
                    <Navigation />
                </nav>
            </motion.div>
        )}
    </div>
}

export default Navbar;