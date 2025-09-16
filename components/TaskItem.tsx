import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/styles';
import { Task } from '../types';

interface TaskItemProps {
  task: Task;
  onDelete: (id: string) => void;
  onToggleComplete: (id: string) => void;
}

/**
 * TaskItem - Individual task display component
 * 
 * This component demonstrates:
 * - Props interface definition
 * - Conditional rendering based on task status
 * - Event handling with TouchableOpacity
 * - Dynamic styling based on state
 */
export default function TaskItem({ task, onDelete, onToggleComplete }: TaskItemProps) {
  const getTextStyle = () => {
    return task.status === 'Complete' ? globalStyles.completedText : globalStyles.normalText;
  };

  return (
    <View style={[
      globalStyles.taskContainer,
      task.status === 'Complete' ? globalStyles.completedTask : globalStyles.incompleteTask
    ]}>
      <View style={globalStyles.taskHeader}>
        <TouchableOpacity
          style={[
            globalStyles.toggleButton,
            task.status === 'Complete' ? globalStyles.toggleButtonComplete : globalStyles.toggleButtonIncomplete
          ]}
          onPress={() => onToggleComplete(task.id)}
        >
          <Text style={globalStyles.toggleButtonText}>
            {task.status === 'Complete' ? '✓' : '○'}
          </Text>
        </TouchableOpacity>
        
        <View style={globalStyles.taskTextContainer}>
          <Text style={[globalStyles.taskName, getTextStyle()]}>
            {task.name}
          </Text>
          <Text style={[globalStyles.taskDescription, getTextStyle()]}>
            {task.description}
          </Text>
        </View>
      </View>
      
      <View style={globalStyles.buttonContainer}>
        <TouchableOpacity
          style={[globalStyles.button, globalStyles.deleteButton]}
          onPress={() => onDelete(task.id)}
        >
          <Text style={globalStyles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
