import React, { useContext } from 'react'
import { HandlerContext } from '../context/HandlerContext'
import ToDoCard from '../UI/ToDoCard'
const Article = ({ title }) => {
    const { workingArray } = useContext(HandlerContext)


  return (
    <div className="article-container">
      <h2 className="article-title">{title}</h2>
      <div className="card-container">
        {title==='Working...'?workingArray.filter((el) => el.idDone === true).map((el, i) => {
          return <ToDoCard key={i} el={el} />
        }): workingArray.filter((el) => el.idDone === false).map((el, i) => {
          return <ToDoCard key={i} el={el} />
        })}
      </div>
    </div>
  )
}
export default Article