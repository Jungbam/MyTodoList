import { createStore } from "redux";

const reducer = (current, action)=>{
  if(current === undefined){
    return{
      isDark : false
    }
  }
  switch(action.type){
    case 'dark':
      return {...current, 'isDark':true}
    case 'white':
      return {...current, 'isDark':false}
    default :
      return {...current}
  }

}

export const Store = createStore(reducer)