'use client';

import { useState } from 'react';

interface Specialty {
  title: string;
  description: string;
}

export default function Specializations() {
  const specialties: Specialty[] = [
    {
      title: 'High-Risk Pregnancy',
      description: 'Expert management of complicated pregnancies including maternal and fetal health monitoring, ensuring the best outcomes for mother and baby.',
    },
    {
      title: 'Laparoscopic Surgery',
      description: 'Minimally invasive gynaecological procedures using advanced laparoscopic techniques for faster recovery and less post-operative discomfort.',
    },
    {
      title: 'Robotic Gynaecological Surgery',
      description: 'State-of-the-art robotic-assisted surgical procedures offering enhanced precision, flexibility, and control for complex gynaecological conditions.',
    },
    {
      title: 'Operative Hysteroscopy',
      description: 'Diagnostic and operative hysteroscopy for evaluation and treatment of intrauterine conditions including fibroids, polyps, and abnormal bleeding.',
    },
    {
      title: 'PCOS Management',
      description: 'Comprehensive diagnosis and management of Polycystic Ovary Syndrome with personalized treatment plans addressing hormonal, metabolic, and fertility concerns.',
    },
    {
      title: 'Menopause Care',
      description: 'Holistic management of menopause and perimenopause symptoms, offering evidence-based therapies to improve quality of life during this transition.',
    },
    {
      title: 'Caesarean Section',
      description: 'Safe and expert management of both emergency and elective caesarean deliveries with focus on maternal safety and rapid recovery.',
    },
    {
      title: 'Antenatal & Postnatal Care',
      description: 'Comprehensive prenatal and postnatal care including routine check-ups, ultrasound monitoring, nutritional guidance, and postpartum support.',
    },
    {
      title: 'Fertility & Reproductive Health',
      description: 'Evaluation and management of reproductive health concerns including infertility workup, hormonal disorders, and family planning counselling.',
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="specializations" className="py-20 px-4 bg-[#F7E0E4]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#1A5C5C] font-semibold mb-2">WHAT WE TREAT</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A5C5C]">
            Areas of Specialization
          </h2>
          <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            Comprehensive women&apos;s healthcare covering obstetrics, gynaecology, and minimally
            invasive surgical procedures
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className="bg-[#F9C7D4] p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <h3 className="text-xl font-bold text-[#1A5C5C] mb-4 group-hover:text-[#1A5C5C] transition">
                {specialty.title}
              </h3>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  hoveredIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-600 leading-relaxed text-justify">{specialty.description}</p>
              </div>
              {hoveredIndex !== index && (
                <p className="text-sm text-gray-500 italic">Hover to learn more</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
