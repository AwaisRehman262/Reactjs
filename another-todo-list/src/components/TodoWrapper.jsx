import React, { useState } from 'react';
import TodoForm from './TodoForm';
import EditTodoForm from './EditTodoForm';
import Todo from './Todo';
import { v4 as uuidv4 } from 'uuid';
uuidv4();

export default function TodoWrapper() {
  const [todos, set_todos] = useState([])

  const add_todo = (todo) => {
    set_todos([...todos,
    { id: uuidv4(), todo_name: todo, completed: false, is_editing: false }
    ])
  }

  const toggle_complete = (id) => {
    set_todos(todos.map((todo) => { return todo.id == id ? { ...todo, completed: !todo.completed } : { ...todo } }))
  }

  const edit_todo = id => {
    set_todos(todos.map((todo) => { return todo.id === id ? { ...todo, is_editing: !todo.is_editing } : { ...todo } }))
  }

  const edit_task = (task, id) => {
    set_todos(todos.map(todo => { return todo.id == id ? { ...todo, task, is_editing: !todo.is_editing } : { ...todo } }))
  }

  const delete_todo = (id) => {
    set_todos(todos.filter(todo => todo.id !== id))
  }
  return (
    <div className='Todo_wrapper'>
      <h1>Gets things done!</h1>
      <TodoForm add_todo={add_todo} />
      {todos.map((todo_item) => { return todo_item.is_editing ? <EditTodoForm edit_todo={edit_task} task={todo_item} /> : <Todo task={todo_item} toggle_complete={toggle_complete} edit_todo={edit_todo} delete_todo={delete_todo} /> })}
    </div>
  )
}


//                                  another code


// import React, { useState } from "react";
// import { Todo } from "./Todo";
// import { TodoForm } from "./TodoForm";
// import { v4 as uuidv4 } from "uuid";
// import { EditTodoForm } from "./EditTodoForm";

// export const TodoWrapper = () => {
//   const [todos, set_todos] = useState([]);

//   const add_todo = (todo) => {
//     set_todos([
//       ...todos,
//       { id: uuidv4(), task: todo, completed: false, is_editing: false },
//     ]);
//   }

//   const delete_todo = (id) => set_todos(todos.filter((todo) => todo.id !== id));

//   const toggle_complete = (id) => {
//     set_todos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   }

//   const edit_todo = (id) => {
//     set_todos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, is_editing: !todo.is_editing } : todo
//       )
//     );
//   }

//   const edit_task = (task, id) => {
//     set_todos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, task, is_editing: !todo.is_editing } : todo
//       )
//     );
//   };

//   return (
//     <div className="todo_wrapper">
//       <h1>Get Things Done !</h1>
//       <TodoForm add_todo={add_todo} />

//       {todos.map((todo) =>
//         todo.is_editing ? (
//           <EditTodoForm edit_todo={edit_task} task={todo} />
//         ) : (
//           <Todo
//             key={todo.id}
//             task={todo}
//             delete_todo={delete_todo}
//             edit_todo={edit_todo}
//             toggle_complete={toggle_complete}
//           />
//         )
//       )}
//     </div>
//   )
// }
