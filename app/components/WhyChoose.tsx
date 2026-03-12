export default function WhyChoose() {
  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Specialized Training',
      description: 'Trained at premier institutions including D.Y. Patil Medical College and Medicity Gurgaon with multiple fellowships in minimally invasive surgery.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Women-Centered Care',
      description: 'Dedicated to women\'s health at every stage — from pregnancy and childbirth to menopause and beyond, with empathy and understanding.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Minimally Invasive Expertise',
      description: 'Advanced training in laparoscopic, robotic, and hysteroscopic procedures for faster recovery and better surgical outcomes.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: 'Clear Communication',
      description: 'Taking time to explain diagnoses, procedures, and treatment options so you feel informed and confident in your healthcare decisions.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Research-Driven Practice',
      description: 'Published researcher with Stanford-certified courses, staying current with the latest evidence-based advances in obstetrics and gynaecology.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      ),
      title: 'Comprehensive Approach',
      description: 'Holistic care from routine check-ups to complex surgeries — covering high-risk pregnancies, PCOS, fertility, and gynaecological conditions.',
    },
  ];

  return (
    <section className="py-20 px-4 bg-[#F7E0E4]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#1A5C5C] font-semibold mb-2">OUR VALUES</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A5C5C]">
            Why Choose Dr. Shradha Vohra
          </h2>
          <p className="text-xl text-gray-600 mt-4">
            Dedicated to providing exceptional women&apos;s healthcare with expertise and empathy
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-[#F9C7D4] p-8 rounded-2xl shadow-md hover:shadow-lg transition">
              <div className="text-[#1A5C5C] mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-[#1A5C5C] mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#1A5C5C] text-white p-10 rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-4">Our Commitment to You</h3>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            Every woman deserves attentive, expert care. I&apos;m committed to listening to your
            concerns, providing thorough evaluations, and working collaboratively to develop
            treatment plans that empower you and improve your quality of life.
          </p>
        </div>
      </div>
    </section>
  );
}
