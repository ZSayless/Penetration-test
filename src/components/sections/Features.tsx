export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Industry-leading security testing with comprehensive solutions
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Expert Team',
              description: 'Certified security professionals with years of experience',
              icon: '👨‍💻',
            },
            {
              title: 'Comprehensive Reports',
              description: 'Detailed findings with actionable recommendations',
              icon: '📊',
            },
            {
              title: '24/7 Support',
              description: 'Round-the-clock assistance and consultation',
              icon: '🔧',
            },
            {
              title: 'Latest Tools',
              description: 'Using cutting-edge security testing tools',
              icon: '🛠',
            },
            {
              title: 'Custom Solutions',
              description: 'Tailored testing plans for your specific needs',
              icon: '🎯',
            },
            {
              title: 'Fast Turnaround',
              description: 'Quick delivery without compromising quality',
              icon: '⚡',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div>
                <span className="text-4xl">{feature.icon}</span>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 