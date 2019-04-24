export const addTodo = (id) => {
    return {
        type: 'ADD',
        id
    }
}

export const editTodo = (id) => {
    return {
        type: 'EDIT',
        id
    }
}

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE',
        id
    }
}

export const deleteTodo = (id) => {
    return {
        type: 'DELETE',
        id
    }
}