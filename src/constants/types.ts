export type Priority = 'low' | 'medium' | 'high';

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  completed: boolean;
  createdAt: string;
}

export const PRIORITY_COLORS: Record<Priority, string> = {
  low: '#10B981',
  medium: '#F59E0B',
  high: '#EF4444',
};

export const PRIORITY_LABELS: Record<Priority, string> = {
  low: 'Low',
  medium: 'Medium',
  high: 'High',
};
