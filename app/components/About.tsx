import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#1A5C5C] font-semibold mb-2">ABOUT</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A5C5C]">
            Meet Dr. Shradha Vohra
          </h2>
          <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            A dedicated obstetrician and gynaecologist committed to providing exceptional
            women&apos;s healthcare through advanced surgical techniques and personalized treatment
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed text-justify">
              Dr. Shradha Vohra is an Obstetrician and Gynaecologist with extensive training in
              minimally invasive and robotic gynaecological surgery. She completed her MBBS from
              D.Y. Patil Medical College, Navi Mumbai and her M.S. in Obstetrics &amp; Gynaecology
              from D.Y. Patil Medical College, Kolhapur.
            </p>
            <p className="text-gray-700 leading-relaxed text-justify">
              She holds fellowships in Minimal Access Surgery (FMAS), a Diploma in Minimal Access
              Surgery (DMAS), and a Fellowship in Operative and Diagnostic Hysteroscopy (FIH) from
              Medicity, Gurgaon. She is currently pursuing a Fellowship in Minimally Invasive
              Laparoscopic &amp; Robotic Gynaecological Surgery in New Delhi.
            </p>
            <p className="text-gray-700 leading-relaxed text-justify">
              Her areas of expertise include high-risk pregnancy management, laparoscopic surgery,
              robotic gynaecological surgery, operative hysteroscopy, PCOS management, menopause
              care, and caesarean sections.
            </p>
          </div>

          <div className="flex flex-col items-center gap-8">
            <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-[#1A5C5C]/20">
              <Image
                src="/about-photo.jpg"
                alt="Dr. Shradha Vohra"
                width={400}
                height={500}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="bg-[#F7E0E4] p-6 rounded-xl">
              <h4 className="font-semibold text-[#1A5C5C] mb-2">Education</h4>
              <p className="text-gray-600">D.Y. Patil Medical College</p>
            </div>
            <div className="bg-[#F7E0E4] p-6 rounded-xl">
              <h4 className="font-semibold text-[#1A5C5C] mb-2">Certification</h4>
              <p className="text-gray-600">MS (OB/GYN), FMAS, DMAS, FIH</p>
            </div>
            <div className="bg-[#F7E0E4] p-6 rounded-xl">
              <h4 className="font-semibold text-[#1A5C5C] mb-2">Experience</h4>
              <p className="text-gray-600">7+ Years in Medicine</p>
            </div>
            <div className="bg-[#F7E0E4] p-6 rounded-xl">
              <h4 className="font-semibold text-[#1A5C5C] mb-2">Philosophy</h4>
              <p className="text-gray-600">Patient-Centered Care</p>
            </div>
        </div>
      </div>
    </section>
  );
}
