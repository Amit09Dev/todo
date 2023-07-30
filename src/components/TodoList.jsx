import PropTypes from 'prop-types'

export default function TodoList({todos, handleEdit, handleDelete}) {
  return (
    <ul className='allTodos'>
    {todos.map((t) => (
      <li className='singleTodo' key={t.todo}>
      <span className='todoText'>{t.todo}</span>
      <button onClick={() => handleEdit(t.id)}>Edit</button>
      <button onClick={()=>handleDelete(t.id)}>Delete</button>
    </li>
    ))}
  </ul>
  )
}

TodoList.prototype = {
    todos: PropTypes.string,
}