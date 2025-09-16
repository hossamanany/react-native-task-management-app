import { Button, StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 16,
        backgroundColor: 'azure',
    },
    
    taskContainer: {
        padding: 16,
        marginBottom: 16,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },

    completedTask: {
        backgroundColor: '#E8F5E8',
        borderLeftWidth: 4,
        borderLeftColor: '#4CAF50',
    },

    incompleteTask: {
        backgroundColor: '#FFF3E0',
        borderLeftWidth: 4,
        borderLeftColor: '#FF9800',
    },

    taskHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },

    toggleButton: {
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
        borderWidth: 2,
    },

    toggleButtonComplete: {
        backgroundColor: '#4CAF50',
        borderColor: '#4CAF50',
    },

    toggleButtonIncomplete: {
        backgroundColor: 'transparent',
        borderColor: '#FF9800',
    },

    toggleButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },

    taskName: {
        flex: 1,
        fontSize: 16,
        fontWeight: '500',
    },

    completedText: {
        textDecorationLine: 'line-through',
        color: '#666',
    },

    normalText: {
        color: '#333',
    },

    input: {
        marginBottom: 16,
        padding: 8,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 4,
         
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },

    button: {
        flex: 1,
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 5,
        alignItems: 'center',
    },

    editButton: {
        backgroundColor: 'lightgreen',
    },

    deleteButton: {
        backgroundColor: 'orange',
    },

    buttonText: {
        fontWeight: 'bold', 
    },


    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 50,
    },

    emptyText: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
    },
});
