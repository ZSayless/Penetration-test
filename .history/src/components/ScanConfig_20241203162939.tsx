'use client';

import { useState } from 'react';
import type { ScanConfig } from '@/types/types';

interface ScanConfigProps {
  onSave: (config: ScanConfig) => void;
}

export default function ScanConfig({ onSave }: ScanConfigProps) {
  const [config, setConfig] = useState<ScanConfig>({
    portRange: '1-1000',
    timeout: 5000,
    concurrent: 100,
    serviceDetection: true,
    aggressive: false,
  });

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-xl font-bold mb-4">Scan Configuration</h3>
      <div className="space-y-4">
        <div>
          <label className="block mb-2">Port Range</label>
          <input
            type="text"
            value={config.portRange}
            onChange={(e) => setConfig({ ...config, portRange: e.target.value })}
            className="w-full p-2 border rounded"
            placeholder="e.g., 1-1000,3389,8080"
          />
        </div>
        <div>
          <label className="block mb-2">Timeout (ms)</label>
          <input
            type="number"
            value={config.timeout}
            onChange={(e) => setConfig({ ...config, timeout: parseInt(e.target.value) })}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-2">Concurrent Scans</label>
          <input
            type="number"
            value={config.concurrent}
            onChange={(e) => setConfig({ ...config, concurrent: parseInt(e.target.value) })}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={config.serviceDetection}
            onChange={(e) => setConfig({ ...config, serviceDetection: e.target.checked })}
            className="rounded"
          />
          <label>Enable Service Detection</label>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={config.aggressive}
            onChange={(e) => setConfig({ ...config, aggressive: e.target.checked })}
            className="rounded"
          />
          <label>Aggressive Mode</label>
        </div>
        <button
          onClick={() => onSave(config)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Save Configuration
        </button>
      </div>
    </div>
  );
} 