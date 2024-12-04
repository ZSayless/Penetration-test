'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const processes = [
  {
    id: "01",
    title: "사전 분석",
    description: "대상 시스템의 구조와 특성을 파악하고, 잠재적 취약점을 식별합니다. 클라이언트와의 협의를 통해 테스트 범위와 목표를 설정합니다.",
    image: "/images/process/analysis.svg"
  },
  {
    id: "02",
    title: "스캐닝",
    description: "첨단 도구와 기술을 활용하여 시스템의 취약점을 탐지합니다. 네트워크 포트 스캔, 서비스 버전 확인, 알려진 취약점 검사 등을 수행합니다.",
    image: "/images/process/scanning.svg"
  },
  {
    id: "03",
    title: "침투 테스트",
    description: "발견된 취약점을 실제 해커의 관점에서 공격합니다. 시스템의 실제 보안 수준을 평가하고, 잠재적인 피해 규모를 산정합니다.",
    image: "/images/process/testing.svg"
  },
  {
    id: "04",
    title: "보고서 작성",
    description: "테스트 결과를 상세히 분석하여 종합적인 보고서를 작성합니다. 발견된 취약점, 잠재적 위험, 그리고 구체적인 해결 방안을 제시합니다.",
    image: "/images/process/report.svg"
  },
  {
    id: "05",
    title: "재 테스트",
    description: "제안된 보안 조치가 적절히 구현되었는지 확인하기 위해 재 테스트를 수행합니다. 취약점 해결을 검증하고 필요시 추가 조치를 제안합니다.",
    image: "/images/process/retest.svg"
  }
];

export default function Process() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-gray-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-2xl font-semibold text-blue-600">Our Process</h2>
          <h3 className="mt-2 text-4xl font-bold text-gray-900">침투 테스트 프로세스</h3>
          <p className="mt-4 text-xl text-gray-600">
            Pensecure labs의 체계적인 접근 방식으로 귀사의 보안을 강화합니다.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 transform -translate-y-1/2 hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {processes.map((process, index) => (
              <motion.div
                key={process.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group"
              >
                <div className="bg-white rounded-2xl shadow-xl p-6 transition-transform duration-300 group-hover:-translate-y-2">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto bg-blue-600 rounded-2xl transform -rotate-6 transition-transform duration-300 group-hover:rotate-0">
                      <div className="w-full h-full flex items-center justify-center transform rotate-6 transition-transform duration-300 group-hover:rotate-0">
                        <Image
                          src={process.image}
                          alt={process.title}
                          width={40}
                          height={40}
                          className="text-white"
                        />
                      </div>
                    </div>
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                      <span className="text-white font-bold text-sm">{process.id}</span>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {process.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 