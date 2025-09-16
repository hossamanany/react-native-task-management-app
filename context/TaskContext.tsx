import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Task } from '../types';

interface TaskContextType {
  tasks: Task[];
  addTask: (task: Task) => void;
  deleteTask: (id: string) => void;
  toggleTaskComplete: (id: string) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

interface TaskProviderProps {
  children: ReactNode;
}

/**
 * TaskProvider - Context provider for task management
 * 
 * This component demonstrates:
 * - React Context API for state management
 * - Centralized task operations
 * - Type-safe context usage
 * - Provider pattern implementation
 */
export function TaskProvider({ children }: TaskProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Simple task management functions
  const addTask = (newTask: Task) => {
    setTasks(prevTasks => {
      // Check for duplicate task names
      const nameExists = prevTasks.some(task => 
        task.name.toLowerCase() === newTask.name.toLowerCase()
      );
      if (nameExists) {
        return prevTasks;
      }
      
      const updatedTasks = [...prevTasks, newTask];
      // Sort: incomplete first, then complete
      return updatedTasks.sort((a, b) => {
        if (a.status === b.status) return 0;
        return a.status === 'Incomplete' ? -1 : 1;
      });
    });
  };

  const deleteTask = (id: string) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  const toggleTaskComplete = (id: string) => {
    setTasks(prevTasks => {
      const updatedTasks = prevTasks.map(task => 
        task.id === id 
          ? { ...task, status: task.status === 'Complete' ? 'Incomplete' as const : 'Complete' as const }
          : task
      );
      
      // Sort: incomplete first, then complete
      return updatedTasks.sort((a, b) => {
        if (a.status === b.status) return 0;
        return a.status === 'Incomplete' ? -1 : 1;
      });
    });
  };

  const value: TaskContextType = {
    tasks,
    addTask,
    deleteTask,
    toggleTaskComplete,
  };

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  );
}

/**
 * Custom hook to use TaskContext
 * Provides type safety and error handling
 */
export function useTaskContext(): TaskContextType {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
}
