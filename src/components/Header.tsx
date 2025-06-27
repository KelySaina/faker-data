import React from 'react';
import { Database } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-lg mb-6">
      <div className="flex items-center">
        <div className="bg-white/20 p-3 rounded-lg mr-4">
          <Database size={24} />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Faker Data Generator</h1>
          <p className="text-indigo-100">
            Generate realistic sample data for your projects
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;