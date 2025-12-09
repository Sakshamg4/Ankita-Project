import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-24 bg-richBlack relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-metallicGold/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
                <div className="relative group">
                    {/* Image Frame */}
                    <div className="w-full aspect-[4/5] bg-deepCharcoal rounded-sm relative overflow-hidden border border-white/5">
                        <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center">
                            <span className="text-white/20 text-lg tracking-widest uppercase">Artist Image</span>
                        </div>
                    </div>

                    {/* Floating Card */}
                    <div className="absolute -bottom-6 -right-6 md:-right-12 p-6 bg-deepCharcoal/90 backdrop-blur-xl border border-metallicGold/30 max-w-xs shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
                        <p className="text-metallicGold font-heading text-3xl mb-1">10+</p>
                        <p className="text-gray-400 text-sm tracking-wider uppercase">Years of Excellence</p>
                    </div>
                </div>

                <div>
                    <div className="w-12 h-1 bg-metallicGold mb-8"></div>
                    <h3 className="text-metallicGold text-sm tracking-[0.3em] uppercase mb-4 font-semibold">About The Academy</h3>
                    <h2 className="text-4xl md:text-5xl font-heading text-softWhite mb-8 leading-tight">
                        Master the Art of <br />
                        <span className="text-white">Transformation</span>
                    </h2>

                    <div className="space-y-6 text-gray-400 font-light text-lg leading-relaxed">
                        <p>
                            Ankita Makeup Academy stands at the forefront of beauty education, dedicated to empowering the next generation of makeup artists.
                            We don't just teach techniques; we cultivate creativity and confidence.
                        </p>
                        <p>
                            Whether you are a beginner looking to start a career or a professional wanting to upskill, our certification programs are designed to meet global standards.
                        </p>
                    </div>

                    <div className="mt-12 grid grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-white font-bold text-xl mb-1">Certified</h4>
                            <p className="text-sm text-gray-500">Industry Recognized</p>
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-xl mb-1">Hands-On</h4>
                            <p className="text-sm text-gray-500">Practical Training</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
