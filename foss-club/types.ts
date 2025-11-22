export interface Software {
  id: string;
  name: string;
  description: string;
  category: string;
  homepageUrl: string;
  license: string;
  logoUrl: string;
  addedBy: string;
  features: string[];
}

export enum Category {
  Development = 'Development',
  Design = 'Design',
  Productivity = 'Productivity',
  Utilities = 'Utilities',
  Security = 'Security',
  Education = 'Education'
}

export interface User {
  email: string;
  name: string;
  role: 'admin' | 'user';
}

export interface NavItem {
  label: string;
  path: string;
}
