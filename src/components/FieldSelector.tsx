import React from 'react';
import { Category } from '../types';

interface FieldSelectorProps {
  categories: Category[];
  selectedCategories: string[];
  selectedFields: Record<string, string[]>;
  onToggleField: (categoryId: string, fieldId: string) => void;
  onSelectAllFields: (categoryId: string) => void;
  onDeselectAllFields: (categoryId: string) => void;
}

const FieldSelector: React.FC<FieldSelectorProps> = ({
  categories,
  selectedCategories,
  selectedFields,
  onToggleField,
  onSelectAllFields,
  onDeselectAllFields
}) => {
  const filteredCategories = categories.filter(category => 
    selectedCategories.includes(category.id)
  );

  if (filteredCategories.length === 0) {
    return (
      <div className="p-8 text-center bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-gray-500">Please select at least one category to view available fields.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {filteredCategories.map(category => {
        const categoryFields = selectedFields[category.id] || [];
        const allSelected = categoryFields.length === category.fields.length;
        const someSelected = categoryFields.length > 0 && !allSelected;
        
        return (
          <div key={category.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex justify-between items-center">
              <h3 className="font-medium">{category.name}</h3>
              <div className="flex space-x-2 text-xs">
                <button
                  onClick={() => onSelectAllFields(category.id)}
                  className={`px-2 py-1 rounded ${allSelected 
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  Select All
                </button>
                <button
                  onClick={() => onDeselectAllFields(category.id)}
                  className={`px-2 py-1 rounded ${categoryFields.length === 0 
                    ? 'bg-gray-100 text-gray-400' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  disabled={categoryFields.length === 0}
                >
                  Deselect All
                </button>
              </div>
            </div>
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {category.fields.map(field => (
                <div
                  key={field.id}
                  className="flex items-start space-x-2"
                >
                  <input
                    type="checkbox"
                    id={`${category.id}-${field.id}`}
                    checked={categoryFields.includes(field.id)}
                    onChange={() => onToggleField(category.id, field.id)}
                    className="mt-1 h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <div className="flex-1">
                    <label
                      htmlFor={`${category.id}-${field.id}`}
                      className="block text-sm font-medium text-gray-700 cursor-pointer"
                    >
                      {field.name}
                    </label>
                    <p className="text-xs text-gray-500 mt-0.5 truncate" title={field.example}>
                      Example: {field.example}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FieldSelector;