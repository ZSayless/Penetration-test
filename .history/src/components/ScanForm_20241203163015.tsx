'use client';

import { useState } from 'react';
import ScanConfig from './ScanConfig';
import type { ScanConfig as ScanConfigType } from '@/types/types';

export default function ScanForm() {
  const [target, setTarget] = useState('');
  const [scanType, setScanType] = useState('full');
  const [isLoading, setIsLoading] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  const [config, setConfig] = useState<ScanConfigType | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Implement actual scan logic here
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Handle successful scan
      console.log('Scan completed', { target, scanType, config });
    } catch (error) {
      console.error('Scan failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6">New Security Scan</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2">Target URL/IP</label>
            <input
              type="text"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="https://example.com or 192.168.1.1"
              required
            />
          </div>
          
          <div>
            <label className="block mb-2">Scan Type</label>
            <select
              value={scanType}
              onChange={(e) => setScanType(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="full">Full Scan</option>
              <option value="quick">Quick Scan</option>
              <option value="port">Port Scan</option>
              <option value="vuln">Vulnerability Scan</option>
              <option value="web">Web Application Scan</option>
              <option value="network">Network Scan</option>
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={() => setShowConfig(!showConfig)}
              className="text-blue-500 hover:text-blue-600"
            >
              {showConfig ? 'Hide Advanced Options' : 'Show Advanced Options'}
            </button>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
          >
            {isLoading ? 'Scanning...' : 'Start Scan'}
          </button>
        </form>
      </div>

      {showConfig && (
        <div className="max-w-2xl mx-auto">
          <ScanConfig onSave={setConfig} />
        </div>
      )}
    </div>
  );
} 