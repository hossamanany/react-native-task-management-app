import { StyleSheet } from "react-native";

// Simple theme colors
const colors = {
  primary: '#2196F3',
  primaryDark: '#1976D2',
  secondary: '#FF9800',
  success: '#4CAF50',
  error: '#F44336',
  warning: '#FF9800',
  background: '#F8F9FA',
  surface: '#FFFFFF',
  text: '#212529',
  textSecondary: '#6C757D',
  border: '#DEE2E6',
  shadow: '#000000',
} as const;

// Simple spacing scale
const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
} as const;

// Simple typography
const typography = {
  h1: { fontSize: 24, fontWeight: 'bold' as const },
  h2: { fontSize: 20, fontWeight: '600' as const },
  h3: { fontSize: 18, fontWeight: '600' as const },
  body: { fontSize: 16, fontWeight: '400' as const },
  caption: { fontSize: 14, fontWeight: '400' as const },
  small: { fontSize: 12, fontWeight: '400' as const },
} as const;

export const theme = {
  colors,
  spacing,
  typography,
} as const;

export const globalStyles = StyleSheet.create({

    container: {
        flex: 1,
        padding: spacing.md,
        backgroundColor: colors.background,
    },
    
    taskContainer: {
        padding: spacing.md,
        marginBottom: spacing.sm,
        borderRadius: 12,
        shadowColor: colors.shadow,
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 2,
        minHeight: 80,
    },

    completedTask: {
        backgroundColor: '#E8F5E8',
        borderLeftWidth: 4,
        borderLeftColor: colors.success,
        opacity: 0.95,
    },

    incompleteTask: {
        backgroundColor: colors.surface,
        borderLeftWidth: 4,
        borderLeftColor: colors.secondary,
    },

    taskHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: spacing.sm,
    },

    toggleButton: {
        width: 48,
        height: 48,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: spacing.sm,
        borderWidth: 2,
        shadowColor: colors.shadow,
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 3,
    },

    toggleButtonComplete: {
        backgroundColor: colors.success,
        borderColor: colors.success,
    },

    toggleButtonIncomplete: {
        backgroundColor: 'transparent',
        borderColor: colors.secondary,
    },

    toggleButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },

    taskTextContainer: {
        flex: 1,
    },

    taskName: {
        ...typography.body,
        fontWeight: '600',
        marginBottom: spacing.xs,
        color: colors.text,
    },

    taskDescription: {
        ...typography.caption,
        opacity: 0.8,
        color: colors.textSecondary,
    },

    completedText: {
        textDecorationLine: 'line-through',
        color: colors.textSecondary,
        opacity: 0.7,
    },

    normalText: {
        color: colors.text,
    },

    input: {
        marginBottom: spacing.md,
        padding: spacing.sm,
        borderColor: colors.border,
        borderWidth: 1,
        borderRadius: 8,
        fontSize: 16,
        backgroundColor: colors.surface,
        color: colors.text,
    },

    descriptionInput: {
        height: 80,
        textAlignVertical: 'top',
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: spacing.sm,
    },

    button: {
        flex: 1,
        padding: spacing.sm,
        borderRadius: 8,
        marginHorizontal: spacing.xs,
        alignItems: 'center',
        shadowColor: colors.shadow,
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        minHeight: 48,
        justifyContent: 'center',
    },

    editButton: {
        backgroundColor: colors.success,
    },

    deleteButton: {
        backgroundColor: colors.error,
    },

    buttonText: {
        fontWeight: '600',
        color: 'white',
        fontSize: 14,
    },


    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: spacing.xl,
    },

    emptyText: {
        ...typography.body,
        color: colors.textSecondary,
        textAlign: 'center',
        opacity: 0.8,
    },

    // Additional styles for better visual appeal
    screenTitle: {
        ...typography.h2,
        color: colors.text,
        marginBottom: spacing.md,
        textAlign: 'center',
    },

    addButton: {
        backgroundColor: colors.primary,
        paddingVertical: spacing.sm,
        paddingHorizontal: spacing.lg,
        borderRadius: 8,
        shadowColor: colors.shadow,
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
        opacity: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    addButtonDisabled: {
        backgroundColor: colors.border,
        shadowOpacity: 0,
        elevation: 0,
        opacity: 0.6,
    },

    addButtonText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 16,
        textAlign: 'center',
    },

    addButtonTextDisabled: {
        color: colors.textSecondary,
    },

    taskCount: {
        ...typography.caption,
        color: colors.textSecondary,
        textAlign: 'center',
        marginBottom: spacing.sm,
    },
});
