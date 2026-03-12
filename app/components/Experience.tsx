export default function Experience() {
  const timeline = [
    {
      title: 'Fellowship - Minimally Invasive Laparoscopic & Robotic Surgery',
      place: 'Max Smart Hospital, Saket, New Delhi',
      period: 'Dec 2025 - Present',
      description: 'Advanced fellowship in minimally invasive laparoscopic and robotic gynaecological surgery.',
    },
    {
      title: 'Fellowships (FMAS, DMAS, FIH)',
      place: 'Medicity, Gurgaon',
      period: 'July 2025',
      description: 'Fellowship in Minimal Access Surgery, Diploma in Minimal Access Surgery, and Fellowship in Operative & Diagnostic Hysteroscopy under Dr. Alka Kriplani.',
    },
    {
      title: 'Senior Resident',
      place: 'Max Smart Hospital, Saket, New Delhi',
      period: 'Apr 2025 - Nov 2025',
      description: 'Clinical care in the Department of Obstetrics and Gynaecology at a premier multi-specialty hospital.',
    },
    {
      title: 'M.S. Obstetrics & Gynaecology',
      place: 'D.Y. Patil Medical College, Kolhapur',
      period: 'Mar 2022 - Mar 2025',
      description: 'Postgraduate training in obstetrics and gynaecology with research in maternal-fetal complications and placental morphology.',
    },
    {
      title: 'M.B.B.S.',
      place: 'D.Y. Patil Medical College, Navi Mumbai',
      period: 'July 2013 - Feb 2019',
      description: 'Bachelor of Medicine and Bachelor of Surgery. Internship at D.Y. Patil Hospital (Feb 2018 - Feb 2019) with rotations across Obstetrics & Gynaecology, General Medicine, General Surgery, Paediatrics, Community Medicine, Orthopaedics, Psychiatry, Anaesthesia, and more.',
    },
  ];

  const certifications = [
    { title: 'MBBS', institution: 'D.Y. Patil Medical College, Navi Mumbai' },
    { title: 'M.S. (OB/GYN)', institution: 'D.Y. Patil Medical College, Kolhapur' },
    { title: 'FMAS & DMAS', institution: 'Medicity, Gurgaon' },
    { title: 'FIH', institution: 'Operative & Diagnostic Hysteroscopy' },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Experience Timeline */}
        <div className="text-center mb-16">
          <p className="text-[#1A5C5C] font-semibold mb-2">BACKGROUND</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A5C5C]">
            Experience & Qualifications
          </h2>
          <p className="text-xl text-gray-600 mt-4">
            A strong foundation of medical education and clinical experience
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-20">
          {timeline.map((item, index) => (
            <div key={index} className="relative pl-8 pb-12 border-l-2 border-[#2A7B7B] last:pb-0">
              <div className="absolute left-[-9px] top-0 w-4 h-4 bg-[#1A5C5C] rounded-full"></div>
              <div className="bg-[#F7E0E4] p-6 rounded-xl ml-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-bold text-[#1A5C5C]">{item.title}</h3>
                  <span className="text-[#1A5C5C] font-semibold text-sm">{item.period}</span>
                </div>
                <p className="text-gray-700 font-medium mb-2">{item.place}</p>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="text-center mb-12">
          <p className="text-[#1A5C5C] font-semibold mb-2">CREDENTIALS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A5C5C]">
            Board Certifications
          </h2>
          <p className="text-xl text-gray-600 mt-4">
            Recognized excellence in medical education and specialized training
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-[#F7E0E4] p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-[#1A5C5C] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#1A5C5C] mb-1">{cert.title}</h3>
              <p className="text-gray-600 text-sm">{cert.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
