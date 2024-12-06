export default function Features() {
  const features = [
    {
      icon: "👨‍💻",
      title: "Expert Team",
      description: "Certified security professionals with years of experience"
    },
    {
      icon: "📊",
      title: "Comprehensive Reports",
      description: "Detailed findings with actionable recommendations"
    },
    {
      icon: "🔧",
      title: "24/7 Support",
      description: "Round-the-clock assistance and consultation"
    },
    {
      icon: "🛠",
      title: "Latest Tools",
      description: "Using cutting-edge security testing tools"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Why Choose Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Industry-leading security testing with comprehensive solutions
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-sm sm:max-w-3xl lg:max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 