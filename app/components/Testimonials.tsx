export default function Testimonials() {
  const testimonials = [
    {
      name: 'Patient Name',
      type: 'Treatment Type',
      text: 'Placeholder testimonial – replace with a real patient review. Describe the positive experience, quality of care, and outcome.',
      rating: 5,
    },
    {
      name: 'Patient Name',
      type: 'Treatment Type',
      text: 'Placeholder testimonial – replace with a real patient review. Describe the positive experience, quality of care, and outcome.',
      rating: 5,
    },
    {
      name: 'Patient Name',
      type: 'Treatment Type',
      text: 'Placeholder testimonial – replace with a real patient review. Describe the positive experience, quality of care, and outcome.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-4 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#1A5C5C] font-semibold mb-2">TESTIMONIALS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A5C5C]">Patient Experiences</h2>
          <p className="text-xl text-gray-600 mt-4">
            Hear from patients about their journey to better health
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#F7E0E4] p-8 rounded-2xl">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div>
                <p className="font-bold text-[#1A5C5C]">{testimonial.name}</p>
                <p className="text-[#1A5C5C] text-sm">{testimonial.type}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          Patient testimonials are individual experiences and results may vary.
        </p>
      </div>
    </section>
  );
}
