export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        text
    }
}

export const editTodo = (id) => {
    return {
        type: 'EDIT_TODO',
        id
    }
}

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}

export const deleteTodo = (id) => {
    return {
        type: 'DELETE_TODO',
        id
    }
}