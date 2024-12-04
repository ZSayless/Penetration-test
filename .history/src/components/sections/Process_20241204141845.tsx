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
    icon: ComputerDesktopIcon,
  },
  {
    id: "03",
    title: "침투 테스트",
    description: "발견된 취약점을 실제 해커의 관점에서 공격합니다. 시스템의 실제 보안 수준을 평가하고, 잠재적인 피해 규모를 산정합니다.",
    icon: BugAntIcon,
  },
  {
    id: "04",
    title: "보고서 작성",
    description: "테스트 결과를 상세히 분석하여 종합적인 보고서를 작성합니다. 발견된 취약점, 잠재적 위험, 그리고 구체적인 해결 방안을 제시합니다.",
    icon: DocumentTextIcon,
  },
  {
    id: "05",
    title: "재 테스트",
    description: "제안된 보안 조치가 적절히 구현되었는지 확인하기 위해 재 테스트를 수행합니다. 취약점 해결을 검증하고 필요시 추가 조치를 제안합니다.",
    icon: ArrowPathIcon,
  }
];

export default function Process() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <h2 className="text-2xl font-semibold text-gray-900">Our Process</h2>
          <h3 className="mt-2 text-4xl font-bold text-gray-900">침투 테스트 프로세스</h3>
          <p className="mt-4 text-lg text-gray-600">
            Pensecure labs의 체계적인 접근 방식으로 귀사의 보안을 강화합니다.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8"
        >
          {processes.map((process, index) => (
            <motion.div
              key={process.id}
              variants={itemVariants}
              className="flex flex-col items-center text-center"
            >
              <div className="relative">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                  <process.icon className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">{process.id}</span>
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{process.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {process.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 