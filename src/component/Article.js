import React from 'react'
import ToDoCard from '../UI/ToDoCard'
const Article = ({ title, array }) => {
  return (
    <div className="article-container">
      <h2 className="article-title">{title}</h2>
      <div className="card-container">
        {array.map((el, i) => {
          return <ToDoCard key={i} el={el} />
        })}
      </div>
    </div>
  )
}
export default Article
