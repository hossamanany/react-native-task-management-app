# Task Manager App

A simple and intuitive React Native task management application developed as a personal project. This app allows users to create, manage, and track their daily tasks with descriptions and completion status.

## Features

### Core Functionality

- **Add Tasks**: Create new tasks with a name and optional description
- **Mark as Complete**: Toggle task completion status with visual feedback
- **Delete Tasks**: Remove tasks with confirmation dialog
- **Task List**: View all tasks in an organized list with visual distinction between complete and incomplete tasks

### User Interface

- **Clean Design**: Modern, intuitive interface using React Native components
- **Visual Feedback**: Immediate feedback for all user interactions
- **Responsive Layout**: Optimized for different screen sizes
- **Status Indicators**: Clear visual distinction between complete and incomplete tasks
- **Confirmation Dialogs**: Safe deletion with user confirmation

### State Management

- **Context API**: Uses React Context API for centralized state management across components
- **Custom Hooks**: Implements useTaskContext hook for type-safe context consumption
- **Global State**: Task data is managed globally through TaskProvider context
- **Component Communication**: Demonstrates both Context API and props for different use cases

## Screenshots

The app includes screenshots in the `assets/screenshots/` directory:

- `list.png` - Main task list view
- `add.png` - Task adding interface
- `delete.png` - Task deleting module

## Installation & Setup

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- iOS Simulator (for iOS development) or Android Studio (for Android development)

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd task-management
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   # or
   expo start
   ```

4. **Run on device/simulator**
   - For iOS: `npm run ios` or `expo start --ios`
   - For Android: `npm run android` or `expo start --android`
   - For Web: `npm run web` or `expo start --web`

## Usage

### Adding a New Task

1. Tap the "Add New Task" button on the main screen
2. Enter a task name (required)
3. Optionally add a description
4. Tap "Add Task" to save

### Managing Tasks

- **Mark Complete**: Tap the circular button next to any task to toggle completion status
- **Delete Task**: Tap the "Delete" button and confirm in the dialog
- **View Details**: Task descriptions are displayed below the task name

### Visual Indicators

- **Incomplete Tasks**: White background with orange left border
- **Complete Tasks**: Light green background with green left border and strikethrough text
- **Interactive Elements**: Buttons have shadow effects and color changes on interaction

## Technical Details

### Dependencies

- **@react-navigation/native**: Navigation between screens
- **@react-navigation/stack**: Stack navigation implementation
- **expo**: Development platform and tools
- **expo-status-bar**: Status bar management
- **react**: Core React library
- **react-dom**: React DOM for web support
- **react-native**: Core React Native framework
- **react-native-get-random-values**: UUID generation support
- **react-native-safe-area-context**: Safe area handling
- **react-native-screens**: Native screen optimization
- **react-native-web**: Web platform support
- **uuid**: Unique identifier generation for tasks

### Development Dependencies

- **@babel/core**: Babel transpilation
- **@types/react**: TypeScript definitions for React
- **@types/react-native**: TypeScript definitions for React Native
- **@types/uuid**: TypeScript definitions for UUID
- **typescript**: TypeScript compiler

### Project Structure

```text
task-management/
├── components/
│   ├── ErrorBoundary.tsx     # Error boundary for error handling
│   └── TaskItem.tsx          # Individual task display component
├── constants/
│   └── index.ts              # Application constants and messages
├── context/
│   └── TaskContext.tsx       # Context API for state management
├── screens/
│   ├── TaskListScreen.tsx    # Main task list view
│   └── AddTaskScreen.tsx     # Add new task form
├── styles/
│   └── styles.ts             # Global styling definitions
├── types.d.ts                # TypeScript type definitions
├── App.tsx                   # Main app component with navigation
└── package.json              # Project dependencies and scripts
```

### Key React Native Concepts Demonstrated

- **Context API**: Centralized state management using React Context
- **Custom Hooks**: Type-safe context consumption with useTaskContext
- **Component Composition**: Proper component hierarchy and organization
- **Error Boundaries**: Graceful error handling and recovery
- **Navigation**: Screen-to-screen navigation with React Navigation
- **Event Handling**: User interaction handling (onPress, onChangeText)
- **Conditional Rendering**: Dynamic UI based on task status
- **Styling**: Responsive design with StyleSheet API
- **TypeScript Integration**: Type safety with interfaces and type definitions
- **Constants Management**: Centralized application constants

## Development Notes

### State Management Approach

This app uses React Context API for centralized state management. The `TaskProvider` component wraps the entire app and provides task management functions through context. This approach offers several benefits:

- **Centralized State**: All task data is managed in one place
- **Type Safety**: Custom `useTaskContext` hook provides full TypeScript support
- **Component Decoupling**: Components don't need to pass props through multiple levels
- **Automatic Sorting**: Tasks are automatically sorted (incomplete first, then complete)
- **Duplicate Prevention**: Prevents adding tasks with duplicate names

### Visual Feedback Implementation

- Alert dialogs for user confirmations and success messages
- Visual status indicators with color coding
- Interactive button states with shadow effects
- Smooth transitions between task states

### Error Handling

The app includes comprehensive error handling:

- **Error Boundary**: Catches JavaScript errors anywhere in the component tree
- **Graceful Recovery**: Provides user-friendly error messages with retry functionality
- **Debug Information**: Shows detailed error information in development mode
- **Fallback UI**: Custom error screen when something goes wrong

### Constants Management

Application constants are centralized in `constants/index.ts`:

- **Message Constants**: Success messages and user feedback text
- **Type Safety**: All constants are properly typed with `as const`
- **Maintainability**: Easy to update messages and text across the app

### Responsive Design

The app is designed to work across different screen sizes with:

- Flexible layouts using flex properties
- Appropriate spacing and padding
- Scalable text and button sizes
- Touch-friendly interactive elements

## Future Enhancements

Potential improvements that could be added:

- Task editing functionality (currently only add/delete)
- Task categories or tags
- Due dates and reminders
- Search and filter capabilities
- Data persistence with AsyncStorage
- Dark mode support
- Task priority levels
- Task sharing capabilities
- Offline support
- Push notifications for reminders

## About This Project

This is a personal project developed to demonstrate React Native development skills and modern React patterns. The app showcases:

- React Native development with TypeScript
- Context API for state management
- Component composition and reusability
- Error handling with Error Boundaries
- Navigation with React Navigation
- Clean code architecture and best practices

## License

This project is created as a personal development project and is for demonstration purposes.

## Contact

For questions or feedback about this project, please contact the developer.
