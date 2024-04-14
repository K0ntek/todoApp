import React from 'react'

const Todo = ({todo}) => {

    
    function handleDelete(index){
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <div>
        <p>{todo}</p>
    </div>
  )
}

export default Todo