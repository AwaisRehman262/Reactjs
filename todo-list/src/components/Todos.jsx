import React, { useState } from 'react'
import Todo_item from './TodoItem'

function Todos() {
  const [my_todos, set_my_todos] = useState([])

  function add_product() {
    let id = my_todos.length
    let value = prompt("Enter Todo value!")

    let todo = { value, id }
    let updated_todos = [...my_todos, todo]

    set_my_todos(updated_todos)
  }

  function edit_handler(id) {
      let sliced_todos = my_todos.slice(1)
      console.log(sliced_todos)
    }
  

  function delete_handler(id) {
    let temp_todos = my_todos.filter((todo) => todo.id !== id)
    set_my_todos(temp_todos)
  }

  return (
    <>
      <div style={{ display: 'flex' }}>
        <button onClick={add_product} className='add_button'>Add todo</button>
      </div>
      <hr />
      <div>
        {my_todos.map((todo) => { return <Todo_item value={todo.value} edit_handler={() => edit_handler(todo.id)} delete_handler={() => delete_handler(todo.id)} id={todo.id} /> })}
      </div>
    </>

  )
}
export default Todos