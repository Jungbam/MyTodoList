import React from 'react'
const ToDoCard = ({ el, deleteHandler, doneHandler }) => {
  // console.log(el)
  const { id, title, content, idDone } = el
  return (
    <div id={id} className="todo-card">
      <h1>{title}</h1>
      <p className="todo-content">{content}</p>
      <div className="button-box">
        <button onClick={deleteHandler}>삭제</button>
        <button onClick={doneHandler}>{idDone ? '완료' : '취소'}</button>
      </div>
    </div>
  )
}

export default ToDoCard
