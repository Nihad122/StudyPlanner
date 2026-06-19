import AsyncStorage from '@react-native-async-storage/async-storage';
import { Task } from '../constants/types';

const STORAGE_KEY = 'study_planner_tasks';

export const getTasks = async (): Promise<Task[]> => {
  const json = await AsyncStorage.getItem(STORAGE_KEY);
  return json ? JSON.parse(json) : [];
};

export const saveTasks = async (tasks: Task[]): Promise<void> => {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
};
