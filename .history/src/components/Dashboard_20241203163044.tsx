'use client';

import { useState, useEffect } from 'react';
import { Target } from '@/types/types';
import ScanReport from './ScanReport';

export default function Dashboard() {
  const [targets, setTargets] = useState<Target[]>([]);
  const [selectedTarget, setSelectedTarget] = useState<Target | null>(null);
  const [stats, setStats] = useState({
    totalScans: 0,
    vulnerabilities: { Low: 0, Medium: 0, High: 0, Critical: 0 },
    completionRate: 0,
  });

  // Mock data for demonstration
  useEffect(() => {
    const mockTargets: Target[] = [
      {
        id: '1',
        url: 'https://example.com',
        ip: '93.184.216.34',
        status: 'completed',
        scanType: 'Full Scan',
        startTime: new Date().toISOString(),
        endTime: new Date().toISOString(),
        progress: 100,
        ports: [
          { port: 80, state: 'open', service: 'http', protocol: 'tcp', version: 'nginx/1.14.2' },
          { port: 443, state: 'open', service: 'https', protocol: 'tcp', version: 'OpenSSL/1.1.1' },
          { port: 22, state: 'filtered', service: 'ssh', protocol: 'tcp' },
        ],
        vulnerabilities: [
          {
            vulnerability: 'SQL Injection',
            severity: 'High',
            description: 'Found SQL injection vulnerability in login form',
            solution: 'Implement proper input validation and parameterized queries',
            cve: 'CVE-2021-1234',
            cvss: 8.5,
          },
          {
            vulnerability: 'Cross-Site Scripting (XSS)',
            severity: 'Medium',
            description: 'Reflected XSS vulnerability found in search parameter',
            solution: 'Implement proper output encoding',
            cve: 'CVE-2021-5678',
            cvss: 6.5,
          },
        ],
      },
      // Add more mock targets here
    ];

    setTargets(mockTargets);
    
    // Calculate stats
    const stats = {
      totalScans: mockTargets.length,
      vulnerabilities: {
        Low: 0,
        Medium: 0,
        High: 0,
        Critical: 0,
      },
      completionRate: (mockTargets.filter(t => t.status === 'completed').length / mockTargets.length) * 100,
    };

    mockTargets.forEach(target => {
      target.vulnerabilities.forEach(vuln => {
        stats.vulnerabilities[vuln.severity as keyof typeof stats.vulnerabilities]++;
      });
    });

    setStats(stats);
  }, []);

  return (
    <div className="space-y-6">
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm">Total Scans</h3>
          <p className="text-2xl font-bold">{stats.totalScans}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm">Critical Vulnerabilities</h3>
          <p className="text-2xl font-bold text-red-600">{stats.vulnerabilities.Critical}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm">Completion Rate</h3>
          <p className="text-2xl font-bold">{stats.completionRate.toFixed(1)}%</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm">Active Scans</h3>
          <p className="text-2xl font-bold">{targets.filter(t => t.status === 'running').length}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Scans */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Recent Scans</h2>
          <div className="space-y-4">
            {targets.map((target) => (
              <div
                key={target.id}
                className="p-4 border rounded cursor-pointer hover:bg-gray-50"
                onClick={() => setSelectedTarget(target)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold">{target.url}</h3>
                    <p className="text-gray-600">{target.ip}</p>
                    <p className="text-sm text-gray-500">
                      {target.vulnerabilities.length} vulnerabilities found
                    </p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    target.status === 'completed' ? 'bg-green-100 text-green-800' :
                    target.status === 'failed' ? 'bg-red-100 text-red-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {target.status}
                  </span>
                </div>
                {target.status === 'running' && (
                  <div className="mt-2">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${target.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Scan Details */}
        {selectedTarget ? (
          <ScanReport target={selectedTarget} />
        ) : (
          <div className="bg-white p-6 rounded-lg shadow flex items-center justify-center text-gray-500">
            Select a scan to view details
          </div>
        )}
      </div>
    </div>
  );
} 