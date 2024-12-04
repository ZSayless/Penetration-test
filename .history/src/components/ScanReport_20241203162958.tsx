'use client';

import { Target } from '@/types/types';

interface ScanReportProps {
  target: Target;
}

export default function ScanReport({ target }: ScanReportProps) {
  const getSeverityColor = (severity: string) => {
    const colors = {
      Low: 'bg-yellow-100 text-yellow-800',
      Medium: 'bg-orange-100 text-orange-800',
      High: 'bg-red-100 text-red-800',
      Critical: 'bg-purple-100 text-purple-800',
    };
    return colors[severity as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Scan Report</h2>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-semibold">Target URL:</span> {target.url}
          </div>
          <div>
            <span className="font-semibold">IP Address:</span> {target.ip}
          </div>
          <div>
            <span className="font-semibold">Scan Type:</span> {target.scanType}
          </div>
          <div>
            <span className="font-semibold">Status:</span>{' '}
            <span className={`px-2 py-1 rounded-full text-xs ${
              target.status === 'completed' ? 'bg-green-100 text-green-800' : 
              target.status === 'failed' ? 'bg-red-100 text-red-800' : 
              'bg-blue-100 text-blue-800'
            }`}>
              {target.status}
            </span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-bold mb-4">Open Ports</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Port</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">State</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Service</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Version</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {target.ports.map((port, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">{port.port}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{port.state}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{port.service}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{port.version || 'Unknown'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4">Vulnerabilities</h3>
        <div className="space-y-4">
          {target.vulnerabilities.map((vuln, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-lg">{vuln.vulnerability}</h4>
                <span className={`px-2 py-1 rounded-full text-xs ${getSeverityColor(vuln.severity)}`}>
                  {vuln.severity}
                </span>
              </div>
              <p className="text-gray-600 mb-2">{vuln.description}</p>
              <div className="bg-gray-50 p-3 rounded">
                <p className="font-semibold">Solution:</p>
                <p className="text-gray-600">{vuln.solution}</p>
              </div>
              {vuln.cve && (
                <div className="mt-2">
                  <span className="font-semibold">CVE:</span> {vuln.cve}
                </div>
              )}
              {vuln.cvss && (
                <div className="mt-1">
                  <span className="font-semibold">CVSS Score:</span> {vuln.cvss}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 