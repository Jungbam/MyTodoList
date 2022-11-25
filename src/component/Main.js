import React, { useEffect, useState } from 'react'
import Article from './Article'
const Main = () => {
  const [workingArray, setWorkingArray] = useState([])
  const [doArray, setDoArray] = useState([])
  const [doneArray, setDoneArray] = useState([])
  const [cnt, setCnt] = useState(0)

  // const [input, setInput] = useState({title: "", content: ""})

  // const handleInput = (e)=>{
  //   const {name, value} = e.target
  //   setInput((prev)=>{
  //     return {...prev, [name]:value }
  //   })
  // }
  useEffect(() => {
    setDoArray(workingArray.filter((el) => el.idDone === true))
    setDoneArray(workingArray.filter((el) => el.idDone === false))
  }, [workingArray])

  const onClickHander = (e) => {
    e.preventDefault()
    const titleInput = document.getElementById('title').value
    const contentInput = document.getElementById('content').value
    const doc = {
      id: cnt,
      title: titleInput,
      content: contentInput,
      idDone: true,
    }
    setCnt(cnt + 1)
    setWorkingArray([...workingArray, doc])
  }

  const deleteHandler = (e) => {
    e.preventDefault()
    const id = e.target.parentNode.parentNode.id
    const clone = workingArray.filter((el) => {
      return el.id !== +id
    })
    setWorkingArray([...clone])
  }

  const doneHandler = (e) => {
    e.preventDefault()
    const id = e.target.parentNode.parentNode.id
    console.log(id)
    const select = workingArray.filter((el) => {
      return el.id === +id
    })
    const selectedDone = select[0]['idDone']
    select[0]['idDone'] = !selectedDone
    const clone = workingArray.filter((el) => {
      return el.id !== +id
    })
    setWorkingArray([...clone, ...select])
  }

  return (
    <main>
      <section className="mainDiv">
        <form>
          <label htmlFor="title">제목</label>
          <input type="text" id="title"></input>
          <label htmlFor="content">내용</label>
          <input type="text" id="conten t"></input>
          <button type="button" onClick={onClickHander}>
            추가하기
          </button>
        </form>
      </section>
      <Article
        title="Working..."
        array={doArray}
        deleteHandler={deleteHandler}
        doneHandler={doneHandler}
      />
      <Article
        title="Done!!"
        array={doneArray}
        deleteHandler={deleteHandler}
        doneHandler={doneHandler}
      />
    </main>
  )
}
export default Main
