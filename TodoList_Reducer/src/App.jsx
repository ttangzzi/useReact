import { useState, useRef, useReducer } from 'react'
import './App.css'
import Editor from './components/Editor'
import Header from './components/Header'
import List from './components/List'

const mockData = [
  {
  id : 0, // 각각 구분하는 id
  isDone : false, // 체크박스 체크유무
  content : "React 공부하기", // 내용
  date : new Date().getTime(), // 날짜
  },
  {
    id : 1, // 각각 구분하는 id
    isDone : false, // 체크박스 체크유무
    content : "빨래하기", // 내용
    date : new Date().getTime(), // 날짜
  },
  {
    id : 2, // 각각 구분하는 id
    isDone : false, // 체크박스 체크유무
    content : "노래 연습하기", // 내용
    date : new Date().getTime(), // 날짜
  },
]

function reducer(state, action) {
  switch(action.type) {
    case "CREATE": 
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) => 
        item.id === action.targetId
        ? {...item, isDone : !item.isDone}
        : item)
    case "DELETE":
      return state.filter((item) => 
        item.id !== action.targetId)
    default:
      return state;
  }

}

function App() {
  // 여러가지 todo를 보관하는 배열 state
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // 새로운 todo를 생성
  const onCreate = (content) => {
    dispatch({
      type : "CREATE",
      data : {
        id : idRef.current++,
        isDone : false,
        content : content,
        date : new Date().getTime(),
      }
    })
  }

  const onUpdate = (targetId) => {
    dispatch({
      type : "UPDATE",
      targetId : targetId
    })
  }

  const onDelete = (targetId) => {
    dispatch({
      type : "DELETE",
      targetId : targetId,
    })
  }

  return (
    <>
      <div className='App'>
        <Header/>
        <Editor onCreate={onCreate}/>
        <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
      </div>
      
    </>
  )
}

export default App
