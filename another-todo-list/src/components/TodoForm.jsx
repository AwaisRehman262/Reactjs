import React, { useState } from 'react'

export default function Todo_form(props) {
    const [value,set_value] = useState("")

    const handle_submit = e => {
        e.preventDefault()
        props.add_todo(value)
        set_value('')
    }
  return (
    <form className='Todo_form' onSubmit={handle_submit}>
        <input type="text" className='todo_input' placeholder='What is the task today?' value={value} onChange={(input) => set_value(input.target.value)}/>
        <button type='submit' className='todo_btn'>Add task</button>
    </form>
  )
}
