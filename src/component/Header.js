import React, { useState } from 'react'
import { useDispatch} from 'react-redux'

const Header = () => {
  const dispatch = useDispatch()
  const onClickHandler = (e)=>{
    dispatch({type:e.target.value})
  }

  return (
    <header className="header-container">
      <div className="header-box">
        <h1>D-1-Bam's Todo</h1>
        <nav>
          <p>테마</p>
            <input type='radio' name='thema' value='dark' onClick={onClickHandler} />dark
            <input type='radio' name='thema' value='white' onClick={onClickHandler} />white
        </nav>
      </div>
    </header>
  )
}

export default Header
