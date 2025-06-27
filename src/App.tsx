import React, { useState, useEffect, useCallback } from 'react';
import CategorySelector from './components/CategorySelector';
import FieldSelector from './components/FieldSelector';
import OutputDisplay from './components/OutputDisplay';
import Configuration from './components/Configuration';
import Header from './components/Header';
import { generateCategories, generateData } from './utils/fakerUtils';
import { Category, AppState } from './types';

function App() {
  const [state, setState] = useState<AppState>({
    categories: [],
    selectedCategories: [],
    selectedFields: {},
    recordCount: 5,
    formattedView: true,
    generatedData: null
  });

  // Initialize categories on mount
  useEffect(() => {
    const categories = generateCategories();
    setState(prev => ({ ...prev, categories }));
  }, []);

  // Handle category selection
  const handleSelectCategory = (categoryId: string) => {
    setState(prev => {
      const isSelected = prev.selectedCategories.includes(categoryId);
      
      let newSelectedCategories: string[];
      if (isSelected) {
        // Remove category
        newSelectedCategories = prev.selectedCategories.filter(id => id !== categoryId);
        
        // Also remove fields for this category
        const newSelectedFields = { ...prev.selectedFields };
        delete newSelectedFields[categoryId];
        
        return {
          ...prev,
          selectedCategories: newSelectedCategories,
          selectedFields: newSelectedFields
        };
      } else {
        // Add category
        newSelectedCategories = [...prev.selectedCategories, categoryId];
        return {
          ...prev,
          selectedCategories: newSelectedCategories
        };
      }
    });
  };

  // Handle field selection
  const handleToggleField = (categoryId: string, fieldId: string) => {
    setState(prev => {
      const categoryFields = prev.selectedFields[categoryId] || [];
      let newCategoryFields: string[];
      
      if (categoryFields.includes(fieldId)) {
        // Remove field
        newCategoryFields = categoryFields.filter(id => id !== fieldId);
      } else {
        // Add field
        newCategoryFields = [...categoryFields, fieldId];
      }
      
      return {
        ...prev,
        selectedFields: {
          ...prev.selectedFields,
          [categoryId]: newCategoryFields
        }
      };
    });
  };

  // Handle selecting all fields for a category
  const handleSelectAllFields = (categoryId: string) => {
    setState(prev => {
      const category = prev.categories.find(c => c.id === categoryId);
      if (!category) return prev;
      
      const allFieldIds = category.fields.map(field => field.id);
      
      return {
        ...prev,
        selectedFields: {
          ...prev.selectedFields,
          [categoryId]: allFieldIds
        }
      };
    });
  };

  // Handle deselecting all fields for a category
  const handleDeselectAllFields = (categoryId: string) => {
    setState(prev => {
      const newSelectedFields = { ...prev.selectedFields };
      newSelectedFields[categoryId] = [];
      
      return {
        ...prev,
        selectedFields: newSelectedFields
      };
    });
  };

  // Handle record count change
  const handleRecordCountChange = (count: number) => {
    setState(prev => ({ ...prev, recordCount: count }));
  };

  // Check if there are any selections
  const hasSelections = useCallback(() => {
    const { selectedCategories, selectedFields } = state;
    if (selectedCategories.length === 0) return false;
    
    // Check if at least one field is selected
    return selectedCategories.some(categoryId => {
      const fields = selectedFields[categoryId] || [];
      return fields.length > 0;
    });
  }, [state.selectedCategories, state.selectedFields]);

  // Generate data
  const handleGenerate = useCallback(() => {
    const { selectedCategories, selectedFields, categories, recordCount } = state;
    
    if (!hasSelections()) return;
    
    const data = generateData(
      selectedCategories,
      selectedFields,
      categories,
      recordCount
    );
    
    setState(prev => ({ ...prev, generatedData: data }));
  }, [state, hasSelections]);

  // Toggle JSON format view
  const handleToggleFormat = () => {
    setState(prev => ({ ...prev, formattedView: !prev.formattedView }));
  };

  // Copy to clipboard
  const handleCopyToClipboard = () => {
    const { generatedData, formattedView } = state;
    if (!generatedData) return;
    
    const jsonString = formattedView 
      ? JSON.stringify(generatedData, null, 2)
      : JSON.stringify(generatedData);
    
    navigator.clipboard.writeText(jsonString).then(
      () => {
        alert('Copied to clipboard!');
      },
      (err) => {
        console.error('Could not copy text: ', err);
      }
    );
  };

  // Export as JSON
  const handleExportJson = () => {
    const { generatedData, formattedView } = state;
    if (!generatedData) return;
    
    const jsonString = formattedView 
      ? JSON.stringify(generatedData, null, 2)
      : JSON.stringify(generatedData);
    
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'faker-data.json';
    document.body.appendChild(a);
    a.click();
    
    // Cleanup
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        <Header />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Select Categories</h2>
              <CategorySelector
                categories={state.categories}
                selectedCategories={state.selectedCategories}
                onSelectCategory={handleSelectCategory}
              />
            </div>
            
            {state.selectedCategories.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Select Fields</h2>
                <FieldSelector
                  categories={state.categories}
                  selectedCategories={state.selectedCategories}
                  selectedFields={state.selectedFields}
                  onToggleField={handleToggleField}
                  onSelectAllFields={handleSelectAllFields}
                  onDeselectAllFields={handleDeselectAllFields}
                />
              </div>
            )}
          </div>
          
          <div className="space-y-6">
            <Configuration
              recordCount={state.recordCount}
              onRecordCountChange={handleRecordCountChange}
              onGenerate={handleGenerate}
              hasSelections={hasSelections()}
            />
            
            <OutputDisplay
              data={state.generatedData}
              formattedView={state.formattedView}
              onToggleFormat={handleToggleFormat}
              onRegenerate={handleGenerate}
              onCopyToClipboard={handleCopyToClipboard}
              onExportJson={handleExportJson}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;