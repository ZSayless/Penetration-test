export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Don't just take our word for it
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              quote: "The team's expertise and professionalism exceeded our expectations. They found critical vulnerabilities that could have been devastating if exploited.",
              author: "John Smith",
              role: "CTO, Tech Corp",
            },
            {
              quote: "Comprehensive testing and clear reporting helped us improve our security posture significantly. Highly recommended!",
              author: "Sarah Johnson",
              role: "Security Director, Finance Plus",
            },
            {
              quote: "Their penetration testing service is thorough and their recommendations are practical and actionable.",
              author: "Mike Williams",
              role: "IT Manager, Global Retail",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              <div className="mt-6">
                <p className="text-gray-900 font-semibold">{testimonial.author}</p>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 