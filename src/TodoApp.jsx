import React, { useState } from 'react'
import { useGetTodosQuery, useGetTodoQuery } from './store/apis'

export const TodoApp = () => {
    
    const [todoId, setTodoId] = useState(1)
    //const { data: todos = [], isLoading } = useGetTodosQuery()
    const { data: todo, isLoading } = useGetTodoQuery(todoId)
    
    const onNextTodo = () => {
        setTodoId( todoId + 1 )
    }
    const onPrevTodo = () => {
        if( todoId === 1) return
        setTodoId( todoId - 1 )
        
    }
    return (
        <>
            <h1>Todos - RTK Query</h1>
            <hr />
            <h4>isLoading: { isLoading ? 'True' : 'False' }</h4>

            <pre>{JSON.stringify( todo )}</pre>

            {/*<ul>
                {todos.map(todo=>(
                    <li key={todo.id}>
                        <strong>{todo.completed ? 'DONE' : 'PENDINT' }</strong>
                        {todo.title}
                    </li>
                ))}
            </ul>*/} 

            <button
                onClick={onPrevTodo}
            >
                Prev Todo
            </button>
            <button
                onClick={onNextTodo}
            >
                Next Todo
            </button>
        </>
    )
}
