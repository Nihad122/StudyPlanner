import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Task, Priority } from '../constants/types';
import { getTasks, saveTasks } from '../services/storage';

interface TaskContextType {
  tasks: Task[];
  loading: boolean;
  error: string | null;
  addTask: (data: { title: string; description: string; priority: Priority }) => Promise<void>;
  toggleComplete: (id: string) => Promise<void>;
  deleteTask: (id: string) => Promise<void>;
}

const TaskContext = createContext<TaskContextType | null>(null);

export function TaskProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const stored = await getTasks();
        setTasks(stored);
      } catch {
        setError('Failed to load tasks');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const addTask = async (data: { title: string; description: string; priority: Priority }) => {
    const newTask: Task = {
      id: Date.now().toString(),
      ...data,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    const updated = [newTask, ...tasks];
    setTasks(updated);
    await saveTasks(updated);
  };

  const toggleComplete = async (id: string) => {
    const updated = tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t));
    setTasks(updated);
    await saveTasks(updated);
  };

  const deleteTask = async (id: string) => {
    const updated = tasks.filter((t) => t.id !== id);
    setTasks(updated);
    await saveTasks(updated);
  };

  return (
    <TaskContext.Provider value={{ tasks, loading, error, addTask, toggleComplete, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTaskContext() {
  const ctx = useContext(TaskContext);
  if (!ctx) throw new Error('useTaskContext must be used within TaskProvider');
  return ctx;
}
