export interface CategoryField {
  id: string;
  name: string;
  path: string;
  example: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  fields: CategoryField[];
}

export interface AppState {
  categories: Category[];
  selectedCategories: string[];
  selectedFields: Record<string, string[]>;
  recordCount: number;
  formattedView: boolean;
  generatedData: any[] | null;
}