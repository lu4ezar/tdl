export const editTodo = () => {
    return {
        type: 'EDIT',
        id
    }
}

export const toggleTodo = () => {
    return {
        type: 'TOGGLE',
        id
    }
}

export const deleteTodo = () => {
    return {
        type: 'DELETE',
        id
    }
}