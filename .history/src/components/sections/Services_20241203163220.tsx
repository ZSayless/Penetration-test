export default function Services() {
  const services = [
    {
      title: 'Web Application Testing',
      description: 'Comprehensive security assessment of web applications to identify vulnerabilities and security flaws.',
      icon: '🌐',
    },
    {
      title: 'Network Penetration Testing',
      description: 'Thorough evaluation of network infrastructure to detect and address security weaknesses.',
      icon: '🔒',
    },
    {
      title: 'Mobile App Security Testing',
      description: 'In-depth analysis of mobile applications for both Android and iOS platforms.',
      icon: '📱',
    },
    {
      title: 'Cloud Security Assessment',
      description: 'Security evaluation of cloud infrastructure and services including AWS, Azure, and GCP.',
      icon: '☁️',
    },
    {
      title: 'IoT Security Testing',
      description: 'Security assessment of Internet of Things devices and their ecosystems.',
      icon: '🔌',
    },
    {
      title: 'Social Engineering Tests',
      description: 'Assessment of human-centric security vulnerabilities through simulated attacks.',
      icon: '🎯',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Comprehensive security testing services to protect your business
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div>
                <span className="text-4xl">{service.icon}</span>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {service.description}
                </p>
              </div>
              <span
                className="absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                aria-hidden="true"
              >
                →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 