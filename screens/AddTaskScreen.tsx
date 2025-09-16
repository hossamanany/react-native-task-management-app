import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';
import { globalStyles } from '../styles/styles';
import { AddTaskScreenNavigationProp } from '../types';

export default function AddTaskScreen() {
  const [name, setName] = useState('');
  const navigation = useNavigation<AddTaskScreenNavigationProp>();

  const handleAddNewTask = async () => {
    if (!name.trim()) {
      Alert.alert('Error', 'Task name cannot be empty!');
      return;
    }

    // Create new task with simplified structure
    const task = { 
      id: uuid(), 
      name: name.trim(), 
      status: 'Incomplete' as const 
    };
    
    const storedTasks = await AsyncStorage.getItem('tasks');
    const tasks = storedTasks ? JSON.parse(storedTasks) : [];
    tasks.push(task);
    await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
    
    // Navigate back to task list
    navigation.navigate('TaskList');
  };

  return (
    <View style={globalStyles.container}>
      <TextInput
        placeholder="Enter task description"
        value={name}
        onChangeText={setName}
        style={globalStyles.input}
        autoFocus={true}
        multiline={false}
      />
      
      <Button 
        title="Add Task" 
        onPress={handleAddNewTask}
        disabled={!name.trim()}
      />
    </View>
  );
}
