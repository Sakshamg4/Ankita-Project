import React from 'react';
import { Star, Award, UserCheck, Clock } from 'lucide-react';

const reasons = [
    { icon: <Star size={28} />, title: "Premium Products", desc: "Practice with top-tier international makeup brands like MAC, Huda Beauty, and more." },
    { icon: <Award size={28} />, title: "Certification", desc: "Receive industry-recognized certificates upon course completion to boost your career." },
    { icon: <UserCheck size={28} />, title: "Personal Mentorship", desc: "Small batch sizes ensure you get individual attention and guidance from experts." },
    { icon: <Clock size={28} />, title: "Flexible Batches", desc: "Weekend and weekday batches available to suit students and working professionals." }
];

const WhyChooseUs = () => {
    return (
        <section className="py-24 bg-richBlack border-t border-white/5 relative">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <h3 className="text-metallicGold text-sm tracking-[0.3em] uppercase mb-4 font-semibold">The Ankita Advantage</h3>
                        <h2 className="text-4xl md:text-5xl font-heading text-softWhite mb-8 leading-tight">Why Choose Us?</h2>
                        <p className="text-gray-400 font-light mb-12 max-w-lg leading-relaxed">
                            We don't just teach makeup; we build careers. Our holistic approach ensures you are industry-ready from day one.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-10">
                            {reasons.map((item, idx) => (
                                <div key={idx} className="flex flex-col gap-4 group">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-deepCharcoal to-black flex items-center justify-center text-metallicGold border border-white/5 group-hover:border-metallicGold/40 transition-colors shadow-lg shadow-black/50">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-heading font-bold text-lg mb-2">{item.title}</h4>
                                        <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Visual Side - Abstract Gallery Grid */}
                    <div className="relative order-1 lg:order-2">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4 lg:translate-y-12">
                                <div className="h-64 bg-deepCharcoal rounded-t-[5rem] rounded-b-xl border border-white/5 relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-neutral-800 transition-transform duration-700 group-hover:scale-110"></div>
                                </div>
                                <div className="h-40 bg-metallicGold/5 rounded-xl border border-metallicGold/20 backdrop-blur-sm relative overflow-hidden"></div>
                            </div>
                            <div className="space-y-4">
                                <div className="h-40 bg-deepCharcoal rounded-xl border border-white/5 relative overflow-hidden"></div>
                                <div className="h-64 bg-deepCharcoal rounded-b-[5rem] rounded-t-xl border border-white/5 relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-neutral-800 transition-transform duration-700 group-hover:scale-110"></div>
                                </div>
                            </div>
                        </div>
                        {/* Decorative Circle */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-metallicGold rounded-full blur-[80px] -z-10 opacity-40"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default WhyChooseUs;
