import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

export default function Todo(props) {
  return (
    <div className='todo'>
      <p onClick={() => props.toggle_complete(props.task.id)} className={props.task.completed ? 'completed' : 'not_completed'}>{props.task.todo_name}</p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => props.edit_todo(props.task.id)} />
        <FontAwesomeIcon icon={faTrash} onClick={() =>props.delete_todo(props.task.id)} />
      </div>
    </div>
  )
}


//                      another code

// import React from 'react'

// export default function Todo(props) {
//   console.log(props.task)
//   return (
//     <div className='todo'>
  
//       <p onClick={() => props.toggle_complete(props.task.id)} className={props.task.completed ? 'completed' : ''}>{props.task.value}</p> 
//     </div>
//   )
// }