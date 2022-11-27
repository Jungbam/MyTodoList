import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { HandlerContext } from '../context/HandlerContext'
import ToDoCard from '../UI/ToDoCard'
const Article = ({ title }) => {
    const { workingArray } = useContext(HandlerContext)
  const isDark = useSelector((state)=>state.isDark)  

  return (
    <div className="article-container">
      <div className={isDark? "card-container":'white-card-container'}>
      <h2 className={isDark? "article-title":'white-article-title'}>{title}</h2>
        {title==='Working...'?workingArray.filter((el) => el.idDone === true).map((el, i) => {
          return <ToDoCard key={i} el={el} />
        }): workingArray.filter((el) => el.idDone === false).map((el, i) => {
          return <ToDoCard key={i} el={el} />
        })}
      {title==='Working...'?<button className='doneBtn'>완료한 일 확인</button>:<></>}
      </div>
    </div>
  )
}
export default Article