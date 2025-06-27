import React from 'react';
import { Category } from '../types';
import * as Icons from 'lucide-react';

interface CategorySelectorProps {
  categories: Category[];
  selectedCategories: string[];
  onSelectCategory: (categoryId: string) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({ 
  categories, 
  selectedCategories, 
  onSelectCategory 
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {categories.map((category) => {
        const isSelected = selectedCategories.includes(category.id);
        // Get the icon dynamically
        const IconComponent = Icons[category.icon as keyof typeof Icons] || Icons.Box;
        
        return (
          <div
            key={category.id}
            className={`
              p-4 rounded-lg cursor-pointer transition-all duration-300 transform hover:-translate-y-1
              ${isSelected 
                ? 'bg-indigo-100 border-2 border-indigo-500 shadow-md' 
                : 'bg-white border border-gray-200 hover:border-indigo-300'}
            `}
            onClick={() => onSelectCategory(category.id)}
          >
            <div className="flex items-center space-x-3">
              <div className={`
                p-2 rounded-full 
                ${isSelected ? 'bg-indigo-500 text-white' : 'bg-gray-100 text-gray-600'}
              `}>
                <IconComponent size={20} />
              </div>
              <h3 className="font-medium text-lg">{category.name}</h3>
            </div>
            
            <p className="mt-2 text-sm text-gray-600">
              {category.fields.length} available fields
            </p>
            
            {isSelected && (
              <div className="mt-2 text-xs text-indigo-600 font-medium">
                Selected
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CategorySelector;