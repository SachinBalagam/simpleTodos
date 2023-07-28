// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoList, TodoDelete} = props
  const {title, id} = todoList

  const onDeleteTodo = () => {
    TodoDelete(id)
  }

  return (
    <li className="each-list">
      <p className="each-title">{title}</p>
      <button type="button" className="each-button" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
