import { useState } from 'react';

export default function ScanForm() {
  const [target, setTarget] = useState('');
  const [scanType, setScanType] = useState('full');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Implement scan logic here
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">New Security Scan</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
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
        <div className="mb-4">
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
          </select>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
        >
          {isLoading ? 'Scanning...' : 'Start Scan'}
        </button>
      </form>
    </div>
  );
} 