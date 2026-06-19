import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { useTasks } from '../hooks/useTasks';
import TaskCard from '../components/TaskCard';

export default function TasksScreen() {
    const { tasks, loading, toggleComplete, deleteTask, pendingTasks, completedTasks } = useTasks();

    if (loading) {
        return (
        <View style={styles.center}>
            <ActivityIndicator size="large" color="#4F46E5" />
        </View>
        );
    }

    return (
        <View style={styles.container}>
        <Text style={styles.summary}>
            {pendingTasks.length} pending · {completedTasks.length} completed
        </Text>
        {tasks.length === 0 ? (
            <View style={styles.center}>
                <Text style={styles.emptyText}>No tasks yet</Text>
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
    emptyText: { fontSize: 18, color: '#9CA3AF' },
    summary: { padding: 16, fontSize: 13, color: '#6B7280' },
    list: { padding: 16, gap: 12 },
});
