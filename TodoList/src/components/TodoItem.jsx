import "./TodoItem.css"

const TodoItem = ({id, isDone, content, date, onUpdate, onDelete}) => {
  const onChangedCheckbox = () => {
    onUpdate(id);
  }

  const onClickDeleteButton = () => {
    onDelete(id);
  }

  return (
    <div className="TodoItem">
      <input readOnly checked={isDone} type="checkbox" onChange={onChangedCheckbox}/>
      <div 
        className="content"
        style={{textDecoration : isDone ? 'line-through' : 'none',
                color : isDone ? 'gray' : 'black'}}
      >{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  )
}

export default TodoItem;