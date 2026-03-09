export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#F9C7D4] to-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-[#1A5C5C] mb-6">
            Dr. Shradha Vohra
          </h1>
          <p className="text-lg text-gray-500 mb-4">M.B.B.S, M.S. (Obstetrics &amp; Gynaecology), FMAS, DMAS, FIH</p>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Dedicated to providing high-quality women&apos;s healthcare, specializing in obstetrics
            and gynaecology. Passionate about managing high-risk pregnancies, minimally invasive
            surgery, and enhancing patient outcomes through compassionate care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-[#1A5C5C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#134A4A] transition"
            >
              Book Appointment
            </a>
            <a
              href="#contact"
              className="border-2 border-[#1A5C5C] text-[#1A5C5C] px-8 py-4 rounded-full font-semibold hover:bg-[#2A7B7B]/20 transition"
            >
              Contact Clinic
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-[#F9C7D4] p-8 rounded-2xl shadow-lg text-center">
            <div className="text-5xl font-bold text-[#1A5C5C] mb-2">7+</div>
            <div className="text-gray-600 font-medium">Years in Medicine</div>
          </div>
          <div className="bg-[#F9C7D4] p-8 rounded-2xl shadow-lg text-center">
            <div className="text-5xl font-bold text-[#1A5C5C] mb-2">5+</div>
            <div className="text-gray-600 font-medium">Fellowships & Certifications</div>
          </div>
          <div className="bg-[#F9C7D4] p-8 rounded-2xl shadow-lg text-center">
            <div className="text-5xl font-bold text-[#1A5C5C] mb-2">3+</div>
            <div className="text-gray-600 font-medium">Research Publications</div>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-16 text-center">
          <blockquote className="text-2xl italic text-gray-700 max-w-4xl mx-auto">
            &ldquo;Committed to empowering women through compassionate, evidence-based healthcare at every stage of life.&rdquo;
          </blockquote>
          <p className="text-gray-600 mt-4 font-semibold">Dr. Shradha Vohra</p>
        </div>
      </div>
    </section>
  );
}
