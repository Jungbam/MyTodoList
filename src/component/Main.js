import React, { useEffect, useState } from 'react'
import Article from './Article'
import { HandlerContext } from '../context/HandlerContext'
import { v4 as uuidv4 } from 'uuid' 

const Main = () => {
  const [workingArray, setWorkingArray] = useState([])

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('todolist'))) {
      const array = JSON.parse(localStorage.getItem('todolist'))
      setWorkingArray([...array])
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('todolist', JSON.stringify(workingArray))
  }, [workingArray])

  const onClickHander = (e) => {
    e.preventDefault()
    const titleInput = document.getElementById('title').value
    const contentInput = document.getElementById('content').value
    if (!titleInput.length || !contentInput.length) {
      alert('값을 입력하세요.')
      return
    }
    const doc = {
      id: uuidv4(),
      title: titleInput,
      content: contentInput,
      idDone: true,
    }
    setWorkingArray([...workingArray, doc])
    document.getElementById('title').value = ''
    document.getElementById('content').value = ''
  }

  const deleteHandler = (e) => {
    e.preventDefault()
    const id = e.target.parentNode.parentNode.id
    const clone = workingArray.filter((el) => {
      return el.id !== id
    })
    setWorkingArray([...clone])
  }

  const doneHandler = (e) => {
    e.preventDefault()
    const id = e.target.parentNode.parentNode.id
    const select = workingArray.filter((el) => {
      return el.id === id
    })
    const selectedDone = select[0]['idDone']
    select[0]['idDone'] = !selectedDone
    const clone = workingArray.filter((el) => {
      return el.id !== id
    })
    setWorkingArray([...clone, ...select])
  }
  const onFormatHandler = (e) => {
    e.preventDefault()
    localStorage.removeItem('todolist')
    setWorkingArray([])
  }
  return (
    <HandlerContext.Provider value={{ workingArray, doneHandler, deleteHandler }}>
      <main className="mainDiv">
        <section className="input-section">
          <form action="#" method="#" className="form-continer">
            <div className="input-box">
              <label htmlFor="title">제목</label>
              <input type="text" id="title" required></input>
              <label htmlFor="content">내용</label>
              <input type="text" id="content" required></input>
            </div>
            <button type="submit" onClick={onClickHander}>
              추가하기
            </button>
            <button type="submit" onClick={onFormatHandler}>
              초기화
            </button>
          </form>
        </section>
        <Article title="Working..." />
        <Article title="Done!!"   />
      </main>
    </HandlerContext.Provider>
  )
}
export default Main
