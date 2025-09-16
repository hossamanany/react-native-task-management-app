import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AddTaskScreen from './screens/AddTaskScreen';
import TaskListScreen from './screens/TaskListScreen';
import { StackParamList } from './types';

const Stack = createStackNavigator<StackParamList>();

export default function App() {

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="TaskList">
        <Stack.Screen 
          name="TaskList" 
          component={TaskListScreen} 
          options={{ title: 'Task Manager' }} 
        />
        <Stack.Screen 
          name="AddTask" 
          component={AddTaskScreen} 
          options={{ title: 'Add New Task' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
