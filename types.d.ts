import { StackNavigationProp } from '@react-navigation/stack';

export type StackParamList = {
  TaskList: undefined;
  AddTask: undefined;
};

export type TaskListScreenNavigationProp = StackNavigationProp<StackParamList, 'TaskList'>;
export type AddTaskScreenNavigationProp = StackNavigationProp<StackParamList, 'AddTask'>;
