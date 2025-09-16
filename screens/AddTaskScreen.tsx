import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';
import { globalStyles } from '../styles/styles';
import { useTaskContext } from '../context/TaskContext';
import { AddTaskScreenNavigationProp, Task } from '../types';
import { MESSAGES } from '../constants';
/**
 * AddTaskScreen - Form for creating new tasks
 * 
 * This component demonstrates:
 * - Simple form state management
 * - Task creation with validation
 * - Navigation handling
 */
export default function AddTaskScreen() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  
  const navigation = useNavigation<AddTaskScreenNavigationProp>();
  const { tasks, addTask } = useTaskContext();

  const handleSubmit = () => {
    const trimmedName = name.trim();
    if (!trimmedName) {
      Alert.alert('Error', 'Please enter a task name');
      return;
    }

    // Check for duplicate task names before creating the task
    const existingTask = tasks.find(task => 
      task.name.toLowerCase() === trimmedName.toLowerCase()
    );
    
    if (existingTask) {
      Alert.alert('Error', `Task "${trimmedName}" already exists`);
      return;
    }

    const task: Task = {
      id: uuid(),
      name: trimmedName,
      description: description.trim() || 'No description',
      status: 'Incomplete',
    };
    
    addTask(task);
    setName('');
    setDescription('');
    navigation.navigate('TaskList');
    Alert.alert('Success', 'Task added successfully!');
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.screenTitle}>Add New Task</Text>
      
      <TextInput
        placeholder="Enter task name"
        value={name}
        onChangeText={setName}
        style={globalStyles.input}
        autoFocus={true}
        multiline={false}
        placeholderTextColor="#999"
      />
      
      <TextInput
        placeholder="Enter task description (optional)"
        value={description}
        onChangeText={setDescription}
        style={[globalStyles.input, globalStyles.descriptionInput]}
        multiline={true}
        numberOfLines={3}
        placeholderTextColor="#999"
      />
      
      <TouchableOpacity 
        style={[
          globalStyles.addButton,
          !name.trim() && globalStyles.addButtonDisabled
        ]}
        onPress={handleSubmit}
        disabled={!name.trim()}
      >
        <Text style={[
          globalStyles.addButtonText,
          !name.trim() && globalStyles.addButtonTextDisabled
        ]}>
          Add Task
        </Text>
      </TouchableOpacity>
    </View>
  );
}
