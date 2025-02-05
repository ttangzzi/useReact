import { useState, useRef } from 'react'
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

function App() {
  // 여러가지 todo를 보관하는 배열 state
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  // 새로운 todo를 생성
  const onCreate = (content) => {
    const newTodo = {
      id : idRef.current++,
      isDone : false,
      content : content,
      date : new Date().getTime(),
    }
    setTodos([newTodo, ...todos])
  }

  const onUpdate = (targetId) => {
    // todos State의 값들 중
    // Target Id와 일치하는 id를 갖는 todo item의 isDone 변경

    // 인수 : todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 바꾼 새로운 배열
    setTodos(todos.map((todo)=>
      todo.id === targetId ? {...todo, isDone : !todo.isDone}
      : todo))
  }

  const onDelete = (targetId) => {
    // 인수 : todos 배열에서 targetId와 일치하는 id 갖는 요소만 삭제한 새로운 배열
    setTodos(todos.filter((todo)=>todo.id !== targetId)); // 삭제대상 아닌 item만 필터링
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
