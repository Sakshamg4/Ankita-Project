import React from 'react';
import { Check } from 'lucide-react';

const courses = [
    {
        title: "Professional Makeup Artistry",
        duration: "3 Months",
        level: "Beginner to Pro",
        description: "Complete course covering basics to bridal and editorial makeup. Build a strong foundation for your career.",
        features: ["Tools & Hygiene Standards", "Skin Prep & Analysis", "Bridal & Party Makeup", "Portfolio Building"]
    },
    {
        title: "Advanced Hair Styling",
        duration: "1 Month",
        level: "Intermediate",
        description: "Master the art of hair styling from blow-drys to intricate updos for specialized events.",
        features: ["Heat Styling Tools", "Bridal Buns & Braids", "Hair Extensions", "Texturizing Techniques"]
    },
    {
        title: "Self Grooming Workshop",
        duration: "1 Week",
        level: "Personal",
        description: "Learn to be your own makeup artist for daily wear and parties with techniques suited for your face.",
        features: ["Day to Night Looks", "Product Knowledge", "Quick Hairstyles", "Personal Sanitation"]
    }
];

const Courses = () => {
    return (
        <section id="courses" className="py-24 bg-deepCharcoal relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20 max-w-2xl mx-auto">
                    <span className="text-metallicGold text-sm tracking-[0.3em] uppercase block mb-4 font-semibold">Our Programs</span>
                    <h2 className="text-4xl md:text-5xl font-heading text-softWhite mb-6">Start Your Professional Journey</h2>
                    <p className="text-gray-400 font-light">
                        Our curriculum is designed to provide you with the technical skills and artistic vision needed to succeed in the beauty industry.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {courses.map((course, idx) => (
                        <div key={idx} className="group bg-richBlack border border-white/5 p-10 hover:border-metallicGold/30 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden flex flex-col">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-metallicGold to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                            <div className="flex justify-between items-start mb-6">
                                <span className="text-xs font-bold tracking-widest text-metallicGold uppercase border border-metallicGold/20 px-3 py-1 rounded-sm">{course.duration}</span>
                            </div>

                            <h3 className="text-2xl font-heading text-white mb-4 group-hover:text-metallicGold transition-colors">{course.title}</h3>
                            <p className="text-gray-400 text-sm mb-8 leading-relaxed border-b border-white/5 pb-8">{course.description}</p>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {course.features.map((feat, i) => (
                                    <li key={i} className="flex items-start text-sm text-gray-300">
                                        <Check size={16} className="text-metallicGold mr-3 mt-0.5 shrink-0" />
                                        {feat}
                                    </li>
                                ))}
                            </ul>

                            <button className="w-full py-4 bg-white/5 text-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-metallicGold hover:text-black transition-all duration-300">
                                View Curriculum
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;
