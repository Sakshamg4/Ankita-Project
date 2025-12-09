import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-4 shadow-lg shadow-black/50' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 bg-gradient-to-br from-metallicGold to-metallicGold-dark rounded-full flex items-center justify-center text-black font-bold font-heading text-xl group-hover:shadow-[0_0_15px_rgba(212,175,55,0.6)] transition-shadow duration-300">
                        A
                    </div>
                    <span className="text-xl md:text-2xl font-heading text-softWhite tracking-wide group-hover:text-metallicGold transition-colors">
                        ANKITA <span className="font-light">ACADEMY</span>
                    </span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    {['About', 'Courses', 'Why Us', 'Gallery', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(' ', '')}`}
                            className="text-softWhite/80 hover:text-metallicGold transition-colors text-sm tracking-widest uppercase relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-metallicGold after:bottom-[-4px] after:left-0 after:transition-all hover:after:w-full"
                        >
                            {item}
                        </a>
                    ))}
                    <button className="px-6 py-2 border border-metallicGold text-metallicGold hover:bg-metallicGold hover:text-black transition-all rounded-none tracking-widest text-xs font-bold uppercase duration-300">
                        Book Trial
                    </button>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-metallicGold p-2"
                    onClick={() => setMobileMenuOpen(true)}
                    aria-label="Menu"
                >
                    <Menu size={28} />
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "tween", duration: 0.4 }}
                        className="fixed inset-0 bg-richBlack z-50 flex flex-col justify-center items-center gap-8"
                    >
                        <button
                            className="absolute top-6 right-6 text-metallicGold p-2"
                            onClick={() => setMobileMenuOpen(false)}
                            aria-label="Close Menu"
                        >
                            <X size={32} />
                        </button>
                        {['About', 'Courses', 'Why Us', 'Gallery', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(' ', '')}`}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-3xl font-heading text-softWhite hover:text-metallicGold transition-colors"
                            >
                                {item}
                            </a>
                        ))}
                        <button className="mt-8 px-10 py-3 bg-metallicGold text-black font-bold tracking-widest uppercase hover:bg-white transition-colors">
                            Book Trial
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
