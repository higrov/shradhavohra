export default function Footer() {
  return (
    <footer className="bg-[#1A5C5C] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">Dr. Shradha Vohra</h3>
            <p className="text-white/70 text-sm mb-4">M.B.B.S, M.S. (OBGYN), FMAS, DMAS, FIH</p>
            <p className="text-white">
              Obstetrician & Gynaecologist specializing in minimally invasive surgery and women&apos;s health.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="relative text-white transition after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-2px] after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">About</a></li>
              <li><a href="#specializations" className="relative text-white transition after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-2px] after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Specializations</a></li>
              <li><a href="#experience" className="relative text-white transition after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-2px] after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Experience</a></li>
              <li><a href="#testimonials" className="relative text-white transition after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-2px] after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Testimonials</a></li>
              <li><a href="#contact" className="relative text-white transition after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-2px] after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-white mb-2">Phone: +91 99674 60404</p>
            <p className="text-white">Email: shradha.vohra@gmail.com</p>
          </div>
        </div>
        <div className="border-t border-white/30 pt-8 text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Dr. Shradha Vohra. All rights reserved.</p>
          <p className="mt-2">
            This website is for informational purposes only and does not constitute medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
