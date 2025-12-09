import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import img1 from '../assets/gallery_bridal.png';
import img2 from '../assets/gallery_editorial.png';
import img3 from '../assets/gallery_soft_glam.png';
import img4 from '../assets/hero_model.png';
import img5 from '../assets/artist_portrait.png';
import img6 from '../assets/abstract_gold_texture.png';

const images = [img1, img2, img3, img4, img5, img6];

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
                    {images.map((img, idx) => (
                        <motion.div
                            key={idx}
                            layoutId={`img-${idx}`}
                            className="aspect-square bg-deepCharcoal rounded-lg border border-white/5 relative overflow-hidden group cursor-pointer"
                            onClick={() => setSelectedId(idx)}
                        >
                            <img
                                src={img}
                                alt={`Gallery Image ${idx + 1}`}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
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
                    {selectedId !== null && (
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
                                <img
                                    src={images[selectedId]}
                                    alt="Gallery Preview"
                                    className="w-full h-full object-contain"
                                />
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};
export default Gallery;
