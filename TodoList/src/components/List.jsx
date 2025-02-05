import "./List.css"
import TodoItem from "./TodoItem";
import { useState } from "react";

const List = ({todos, onUpdate, onDelete}) => {
  const [search, setSearch] = useState("");

  // input 값대로 search 값 적용
  const onChangeSearch = (e) => {
    setSearch(e.target.value)
  }

  const getFilteredData = () => {
    if(search === "") {
      return todos;
    }
    // todos 배열에 필터 메소드를 호출
    // 배열의 모든 item을 순회하면서 해당 연산의 값이 참이되는 것을 필터링
    // includes 메소드를 사용해 search값이 포함되어 있다면 참이 되도록 함
    // filter 내부 중괄호, return 생략 (es6 문법)
    // toLowerCase를 통해 모두 소문자로 바꿈 -> 대소문자 구분없이 검색되도록 하기 위함
    return todos.filter((todo)=>todo.content.toLowerCase().includes(search.toLowerCase()))
  }

  const FilteredTodos = getFilteredData();

  return (
    <div className="List">
      <h4>Todo List ✍️</h4>
      <input value={search} 
        onChange={onChangeSearch} 
        placeholder="검색어를 입력하세요" 
      />
      <div className="todos_wrapper">
        {
          FilteredTodos.map((todo) => {
            return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete}/>
          })
        }
      </div>
    </div>
  )
}

export default List;