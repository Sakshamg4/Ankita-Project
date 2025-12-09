import React from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-20 pb-10 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                    <div className="mb-6 md:mb-0 text-center md:text-left">
                        <span className="text-3xl font-heading text-softWhite tracking-wide block">
                            ANKITA <span className="text-metallicGold font-light">ACADEMY</span>
                        </span>
                        <p className="text-xs text-gray-500 mt-2 tracking-widest uppercase">The Art of Beauty</p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="https://www.instagram.com/ankitas_makeupacademy" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-deepCharcoal flex items-center justify-center text-gray-400 hover:text-metallicGold hover:bg-white/5 transition-all border border-white/5">
                            <Instagram size={20} />
                        </a>
                        <a href="#" className="w-12 h-12 rounded-full bg-deepCharcoal flex items-center justify-center text-gray-400 hover:text-metallicGold hover:bg-white/5 transition-all border border-white/5">
                            <Facebook size={20} />
                        </a>
                        <a href="#" className="w-12 h-12 rounded-full bg-deepCharcoal flex items-center justify-center text-gray-400 hover:text-metallicGold hover:bg-white/5 transition-all border border-white/5">
                            <Youtube size={20} />
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-sm text-gray-400">
                    <div>
                        <h5 className="text-white font-bold mb-6 uppercase tracking-widest text-xs text-metallicGold">Explore</h5>
                        <ul className="space-y-3 font-light">
                            <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                            <li><a href="#courses" className="hover:text-white transition-colors">Courses</a></li>
                            <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
                            <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
                            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-white font-bold mb-6 uppercase tracking-widest text-xs text-metallicGold">Programs</h5>
                        <ul className="space-y-3 font-light">
                            <li><a href="#" className="hover:text-white transition-colors">Professional Makeup</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Advanced Hair Styling</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Personal Grooming</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Bridal Mastery</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-white font-bold mb-6 uppercase tracking-widest text-xs text-metallicGold">Legal</h5>
                        <ul className="space-y-3 font-light">
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-white font-bold mb-6 uppercase tracking-widest text-xs text-metallicGold">Get in Touch</h5>
                        <ul className="space-y-3 font-light">
                            <li>info@ankimakeup.com</li>
                            <li>
                                <a href="https://wa.me/919987461826" target="_blank" rel="noopener noreferrer" className="hover:text-metallicGold transition-colors">
                                    +91 99874 61826
                                </a>
                            </li>
                            <li>Airoli, Navi Mumbai <br /><span className="text-[10px] text-gray-500">Behind Dutta Meghe College</span></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center text-xs text-gray-600 font-light flex flex-col md:flex-row justify-between items-center">
                    <p>&copy; {new Date().getFullYear()} Ankita Makeup Academy. All Rights Reserved.</p>
                    <p className="mt-2 md:mt-0">Designed with ✨ by Antigravity</p>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
