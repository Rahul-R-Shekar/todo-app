export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  startDate?: string;
  dueDate?: string;
  priority: 'low' | 'medium' | 'high'; // Changed from optional to required
  createdAt?: string;
}