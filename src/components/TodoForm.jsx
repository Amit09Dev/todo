import PropTypes from 'prop-types'

export default function TodoForm({handleSubmit, todo, setTodo, editId}) {
  return (
    <form className='todo-list' onSubmit={handleSubmit}>
    <input type="text" 
    value={todo} 
    onChange={(e )=> setTodo(e.target.value)}
    />
    <button type='submit'>{editId ? 'Edit': 'Go'}</button>
  </form>
  )
}

TodoForm.prototype = {
    handleSubmit: PropTypes.func,
    todo: PropTypes.string,
    setTodo: PropTypes.func,
    editId : PropTypes.func,
}