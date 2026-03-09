import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Specializations from './components/Specializations';
import Experience from './components/Experience';
import WhyChoose from './components/WhyChoose';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16"> {/* Offset for fixed navbar */}
        <Hero />
        <About />
        <Specializations />
        <Experience />
        <WhyChoose />
        <Testimonials />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
