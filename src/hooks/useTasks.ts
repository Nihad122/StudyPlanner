import { useTaskContext } from '../context/TaskContext';

export const useTasks = () => {
  const { tasks, loading, error, addTask, toggleComplete, deleteTask } = useTaskContext();
  const completedTasks = tasks.filter((t) => t.completed);
  const pendingTasks = tasks.filter((t) => !t.completed);

  return {
    tasks,
    completedTasks,
    pendingTasks,
    loading,
    error,
    addTask,
    toggleComplete,
    deleteTask,
  };
};
