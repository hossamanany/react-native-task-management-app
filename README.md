# React Native Task Manager App

A simple and intuitive task management application built with React Native and Expo, designed for the Chapter One Tech Screen interview process.

## Features

### Core Functionality

- **Add Task**: Users can add new tasks with a brief description
- **Mark Task as Complete**: Users can toggle tasks between complete and incomplete states with visual feedback
- **Delete Task**: Users can remove tasks from the list
- **Task List**: Displays all tasks with clear visual distinction between complete and incomplete items

### User Interface

- Clean and intuitive design using React Native's default components
- Visual feedback for user interactions (completing or deleting tasks)
- Responsive layout that works on both iOS and Android
- Color-coded task status indicators
- Strikethrough text for completed tasks

### State Management

- Local component state management using React hooks
- AsyncStorage for data persistence
- No external state management libraries required

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- Expo Go app on your mobile device (for testing)

## Installation & Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd task-management
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm start
   # or
   expo start
   ```

4. **Run on device**
   - Install Expo Go app on your mobile device
   - Scan the QR code displayed in the terminal/browser
   - The app will load on your device

## Usage

### Adding a Task

1. Tap the "Add New Task" button on the main screen
2. Enter a task description in the text input
3. Tap "Add Task" to save

### Marking Tasks as Complete

1. Tap the circular button next to any task
2. Completed tasks will show a green checkmark and strikethrough text
3. Tap again to mark as incomplete

### Deleting Tasks

1. Tap the "Delete" button on any task
2. The task will be permanently removed from the list

## Technical Implementation

### Architecture

- **React Native** with **Expo** for cross-platform development
- **TypeScript** for type safety
- **React Navigation** for screen navigation
- **AsyncStorage** for data persistence

### Key Components

- `TaskListScreen`: Main screen displaying all tasks
- `AddTaskScreen`: Screen for creating new tasks
- `TaskItem`: Reusable component for individual task display

### Implementation Details

- Uses React's `useState` and `useEffect` hooks
- Local state management without external libraries
- AsyncStorage for data persistence across app sessions

## Third-Party Libraries Used

- **@react-navigation/native**: Navigation between screens
- **@react-navigation/stack**: Stack navigator implementation
- **@react-native-async-storage/async-storage**: Local data storage
- **uuid**: Unique ID generation for tasks
- **expo**: React Native development platform

## Code Quality

- Clean, well-organized code structure
- TypeScript for type safety
- Consistent naming conventions
- Proper error handling
- Responsive design principles

## Evaluation Criteria Met

✅ **Functionality**: All required features implemented (add, complete, delete tasks)
✅ **Code Quality**: Clean, organized, and commented code
✅ **UI/UX Design**: Intuitive interface with visual feedback
✅ **Core Concepts**: Demonstrates understanding of React Native components, state management, and user interactions

## Future Enhancements

While this app meets all interview requirements, potential future improvements could include:

- Task categories or tags
- Due dates and reminders
- Search and filter functionality
- Task priority levels
- Data export/import capabilities

---

## Built for Chapter One Tech Screen Interview Process
