import React, { useState } from 'react'

export default function Edit_Todo_form(props) {
    const [value,set_value] = useState(props.task.todo_name)

    const handle_submit = e => {
        e.preventDefault()
        props.edit_todo(value,props.task.id)
    }
  return (
    <form className='Todo_form' onSubmit={handle_submit}>
        <input type="text" className='todo_input' placeholder='Update_task' value={value} onChange={(input) => set_value(input.target.value,console.log(value,input.target))} />
        <button type='submit' className='todo_btn' onClick={ ()=> set_value([...value,props.task.todo_name={value}])}>Update</button>
    </form>
  )
}


//                              another code


// import React, {useState} from 'react'

// export default function EditTodoForm ({edit_todo, task}) {
//     const [value, set_value] = useState(task.task);

//     const handle_submit = (e) => {
//       // prevent default action
//         e.preventDefault();
//         // edit todo
//         edit_todo(value, task.id);
//       };
//   return (
//     <form onSubmit={handle_submit} className="todo_form">
//     <input type="text" value={value} onChange={(e) => set_value(e.target.value)} className="todo_input" placeholder='Update task' />
//     <button type="submit" className='todo_btn'>Add Task</button>
//   </form>
//   )
// }
