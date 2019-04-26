import React from 'react';
import Todo from './todo';

const List = ({ list }) => {
    const getList = list => list.map(todo => <Todo key={todo.id} todo={todo} />)
    return(<div>
        <h2>list</h2>
        <ul data-testid='ul'>
            {getList(list)}
        </ul>
    </div>)
}

export default List;