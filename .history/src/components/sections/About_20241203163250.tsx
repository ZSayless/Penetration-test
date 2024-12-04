export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Our Company
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 lg:mx-auto">
            Leading provider of cybersecurity solutions with over a decade of experience
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              <p className="text-gray-600">
                We are dedicated to helping organizations strengthen their security posture through comprehensive penetration testing and security assessments. Our team of certified experts uses industry-leading methodologies to identify vulnerabilities before malicious actors can exploit them.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Why Choose Us</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-3">✓</span>
                  <span>Expert team of certified security professionals</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">✓</span>
                  <span>Comprehensive reporting with actionable recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">✓</span>
                  <span>Industry-leading tools and methodologies</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">✓</span>
                  <span>24/7 support and consultation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 