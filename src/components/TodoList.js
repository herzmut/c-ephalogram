import React, { PropTypes } from 'react'
import Todo from './Todo'

const TodoList = ({ todos, onClick }) => (
  <ul>
    {todos.map(todo =>
    <Todo onClick={() => onTodoClick(todo.id)}
      key="{todo.id}"
      {...todo}
    />)}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList
