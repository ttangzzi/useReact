import './App.css'
import {Routes, Route} from "react-router-dom";
import { useState, useReducer, useRef } from 'react';
import Home from './pages/home'
import Edit from './pages/edit'
import New from './pages/new'
import Detail from './pages/detail'

// 임시 데이터 (객체 형태)
const mockData = [
  {
    id : 1,
    calc : "minus", // 지출
    kategorie : "food",
    method : "cash",
    date : new Date().getTime(),
    amount : 10000,
  },
  {
    id : 2,
    calc : "plus", // 수입
    kategorie : "food",
    method : "cash",
    date : new Date().getTime(),
    amount : 10000,
  }
]

function reducer(state, action) {
  switch(action.type) {
    case "CREATE":
      return [...state, action.data] // 나중에 온 게 뒤에 오도록
  }
}

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // 새 가계 추가
  const onCreate = (calc, kategorie, method, date, amount) => {
    dispatch({
      type : "CREATE",
      data : {
        id : idRef.current++,
        calc,
        kategorie,
        method,
        date,
        amount
      }
    })
  }
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/new' element={<New/>}/>
        <Route path='/edit' element={<Edit/>}/>
        <Route path='detail' element={<Detail/>}/>
      </Routes>
    </>
  )
}
export default App