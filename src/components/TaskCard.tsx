import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as Haptics from 'expo-haptics';
import { Task, PRIORITY_COLORS, PRIORITY_LABELS } from '../constants/types';

interface Props {
  task: Task;
  onToggle: () => void;
  onDelete: () => void;
}

export default function TaskCard({ task, onToggle, onDelete }: Props) {
  const handleToggle = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onToggle();
  };

  const handleDelete = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    onDelete();
  };

  return (
    <View style={styles.card}>
      <View style={[styles.priorityBar, { backgroundColor: PRIORITY_COLORS[task.priority] }]} />
      <View style={styles.content}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.checkbox} onPress={handleToggle}>
            <Text style={styles.checkboxText}>{task.completed ? '✓' : ''}</Text>
          </TouchableOpacity>
          <View style={styles.textContainer}>
            <Text style={[styles.title, task.completed && styles.titleDone]}>{task.title}</Text>
            {task.description ? (
              <Text style={styles.description} numberOfLines={2}>
                {task.description}
              </Text>
            ) : null}
            <Text style={[styles.badge, { color: PRIORITY_COLORS[task.priority] }]}>
              {PRIORITY_LABELS[task.priority]}
            </Text>
          </View>
          <TouchableOpacity style={styles.deleteBtn} onPress={handleDelete}>
            <Text style={styles.deleteText}>🗑</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    flexDirection: 'row',
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  priorityBar: { width: 4 },
  content: { flex: 1, padding: 12 },
  row: { flexDirection: 'row', alignItems: 'flex-start', gap: 10 },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#4F46E5',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  checkboxText: { color: '#4F46E5', fontWeight: '700', fontSize: 14 },
  textContainer: { flex: 1 },
  title: { fontSize: 16, fontWeight: '600', color: '#111827' },
  titleDone: { textDecorationLine: 'line-through', color: '#9CA3AF' },
  description: { fontSize: 13, color: '#6B7280', marginTop: 2 },
  badge: { fontSize: 12, fontWeight: '600', marginTop: 4 },
  deleteBtn: { padding: 4 },
  deleteText: { fontSize: 18 },
});
