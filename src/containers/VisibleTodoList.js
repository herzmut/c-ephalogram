import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
          return todos
    case 'SHOW_COMPLETED':
          return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
          return todos.filter(t => !t.completed)
  }
}

const mapDispatchToTodos = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const VisibleTodoList =connect(
  mapStateToProps,
  mapDispatchToTodos
)(TodoList)

export default VisibleTodoList
