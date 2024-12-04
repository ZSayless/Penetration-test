export default function AboutPage() {
  const team = [
    {
      name: 'John Doe',
      role: 'Chief Security Officer',
      image: '/images/team/john.jpg',
      bio: 'Over 15 years of experience in cybersecurity and penetration testing.',
      certifications: ['CISSP', 'CEH', 'OSCP']
    },
    {
      name: 'Jane Smith',
      role: 'Lead Security Researcher',
      image: '/images/team/jane.jpg',
      bio: 'Specialized in web application security and vulnerability research.',
      certifications: ['OSCP', 'OSCE', 'AWAE']
    },
    {
      name: 'Mike Johnson',
      role: 'Network Security Specialist',
      image: '/images/team/mike.jpg',
      bio: 'Expert in network infrastructure security and wireless testing.',
      certifications: ['CCNP Security', 'OSCP', 'CRTP']
    }
  ];

  return (
    <main className="pt-16">
      <div className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center">About Us</h1>
          <p className="mt-4 text-xl text-center text-blue-100">
            Leading the way in cybersecurity excellence
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
            <p className="mt-4 text-lg text-gray-600">
              Founded in 2010, we've been at the forefront of cybersecurity, helping organizations 
              protect their digital assets through comprehensive security testing and consultation.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Our team of certified security professionals brings together decades of combined 
              experience in penetration testing, vulnerability assessment, and security consulting.
            </p>
          </div>
          <div className="relative h-96">
            <img
              src="/images/about-hero.jpg"
              alt="About Us"
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Our Team</h2>
          <p className="mt-4 text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Meet our team of dedicated security professionals
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-w-3 aspect-h-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-blue-600">{member.role}</p>
                  <p className="mt-4 text-gray-600">{member.bio}</p>
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-900">Certifications</h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {member.certifications.map((cert, certIndex) => (
                        <span
                          key={certIndex}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 