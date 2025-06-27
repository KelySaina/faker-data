import React from 'react';

interface ConfigurationProps {
  recordCount: number;
  onRecordCountChange: (count: number) => void;
  onGenerate: () => void;
  hasSelections: boolean;
}

const Configuration: React.FC<ConfigurationProps> = ({
  recordCount,
  onRecordCountChange,
  onGenerate,
  hasSelections
}) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <h3 className="font-medium mb-4">Configuration</h3>
      
      <div className="mb-4">
        <label htmlFor="recordCount" className="block text-sm font-medium text-gray-700 mb-1">
          Number of Records
        </label>
        <div className="flex items-center space-x-2">
          <input
            type="range"
            id="recordCount"
            min="1"
            max="100"
            value={recordCount}
            onChange={(e) => onRecordCountChange(parseInt(e.target.value))}
            className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <span className="text-sm font-medium w-10 text-center">{recordCount}</span>
        </div>
      </div>
      
      <button
        onClick={onGenerate}
        disabled={!hasSelections}
        className={`w-full py-2 px-4 rounded-md font-medium transition-colors ${
          hasSelections
            ? 'bg-indigo-600 text-white hover:bg-indigo-700'
            : 'bg-gray-200 text-gray-500 cursor-not-allowed'
        }`}
      >
        Generate Data
      </button>
      
      {!hasSelections && (
        <p className="text-xs text-gray-500 mt-2 text-center">
          Select at least one category and field to generate data
        </p>
      )}
    </div>
  );
};

export default Configuration;