import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Courses from './sections/Courses';
import Portfolio from './sections/Portfolio';
import WhyChooseUs from './sections/WhyChooseUs';
import Gallery from './sections/Gallery';
import Contact from './sections/Contact';

function App() {
    return (
        <div className="min-h-screen bg-richBlack text-softWhite font-body overflow-x-hidden selection:bg-metallicGold selection:text-black scroll-smooth">
            <Header />
            <main>
                <Hero />
                <About />
                <WhyChooseUs />
                <Courses />
                <Portfolio />
                <Gallery />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
