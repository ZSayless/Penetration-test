'use client';

import { useState, useEffect } from 'react';
import { Target } from '@/types/types';

export default function Dashboard() {
  const [targets, setTargets] = useState<Target[]>([]);
  const [selectedTarget, setSelectedTarget] = useState<Target | null>(null);

  // Mock data for demonstration
  useEffect(() => {
    const mockTargets: Target[] = [
      {
        url: 'https://example.com',
        ip: '93.184.216.34',
        ports: [
          { port: 80, state: 'open', service: 'http' },
          { port: 443, state: 'open', service: 'https' },
        ],
        vulnerabilities: [
          {
            vulnerability: 'SQL Injection',
            severity: 'High',
            description: 'Found SQL injection vulnerability in login form',
            solution: 'Implement proper input validation and parameterized queries',
          },
        ],
      },
    ];
    setTargets(mockTargets);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Recent Scans</h2>
        <div className="space-y-4">
          {targets.map((target, index) => (
            <div
              key={index}
              className="p-4 border rounded cursor-pointer hover:bg-gray-50"
              onClick={() => setSelectedTarget(target)}
            >
              <h3 className="font-bold">{target.url}</h3>
              <p className="text-gray-600">{target.ip}</p>
              <p className="text-sm text-gray-500">
                {target.vulnerabilities.length} vulnerabilities found
              </p>
            </div>
          ))}
        </div>
      </div>

      {selectedTarget && (
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Scan Details</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold mb-2">Open Ports</h3>
              <div className="space-y-2">
                {selectedTarget.ports.map((port, index) => (
                  <div key={index} className="flex justify-between">
                    <span>Port {port.port}</span>
                    <span>{port.service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-2">Vulnerabilities</h3>
              <div className="space-y-4">
                {selectedTarget.vulnerabilities.map((vuln, index) => (
                  <div key={index} className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-bold">{vuln.vulnerability}</h4>
                    <p className="text-sm text-gray-600">{vuln.description}</p>
                    <p className="text-sm mt-2">
                      <span className="font-bold">Solution: </span>
                      {vuln.solution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 