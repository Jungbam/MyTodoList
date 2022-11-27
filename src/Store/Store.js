import { createStore } from "redux";

const reducer = (current, action)=>{
  if(current === undefined){
    return{
      isDark : true,
      isOpen : true
    }
  }
  switch(action.type){
    case 'dark':
      return {...current, 'isDark':true}
    case 'white':
      return {...current, 'isDark':false}
    case 'open' :
      return{...current, 'isOpen' : false}
    case 'close' :
      return{...current, 'isOpen' : true}
    default :
      return {...current}
  }
}

export const Store = createStore(reducer)