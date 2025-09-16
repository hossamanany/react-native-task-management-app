# Task Manager App

A simple and intuitive React Native task management application that allows users to create, manage, and track their daily tasks with descriptions and completion status.

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

- **Local Component State**: Uses React's useState hook for state management
- **Props Passing**: Demonstrates proper use of props for component communication
- **Navigation State**: Manages task data through React Navigation parameters

## Screenshots

The app includes screenshots in the `assets/screenshots/` directory:

- `tasklist.jpg` - Main task list view
- `add.jpg` - Add new task screen
- `edit.jpg` - Task editing interface

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
- **react-native**: Core React Native framework
- **react-native-get-random-values**: UUID generation support
- **uuid**: Unique identifier generation for tasks

### Project Structure

```text
task-management/
├── components/
│   └── TaskItem.tsx          # Individual task display component
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

- **Component State Management**: Using useState hook for local state
- **Props and Component Communication**: Passing data between parent and child components
- **Navigation**: Screen-to-screen navigation with parameter passing
- **Event Handling**: User interaction handling (onPress, onChangeText)
- **Conditional Rendering**: Dynamic UI based on task status
- **Styling**: Responsive design with StyleSheet API
- **TypeScript Integration**: Type safety with interfaces and type definitions

## Development Notes

### State Management Approach

This app uses local component state management as specified in the requirements. Tasks are stored in the TaskListScreen component state and passed to child components via props. When adding new tasks, the data is passed through navigation parameters to maintain state consistency.

### Visual Feedback Implementation

- Alert dialogs for user confirmations and success messages
- Visual status indicators with color coding
- Interactive button states with shadow effects
- Smooth transitions between task states

### Responsive Design

The app is designed to work across different screen sizes with:

- Flexible layouts using flex properties
- Appropriate spacing and padding
- Scalable text and button sizes
- Touch-friendly interactive elements

## Future Enhancements

Potential improvements that could be added:

- Task editing functionality
- Task categories or tags
- Due dates and reminders
- Search and filter capabilities
- Data persistence with AsyncStorage
- Dark mode support
- Task priority levels

## License

This project is created as part of a technical assessment and is for demonstration purposes.

## Contact

For questions or feedback about this project, please contact the development team.
