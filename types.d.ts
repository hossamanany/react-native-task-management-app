import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';

export interface Task {
  id: string;
  name: string;
  description: string;
  status: 'Complete' | 'Incomplete';
}

export type StackParamList = {
  TaskList: undefined;
  AddTask: undefined;
};

export type TaskListScreenNavigationProp = StackNavigationProp<StackParamList, 'TaskList'>;
export type AddTaskScreenNavigationProp = StackNavigationProp<StackParamList, 'AddTask'>;
export type AddTaskScreenRouteProp = StackScreenProps<StackParamList, 'AddTask'>['route'];
