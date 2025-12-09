import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [1, 2, 3, 4, 5, 6];

const Gallery = () => {
    const [selectedId, setSelectedId] = useState(null);

    return (
        <section id="gallery" className="py-24 bg-richBlack">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-metallicGold text-sm tracking-[0.3em] uppercase block mb-4 font-semibold">Portfolio</span>
                    <h2 className="text-4xl md:text-5xl font-heading text-softWhite">Captured Moments</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {images.map((id) => (
                        <motion.div
                            key={id}
                            layoutId={`img-${id}`}
                            className="aspect-square bg-deepCharcoal rounded-lg border border-white/5 relative overflow-hidden group cursor-pointer"
                            onClick={() => setSelectedId(id)}
                        >
                            {/* Placeholder Image Div */}
                            <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center text-white/10 text-4xl font-heading group-hover:scale-110 transition-transform duration-700">
                                {id}
                            </div>
                            <div className="absolute inset-0 border border-transparent group-hover:border-metallicGold/50 transition-colors duration-300 pointer-events-none rounded-lg"></div>

                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <ZoomIn className="text-metallicGold w-8 h-8" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedId && (
                        <motion.div
                            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedId(null)}
                        >
                            <button
                                className="absolute top-6 right-6 text-white/70 hover:text-metallicGold transition-colors"
                                onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                            >
                                <X size={40} />
                            </button>
                            <motion.div
                                layoutId={`img-${selectedId}`}
                                className="w-full max-w-4xl aspect-[4/3] bg-neutral-800 rounded-lg overflow-hidden border border-metallicGold/20 shadow-2xl shadow-metallicGold/10"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="w-full h-full flex items-center justify-center text-white/20 text-8xl font-heading bg-deepCharcoal">
                                    {selectedId}
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};
export default Gallery;
