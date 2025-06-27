import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy, Download, RotateCcw } from 'lucide-react';

interface OutputDisplayProps {
  data: any[] | null;
  formattedView: boolean;
  onToggleFormat: () => void;
  onRegenerate: () => void;
  onCopyToClipboard: () => void;
  onExportJson: () => void;
}

const OutputDisplay: React.FC<OutputDisplayProps> = ({
  data,
  formattedView,
  onToggleFormat,
  onRegenerate,
  onCopyToClipboard,
  onExportJson
}) => {
  if (!data || data.length === 0) {
    return (
      <div className="p-8 text-center bg-gray-50 rounded-lg border border-gray-200 h-96 flex items-center justify-center">
        <div>
          <p className="text-gray-500 mb-4">No data generated yet. Select categories and fields, then generate data.</p>
          <button
            onClick={onRegenerate}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
            disabled={!data}
          >
            Generate Data
          </button>
        </div>
      </div>
    );
  }

  const jsonString = formattedView 
    ? JSON.stringify(data, null, 2)
    : JSON.stringify(data);

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden flex flex-col h-[500px]">
      <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <h3 className="font-medium">Generated Data</h3>
          <span className="text-xs bg-gray-200 px-2 py-0.5 rounded-full text-gray-700">
            {data.length} {data.length === 1 ? 'record' : 'records'}
          </span>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={onToggleFormat}
            className="text-xs px-3 py-1 rounded border border-gray-300 hover:bg-gray-100"
          >
            {formattedView ? 'Raw' : 'Formatted'}
          </button>
        </div>
      </div>
      
      <div className="flex-1 overflow-auto relative">
        <SyntaxHighlighter
          language="json"
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            padding: '16px',
            height: '100%',
            fontSize: '14px',
            borderRadius: 0
          }}
        >
          {jsonString}
        </SyntaxHighlighter>
        
        <div className="absolute bottom-4 right-4 flex space-x-2">
          <button
            onClick={onCopyToClipboard}
            className="p-3 bg-white text-gray-700 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
            title="Copy to clipboard"
          >
            <Copy size={18} />
          </button>
          
          <button
            onClick={onExportJson}
            className="p-3 bg-white text-gray-700 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
            title="Export as JSON"
          >
            <Download size={18} />
          </button>
          
          <button
            onClick={onRegenerate}
            className="p-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
            title="Regenerate data"
          >
            <RotateCcw size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OutputDisplay;