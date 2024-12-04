export interface ScanResult {
  vulnerability: string;
  severity: 'Low' | 'Medium' | 'High' | 'Critical';
  description: string;
  solution: string;
}

export interface PortScanResult {
  port: number;
  state: 'open' | 'closed';
  service: string;
}

export interface Target {
  url: string;
  ip: string;
  ports: PortScanResult[];
  vulnerabilities: ScanResult[];
} 