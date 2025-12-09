import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Handle scroll for sticky header styling
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden'; // Handle mobile safari
        } else {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        };
    }, [mobileMenuOpen]);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Courses', href: '#courses' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <>
            <header
                className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${isScrolled
                    ? 'bg-black/90 backdrop-blur-md border-white/10 py-3 shadow-2xl'
                    : 'bg-transparent border-transparent py-5'
                    }`}
            >
                <div className="container mx-auto px-6 flex justify-between items-center relative">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-3 group relative z-50">
                        <div className="w-10 h-10 bg-gradient-to-br from-metallicGold to-metallicGold-dark rounded-full flex items-center justify-center text-black font-bold font-heading text-xl shadow-[0_0_15px_rgba(212,175,55,0.4)] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] transition-all">
                            A
                        </div>
                        <span className="text-xl font-heading text-softWhite tracking-wide group-hover:text-metallicGold transition-colors">
                            ANKITA <span className="font-light text-metallicGold">ACADEMY</span>
                        </span>
                    </a>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium tracking-widest text-white/80 hover:text-metallicGold transition-colors uppercase relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-metallicGold transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                        <button className="px-6 py-2.5 bg-transparent border border-metallicGold text-metallicGold text-xs font-bold tracking-widest uppercase hover:bg-metallicGold hover:text-black transition-all duration-300">
                            Book Trial
                        </button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(true)}
                        className="md:hidden relative z-50 p-2 text-metallicGold hover:bg-white/10 rounded-full transition-colors"
                        aria-label="Open Menu"
                    >
                        <Menu size={28} />
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
                        className="fixed inset-0 z-[9999] md:hidden flex flex-col bg-black"
                    >
                        {/* Header within Mobile Menu (for logo and close button alignment) */}
                        <div className="flex justify-between items-center p-6 border-b border-white/10 shrink-0 bg-black">
                            <a href="#" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3">
                                <div className="w-9 h-9 bg-gradient-to-br from-metallicGold to-metallicGold-dark rounded-full flex items-center justify-center text-black font-bold font-heading text-lg">
                                    A
                                </div>
                                <span className="text-lg font-heading text-softWhite tracking-wide">
                                    ANKITA <span className="font-light text-metallicGold">ACADEMY</span>
                                </span>
                            </a>
                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                className="p-2 text-metallicGold hover:bg-white/10 rounded-full transition-colors"
                                aria-label="Close Menu"
                            >
                                <X size={28} />
                            </button>
                        </div>

                        {/* Scrollable Content Area */}
                        <div className="flex-1 overflow-y-auto overflow-x-hidden py-8 px-6 flex flex-col items-center">
                            <nav className="flex flex-col items-center gap-8 w-full">
                                {navLinks.map((link, idx) => (
                                    <motion.a
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 + (idx * 0.05) }}
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="text-3xl font-heading text-white/90 hover:text-metallicGold transition-colors w-full text-center py-2"
                                    >
                                        {link.name}
                                    </motion.a>
                                ))}
                            </nav>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="mt-12 w-full max-w-xs space-y-4"
                            >
                                <button
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="w-full py-4 bg-metallicGold text-black font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors"
                                >
                                    Book A Free Trial
                                </button>
                                <p className="text-center text-gray-500 text-xs tracking-wider uppercase pt-8">
                                    The Art of Beauty
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
