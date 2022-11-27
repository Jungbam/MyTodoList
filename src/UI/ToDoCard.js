import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { HandlerContext } from '../context/HandlerContext'

const ToDoCard = ({ el }) => {
  const { id, title, content, idDone } = el
  const { deleteHandler, doneHandler } = useContext(HandlerContext)
  const isDark = useSelector((state)=>state.isDark)  
  return (
    <div id={id} className={isDark? "todo-card":'black-card'}>
      <h1>{title}</h1>
      <p className={isDark?  "todo-content":'black-card-content'}>{content}</p>
      <div className="button-box">
        <button onClick={deleteHandler}>삭제</button>
        <button onClick={doneHandler}>{idDone ? '완료' : '취소'}</button>
      </div>
    </div>
  )
}

export default ToDoCard
