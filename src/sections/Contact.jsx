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
                                    <p className="text-gray-400 text-sm">Ground floor, Plot 109, Sector 3A,<br />Airoli, Navi Mumbai 400708<br />Landmark: Behind Dutta Meghe Engineering College</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-richBlack rounded-lg text-metallicGold border border-white/5">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Call Us</h4>
                                    <a href="https://wa.me/919987461826" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-metallicGold transition-colors">+91 99874 61826</a>
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
            <div className="mt-24 w-full">
                <div className="container mx-auto px-6 mb-4">
                    <p className="text-metallicGold font-medium flex items-center justify-center gap-2">
                        <MapPin size={18} />
                        <span>5 mins walk from Airoli Station</span>
                    </p>
                </div>
                <div className="h-[400px] w-full bg-neutral-900 border-t border-white/5 relative flex items-center justify-center">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.0616594200987!2d72.98690097521853!3d19.148778082070866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9abeb27638b%3A0x763a038e5fe619b9!2sANKITA%20MAKEUP%20ACADEMY!5e0!3m2!1sen!2sin!4v1765279346894!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700 invert-[0.8] hover:invert-0"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};
export default Contact;
