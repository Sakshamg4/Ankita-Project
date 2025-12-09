import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/hero_model.png';

const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-richBlack">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-richBlack via-deepCharcoal to-richBlack z-0" />

            {/* Animated Particles / Sparkle Overlay */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

            {/* Main Gold Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-metallicGold/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center min-h-[80vh]">
                {/* Content Block */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-left relative z-10"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        <h2 className="text-metallicGold tracking-[0.2em] text-sm uppercase mb-4 font-semibold">Welcome to excellence</h2>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-medium text-softWhite mb-6 leading-[1.1]">
                        Unlock Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-metallicGold via-metallicGold-light to-metallicGold drop-shadow-[0_0_15px_rgba(212,175,55,0.3)] italic">
                            Artistry
                        </span>
                    </h1>

                    <p className="text-lg text-gray-400 mb-10 max-w-lg font-light leading-relaxed font-body">
                        Professional Makeup Courses • Certification • Hands-On Training.
                        Start your journey with Ankita Makeup Academy.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5">
                        <button className="relative px-8 py-4 bg-metallicGold text-black font-semibold tracking-widest uppercase overflow-hidden group">
                            <span className="relative z-10 group-hover:text-white transition-colors duration-300">View Courses</span>
                            <div className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
                        </button>
                        <button className="px-8 py-4 border border-metallicGold text-metallicGold hover:bg-metallicGold/10 transition-colors uppercase tracking-widest font-semibold">
                            Book Free Trial
                        </button>
                    </div>
                </motion.div>

                {/* Visual / Decor */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "circOut" }}
                    className="hidden md:flex justify-center items-center relative h-full"
                >
                    {/* Decorative Elements */}
                    <div className="relative w-[400px] h-[500px] border border-metallicGold/30 p-4 rounded-t-full">
                        <div className="absolute top-0 right-0 w-full h-full border border-metallicGold/20 rounded-t-full translate-x-4 -translate-y-4"></div>
                        <div className="w-full h-full bg-deepCharcoal/50 backdrop-blur-sm rounded-t-full overflow-hidden relative">
                            <img
                                src={heroImage}
                                alt="High Fashion Makeup Model"
                                className="w-full h-full object-cover opacity-90"
                            />
                            <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent"></div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
