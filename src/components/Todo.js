import React from 'react'

function Todo(props) {
  const { todo } = props

  return (
    <div className='col-6 mb-2'>
      <div className='d-flex justify-content-between align-items-center border rounded p-3'>
        <div>{todo.text}</div>
        <div>
          <button
            type='button'
            className={`btn btn-sm mr-1 ${
              !todo.done ? 'btn-success' : 'btn-warning'
            }`}
            onClick={() => props.done(todo.key)}
          >
            {todo.done ? 'undone' : 'done'}
          </button>
          <button type='button' className='btn btn-info btn-sm mr-1'>
            edit
          </button>
          <button
            type='button'
            className='btn btn-danger btn-sm ml-1'
            onClick={() => props.delete(todo.key)}
          >
            delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default Todo
