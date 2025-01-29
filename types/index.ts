export interface Project {
  name: string;
  sourceCode: string;
  demo: string;
  images: string[];
  description: string;
  stack: string[];
  formattedStackNames: string[];
  slug: string;
}

export interface SnackbarData {
  title: string;
  message: string;
  status: 'error' | 'success' | 'pending';
}
