import React from 'react';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-deepCharcoal relative">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <div className="mb-12">
                            <span className="text-metallicGold text-sm tracking-[0.3em] uppercase block mb-4 font-semibold">Get in Touch</span>
                            <h2 className="text-4xl md:text-5xl font-heading text-softWhite mb-6">Let's Discuss Your Future</h2>
                            <p className="text-gray-400 font-light">
                                Have questions about our courses? Book a counseling session or visit our academy.
                            </p>
                        </div>

                        <div className="space-y-8 mb-12">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-richBlack rounded-lg text-metallicGold border border-white/5">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Visit Us</h4>
                                    <p className="text-gray-400 text-sm">123 Fashion Street, Near City Landmark,<br />New Delhi, India 110001</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-richBlack rounded-lg text-metallicGold border border-white/5">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Call Us</h4>
                                    <p className="text-gray-400 text-sm">+91 98765 43210</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-richBlack rounded-lg text-metallicGold border border-white/5">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Email Us</h4>
                                    <p className="text-gray-400 text-sm">info@ankimakeup.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-richBlack p-8 md:p-12 rounded-2xl border border-white/5 shadow-2xl">
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-500 text-xs uppercase tracking-wider mb-2">Name</label>
                                    <input type="text" className="w-full bg-deepCharcoal border border-white/10 p-3 rounded text-white focus:border-metallicGold focus:outline-none transition-colors" placeholder="Your Name" />
                                </div>
                                <div>
                                    <label className="block text-gray-500 text-xs uppercase tracking-wider mb-2">Phone</label>
                                    <input type="tel" className="w-full bg-deepCharcoal border border-white/10 p-3 rounded text-white focus:border-metallicGold focus:outline-none transition-colors" placeholder="+91 9999999999" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-gray-500 text-xs uppercase tracking-wider mb-2">Email</label>
                                <input type="email" className="w-full bg-deepCharcoal border border-white/10 p-3 rounded text-white focus:border-metallicGold focus:outline-none transition-colors" placeholder="your@email.com" />
                            </div>
                            <div>
                                <label className="block text-gray-500 text-xs uppercase tracking-wider mb-2">Message</label>
                                <textarea rows="4" className="w-full bg-deepCharcoal border border-white/10 p-3 rounded text-white focus:border-metallicGold focus:outline-none transition-colors" placeholder="I am interested in..."></textarea>
                            </div>

                            <button type="submit" className="w-full py-4 bg-gradient-to-r from-metallicGold to-metallicGold-dark text-black font-bold tracking-widest uppercase hover:opacity-90 transition-opacity rounded-sm">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-24 h-[400px] w-full bg-neutral-900 border-t border-white/5 relative flex items-center justify-center">
                <span className="text-white/20 font-heading text-3xl">Google Maps Embed</span>
            </div>
        </section>
    );
};
export default Contact;
