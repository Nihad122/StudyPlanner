import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { useTaskContext } from '../../src/context/TaskContext';
import TaskCard from '../../src/components/TaskCard';

export default function TasksScreen() {
  const { tasks, loading, toggleComplete, deleteTask } = useTaskContext();

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#4F46E5" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {tasks.length === 0 ? (
        <View style={styles.center}>
          <Text style={styles.emptyText}>No tasks yet</Text>
          <Text style={styles.emptySubText}>Add a task from the Add tab</Text>
        </View>
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskCard
              task={item}
              onToggle={() => toggleComplete(item.id)}
              onDelete={() => deleteTask(item.id)}
            />
          )}
          contentContainerStyle={styles.list}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F4F6' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  emptyText: { fontSize: 20, fontWeight: '600', color: '#374151', marginBottom: 8 },
  emptySubText: { fontSize: 14, color: '#9CA3AF' },
  list: { padding: 16, gap: 12 },
});
