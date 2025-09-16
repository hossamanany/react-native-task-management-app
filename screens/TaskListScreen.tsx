import React, { useCallback } from 'react';
import { View, FlatList, TouchableOpacity, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TaskItem from '../components/TaskItem';
import { globalStyles } from '../styles/styles';
import { TaskListScreenNavigationProp, Task } from '../types';
import { useTaskContext } from '../context/TaskContext';
import { MESSAGES } from '../constants';

/**
 * TaskListScreen - Main screen displaying all tasks
 * 
 * This component demonstrates:
 * - Simple task list display
 * - Navigation handling
 * - Task actions with confirmation
 */
export default function TaskListScreen() {
  const navigation = useNavigation<TaskListScreenNavigationProp>();
  const { tasks, deleteTask, toggleTaskComplete } = useTaskContext();

  const handleDelete = (id: string) => {
    Alert.alert(
      'Delete Task',
      'Are you sure you want to delete this task?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', style: 'destructive', onPress: () => deleteTask(id) },
      ]
    );
  };

  const renderTaskItem = useCallback(({ item }: { item: Task }) => (
    <TaskItem
      task={item}
      onDelete={handleDelete}
      onToggleComplete={toggleTaskComplete}
    />
  ), [handleDelete, toggleTaskComplete]);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.screenTitle}>My Tasks</Text>
      {tasks.length > 0 && (
        <Text style={globalStyles.taskCount}>
          {tasks.length} task{tasks.length !== 1 ? 's' : ''}
        </Text>
      )}
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderTaskItem}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={globalStyles.emptyContainer}>
            <Text style={globalStyles.emptyText}>
              {tasks.length === 0 ? 'No tasks yet. Add your first task!' : 'No tasks match your criteria.'}
            </Text>
          </View>
        }
      />
      <TouchableOpacity 
        style={globalStyles.addButton}
        onPress={() => navigation.navigate('AddTask')}
      >
        <Text style={globalStyles.addButtonText}>
          Add New Task
        </Text>
      </TouchableOpacity>
    </View>
  );
}
