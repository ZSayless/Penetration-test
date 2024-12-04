'use client';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold">PenTest Tool</span>
          </div>
          <div className="flex space-x-4">
            <button
              className={`px-3 py-2 rounded-md ${
                activeTab === 'dashboard' ? 'bg-gray-900' : ''
              }`}
              onClick={() => setActiveTab('dashboard')}
            >
              Dashboard
            </button>
            <button
              className={`px-3 py-2 rounded-md ${
                activeTab === 'scan' ? 'bg-gray-900' : ''
              }`}
              onClick={() => setActiveTab('scan')}
            >
              New Scan
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 