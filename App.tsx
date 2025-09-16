import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AddTaskScreen from './screens/AddTaskScreen';
import TaskListScreen from './screens/TaskListScreen';
import { TaskProvider } from './context/TaskContext';
import { ErrorBoundary } from './components/ErrorBoundary';
import { StackParamList } from './types';

// Create stack navigator with TypeScript support
const Stack = createStackNavigator<StackParamList>();

/**
 * Main App Component
 * 
 * This component demonstrates:
 * - React Navigation setup with Stack Navigator
 * - Screen configuration and navigation structure
 * - TypeScript integration with navigation types
 * - Component composition and app structure
 * - Context-based state management for better organization
 */
export default function App() {
  return (
    <ErrorBoundary>
      <TaskProvider>
        <NavigationContainer>
          <StatusBar style="auto" />
        <Stack.Navigator initialRouteName="TaskList">
          <Stack.Screen 
            name="TaskList" 
            options={{ title: 'Task Manager' }}
            component={TaskListScreen}
          />
          <Stack.Screen 
            name="AddTask" 
            options={{ title: 'Add New Task' }}
            component={AddTaskScreen}
          />
        </Stack.Navigator>
        </NavigationContainer>
      </TaskProvider>
    </ErrorBoundary>
  );
}
