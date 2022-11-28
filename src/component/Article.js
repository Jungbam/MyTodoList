import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HandlerContext } from '../context/HandlerContext'
import ToDoCard from '../UI/ToDoCard'
const Article = ({ title }) => {
  const { workingArray } = useContext(HandlerContext)
  const {isDark, isOpen }= useSelector((state)=>state)  
  const dispatch = useDispatch()

  const onClickHandler = ()=>{
    isOpen?dispatch({type : 'open'}):dispatch({type : 'close'})
  }
  // useMemo, useCallback // 렌더링 최소화
  // return되는 jsx문에서 연산 최소화
  return (
    <div className={title==='Done!!'&&isOpen?"disableed-article-container":"article-container"}>
      <div className={isDark? "card-container":'white-card-container'}>
      <h2 className={isDark? "article-title":'white-article-title'}>{title}</h2>
        {title==='Working...'?workingArray.filter((el) => el.idDone === true).map((el, i) => {
          return <ToDoCard key={`dolist +${i}`} el={el} />
        }): workingArray.filter((el) => el.idDone === false).map((el, i) => {
          return <ToDoCard key={`donelist +${i}`} el={el} />
        })}
      {title==='Working...'?<button className='doneBtn' onClick={onClickHandler}>완료한 일 확인</button>:<></>}
      </div>
    </div>
  )
}
export default Article