export type ScanStatus = 'pending' | 'running' | 'completed' | 'failed';
export type VulnerabilitySeverity = 'Low' | 'Medium' | 'High' | 'Critical';

export interface ScanResult {
  vulnerability: string;
  severity: VulnerabilitySeverity;
  description: string;
  solution: string;
  cve?: string;
  cvss?: number;
  references?: string[];
}

export interface PortScanResult {
  port: number;
  state: 'open' | 'closed' | 'filtered';
  service: string;
  version?: string;
  protocol: 'tcp' | 'udp';
}

export interface Target {
  id: string;
  url: string;
  ip: string;
  ports: PortScanResult[];
  vulnerabilities: ScanResult[];
  status: ScanStatus;
  startTime: string;
  endTime?: string;
  scanType: string;
  progress: number;
}

export interface ScanHistory {
  id: string;
  targetId: string;
  timestamp: string;
  scanType: string;
  findings: number;
  status: ScanStatus;
}

export interface ScanConfig {
  portRange: string;
  timeout: number;
  concurrent: number;
  serviceDetection: boolean;
  aggressive: boolean;
} 