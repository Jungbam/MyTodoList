import React from 'react'
import ToDoCard from '../UI/ToDoCard'
const Article = ({ title, array, deleteHandler, doneHandler }) => {
  return (
    <div className="">
      <h2>{title}</h2>
      <div>
        {array.map((el, i) => {
          return (
            <ToDoCard
              key={i}
              el={el}
              deleteHandler={deleteHandler}
              doneHandler={doneHandler}
            />
          )
        })}
      </div>
    </div>
  )
}
// st
export default Article
