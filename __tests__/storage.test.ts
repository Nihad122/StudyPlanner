import AsyncStorage from '@react-native-async-storage/async-storage';
import { getTasks, saveTasks } from '../src/services/storage';
import { Task } from '../src/constants/types';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);

const mockTask: Task = {
  id: '1',
  title: 'Test Gorevi',
  description: 'Aciklama',
  priority: 'medium',
  completed: false,
  createdAt: new Date().toISOString(),
};

describe('storage service', () => {
  beforeEach(() => {
    AsyncStorage.clear();
  });

  test('getTasks bos array dondurur veri yoksa', async () => {
    const tasks = await getTasks();
    expect(tasks).toEqual([]);
  });

  test('saveTasks gorevi kaydeder', async () => {
    await saveTasks([mockTask]);
    const tasks = await getTasks();
    expect(tasks).toHaveLength(1);
  });

  test('kaydedilen gorev dogru basliga sahip', async () => {
    await saveTasks([mockTask]);
    const tasks = await getTasks();
    expect(tasks[0].title).toBe('Test Gorevi');
  });

  test('birden fazla gorev kaydedilir', async () => {
    const task2 = { ...mockTask, id: '2', title: 'Ikinci Gorev' };
    await saveTasks([mockTask, task2]);
    const tasks = await getTasks();
    expect(tasks).toHaveLength(2);
  });

  test('saveTasks mevcut veriyi ustune yazar', async () => {
    await saveTasks([mockTask]);
    const updatedTask = { ...mockTask, title: 'Guncellendi' };
    await saveTasks([updatedTask]);
    const tasks = await getTasks();
    expect(tasks[0].title).toBe('Guncellendi');
  });
});