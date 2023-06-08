import React from 'react'

export default function Todo_item(props) {
  return (

    <div style={{ border: "1px solid black" }}>
      <h2>{props.value}</h2>
      <button onClick={props.delete_handler}>Delete</button>
      <button onClick={props.edit_handler}>Edit</button>
    </div>
  )
}