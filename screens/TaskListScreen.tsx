import React, { useState, useEffect } from 'react';
import { View, FlatList, Button, Text } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TaskItem from '../components/TaskItem';
import { globalStyles } from '../styles/styles';
import { TaskListScreenNavigationProp } from '../types';

interface Task {
  id: string;
  name: string;
  status: 'Complete' | 'Incomplete';
}

export default function TaskListScreen() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const navigation = useNavigation<TaskListScreenNavigationProp>();

  // Fetch tasks from AsyncStorage
  const fetchTasks = async () => {
    const storedTasks = await AsyncStorage.getItem('tasks');
    if (storedTasks) {
      const parsedTasks: Task[] = JSON.parse(storedTasks);
      // Sort tasks: incomplete first, then complete
      parsedTasks.sort((a, b) => {
        if (a.status === b.status) return 0;
        return a.status === 'Incomplete' ? -1 : 1;
      });
      setTasks(parsedTasks);
    } else {
      console.log('No tasks found!');
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Listen for screen focus to refresh tasks
  useFocusEffect(
    React.useCallback(() => {
      fetchTasks();
    }, [])
  );

  const handleDelete = async (id: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleToggleComplete = async (id: string) => {
    const updatedTasks = tasks.map((task) => 
      task.id === id 
        ? { ...task, status: task.status === 'Complete' ? 'Incomplete' as const : 'Complete' as const }
        : task
    );
    setTasks(updatedTasks);
    await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const renderTaskItem = ({ item }: { item: Task }) => {
    return (
      <TaskItem
        task={item}
        onDelete={handleDelete}
        onToggleComplete={handleToggleComplete}
      />
    );
  };

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderTaskItem}
        ListEmptyComponent={
          <View style={globalStyles.emptyContainer}>
            <Text style={globalStyles.emptyText}>No tasks yet. Add your first task!</Text>
          </View>
        }
      />
      <Button 
        title="Add New Task"
        onPress={() => navigation.navigate('AddTask')}
      />
    </View>
  );
}
