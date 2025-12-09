import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play, Pause, CheckCircle2 } from 'lucide-react';

const Portfolio = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <section id="portfolio" className="py-24 bg-richBlack relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-[10%] right-[5%] w-96 h-96 bg-metallicGold rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[10%] left-[5%] w-64 h-64 bg-white rounded-full blur-[80px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10" ref={ref}>
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6 }}
                        className="text-metallicGold text-sm tracking-[0.3em] uppercase block mb-3 font-semibold"
                    >
                        Real Results
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-heading text-softWhite"
                    >
                        Transformations
                    </motion.h2>
                </div>

                <div className="grid lg:grid-cols-3 gap-12 items-center">

                    {/* Left Content - The Process */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.8 }}
                        className="hidden lg:flex flex-col gap-8 text-right"
                    >
                        <div>
                            <h3 className="text-2xl font-heading text-white mb-2">The Techniques</h3>
                            <p className="text-gray-400 font-light text-sm leading-relaxed">
                                Mastering the art of skin preparation, color correction, and contouring. Our students learn to enhance natural features while creating a flawless base that lasts all day.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 items-end">
                            <div className="flex items-center gap-3">
                                <span className="text-gray-300 font-medium">Color Theory</span>
                                <CheckCircle2 size={20} className="text-metallicGold" />
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-gray-300 font-medium">Face Sculpting</span>
                                <CheckCircle2 size={20} className="text-metallicGold" />
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-gray-300 font-medium">Precision Eye Art</span>
                                <CheckCircle2 size={20} className="text-metallicGold" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Middle Content - The Video (Mobile Size) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.8 }}
                        className="relative mx-auto mt-8 lg:mt-0"
                    >
                        {/* Phone Frame Aesthetic */}
                        <div className="relative w-[300px] h-[600px] bg-black rounded-[40px] border-4 border-gray-800 shadow-[0_0_50px_rgba(212,175,55,0.15)] overflow-hidden">

                            {/* Video Placeholder */}
                            <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center group overflow-hidden">
                                {/* Use a poster image if real video not available, or a video tag */}
                                <img
                                    src="/api/placeholder/400/800"
                                    alt="Makeup Transformation"
                                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                                />

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>

                                {/* Text on Video */}
                                <div className="absolute top-8 left-0 w-full text-center">
                                    <span className="bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-bold tracking-widest text-white border border-white/10">Before & After</span>
                                </div>

                                <div className="absolute bottom-8 left-6 right-6">
                                    <h4 className="text-white font-heading text-xl mb-1">Bridal Glam</h4>
                                    <p className="text-gray-300 text-xs">Student Work • Batch 2024</p>
                                </div>

                                {/* Play Button */}
                                <button
                                    onClick={togglePlay}
                                    className="absolute inset-0 flex items-center justify-center z-10"
                                >
                                    <div className="w-16 h-16 rounded-full bg-metallicGold/90 flex items-center justify-center text-black hover:scale-110 transition-transform cursor-pointer shadow-lg shadow-metallicGold/20">
                                        {isPlaying ? <Pause size={28} fill="currentColor" /> : <Play size={28} fill="currentColor" className="ml-1" />}
                                    </div>
                                </button>

                                {/* Hidden Video Element for functionality (using a stock placeholder link if valid, or just logic) */}
                                <video
                                    ref={videoRef}
                                    loop
                                    muted
                                    className="hidden" // Hidden for now as we don't have a real file, simulating UI
                                >
                                    {/* <source src="path_to_video.mp4" type="video/mp4" /> */}
                                </video>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Content - The Results (Mobile: appears below) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col gap-8 text-left"
                    >
                        {/* Mobile-only visible top part to simulate left content on mobile stack */}
                        <div className="lg:hidden mb-4 text-center">
                            <h3 className="text-2xl font-heading text-white mb-2">The Techniques</h3>
                            <p className="text-gray-400 font-light text-sm leading-relaxed mb-6">
                                Mastering the art of skin preparation, color correction, and contouring.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-heading text-white mb-2">The Finish</h3>
                            <p className="text-gray-400 font-light text-sm leading-relaxed">
                                A high-impact transformation that boosts confidence. The 'After' reveals not just makeup, but the artist's ability to interpret a client's specific needs and personality.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 items-start">
                            <div className="flex items-center gap-3">
                                <CheckCircle2 size={20} className="text-metallicGold" />
                                <span className="text-gray-300 font-medium">Radiant Skin Finish</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 size={20} className="text-metallicGold" />
                                <span className="text-gray-300 font-medium">Long-lasting Wear</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 size={20} className="text-metallicGold" />
                                <span className="text-gray-300 font-medium">Camera Ready</span>
                            </div>
                        </div>

                        <div className="mt-4 pt-8 border-t border-white/10">
                            <button className="text-metallicGold uppercase tracking-widest text-xs font-bold hover:text-white transition-colors flex items-center gap-2 group">
                                View Full Portfolio
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Portfolio;
