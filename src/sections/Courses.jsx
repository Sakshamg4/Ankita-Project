import React, { useState } from 'react';
import { Check, ChevronDown, ChevronUp, Star, Clock, Calendar, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SyllabusSection = ({ title, items, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="border border-white/10 rounded-xl bg-deepCharcoal overflow-hidden mb-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-white/5 transition-colors"
            >
                <h3 className="text-xl font-heading text-white">{title}</h3>
                {isOpen ? <ChevronUp className="text-metallicGold" /> : <ChevronDown className="text-gray-500" />}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="p-6 pt-0 border-t border-white/5 grid md:grid-cols-2 gap-4">
                            {items.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <Check size={16} className="text-metallicGold mt-1 shrink-0" />
                                    <span className="text-gray-300 text-sm font-light leading-relaxed">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Courses = () => {
    const makeupCurriculum = [
        "Step by step detailed products knowledge & Brush uses",
        "Skin Analysis, Undertone & Colour Wheel Theory",
        "CTM Prep & Foundation Mixing Techniques",
        "Contouring, Highlighting, Blush Application",
        "Eyebrow Correction, Eyeliners, Lashes & Lenses",
        "Colour Correction & Concealing Methods",
        "Blending Tricks for Flawless Finish",
        "Waterproof Base Making",
        "Nude Editorial & Mature Skin Makeup",
        "HD Bridal Look & Quick Reception Change",
        "3D Signature Bridal Look & Airbrush Makeup",
        "Smokey Party Look"
    ];

    const hairCurriculum = [
        "Hairstyling Tools & Product Knowledge",
        "Traditional Buns, Curls & Front Variations",
        "Backcombing Tricks & Pulling Line Techniques",
        "Hair Extensions & Flower Placement",
        "International Variations: Classic Rose, Twist & Pull Bun",
        "Messy Hair Buns & International Braids"
    ];

    const bonusCurriculum = [
        "Saree Draping Workshops",
        "Vanity Building Guidance",
        "Photography Techniques & Ring Light Usage",
        "Social Media Marketing & Business Guidance",
        "FREE Model Shoot on Final Exam Day"
    ];

    return (
        <section id="courses" className="py-24 bg-black relative">
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <span className="text-metallicGold text-sm tracking-[0.3em] uppercase block mb-4 font-semibold">Flagship Program</span>
                    <h2 className="text-4xl md:text-5xl font-heading text-softWhite mb-6 leading-tight">
                        Professional Makeup & Hair Artistry
                    </h2>
                    <p className="text-gray-400 font-light text-lg">
                        45 Days Basic to Highly Advanced International Level Certification Course
                    </p>
                </div>

                {/* Course Details Card */}
                <div className="bg-richBlack border border-white/10 rounded-2xl p-8 md:p-12 mb-16 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-metallicGold/5 rounded-full blur-3xl -z-10"></div>

                    <div className="grid md:grid-cols-3 gap-8 mb-12 border-b border-white/10 pb-12">
                        <div className="flex flex-col items-center text-center p-4">
                            <Clock size={32} className="text-metallicGold mb-4" />
                            <h4 className="text-white font-bold text-lg mb-1">Duration</h4>
                            <p className="text-gray-400">45 Days (Intensive)</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-4 border-y md:border-y-0 md:border-x border-white/10">
                            <Award size={32} className="text-metallicGold mb-4" />
                            <h4 className="text-white font-bold text-lg mb-1">Certification</h4>
                            <p className="text-gray-400">Professional Certificate Included</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-4">
                            <Calendar size={32} className="text-metallicGold mb-4" />
                            <h4 className="text-white font-bold text-lg mb-1">Level</h4>
                            <p className="text-gray-400">Basic to International Advance</p>
                        </div>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-center text-2xl font-heading text-white mb-8">Comprehensive Curriculum</h3>
                        <SyllabusSection title="Module 1: Makeup Artistry Mastery" items={makeupCurriculum} defaultOpen={true} />
                        <SyllabusSection title="Module 2: Advanced Hairstyling" items={hairCurriculum} />
                        <SyllabusSection title="Module 3: Industry & Business Skills" items={bonusCurriculum} />
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-white/60 italic mb-8">
                            "From Basic techniques to advance global trends, our students are skilled to perfection."
                        </p>
                        <button className="px-10 py-4 bg-metallicGold text-black font-bold tracking-widest uppercase hover:bg-white transition-colors rounded-sm shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                            Enquire Now
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Courses;
