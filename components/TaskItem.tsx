import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../styles/styles';

interface Task {
  id: string;
  name: string;
  status: 'Complete' | 'Incomplete';
}

interface TaskItemProps {
  task: Task;
  onDelete: (id: string) => void;
  onToggleComplete: (id: string) => void;
}

export default function TaskItem({ task, onDelete, onToggleComplete }: TaskItemProps) {
  const navigation = useNavigation();

  // Get color based on status
  const getStatusColor = (status: string): string => {
    return status === 'Complete' ? 'green' : 'orange';
  };

  // Get text style based on completion status
  const getTextStyle = () => {
    return task.status === 'Complete' ? globalStyles.completedText : globalStyles.normalText;
  };

  return (
    <View style={[
      globalStyles.taskContainer,
      task.status === 'Complete' ? globalStyles.completedTask : globalStyles.incompleteTask
    ]}>
      <View style={globalStyles.taskHeader}>
        {/* Toggle Complete Button */}
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
        
        {/* Task Name */}
        <Text style={[globalStyles.taskName, getTextStyle()]}>
          {task.name}
        </Text>
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
