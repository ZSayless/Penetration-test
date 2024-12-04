export default function ServicesPage() {
  const services = [
    {
      title: 'Web Application Penetration Testing',
      description: 'Comprehensive security assessment of web applications including OWASP Top 10 vulnerabilities, custom business logic testing, and API security testing.',
      features: [
        'OWASP Top 10 vulnerability assessment',
        'Business logic testing',
        'API security testing',
        'Authentication and authorization testing',
        'Session management testing'
      ],
      image: '/images/web-testing.jpg'
    },
    {
      title: 'Network Penetration Testing',
      description: 'In-depth evaluation of network infrastructure security including internal and external network testing, wireless security assessment.',
      features: [
        'External network testing',
        'Internal network assessment',
        'Wireless network security',
        'Network device configuration review',
        'Vulnerability assessment and exploitation'
      ],
      image: '/images/network-testing.jpg'
    },
    {
      title: 'Mobile Application Security Testing',
      description: 'Comprehensive security testing of mobile applications on both Android and iOS platforms.',
      features: [
        'Static and dynamic analysis',
        'Runtime manipulation testing',
        'Data storage security',
        'Network communication security',
        'Client-side injection testing'
      ],
      image: '/images/mobile-testing.jpg'
    }
  ];

  return (
    <main className="pt-16">
      <div className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center">Our Services</h1>
          <p className="mt-4 text-xl text-center text-blue-100">
            Comprehensive security testing solutions for your business
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-20">
          {services.map((service, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-12 items-center">
              <div className={index % 2 === 0 ? 'order-1' : 'order-1 md:order-2'}>
                <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                <p className="mt-4 text-lg text-gray-600">{service.description}</p>
                <ul className="mt-8 space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-blue-500">✓</span>
                      <span className="ml-3 text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={index % 2 === 0 ? 'order-2' : 'order-2 md:order-1'}>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 