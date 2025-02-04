import { useState, useEffect } from 'react'
import './App.css'
import Message from './components/Message'

function App() {
  const [title, setTitle] = useState("");
  const [context, setContext] = useState("");
  const [post, setPost] = useState([]);

  const posting = () => {
    setPost([...post, title]);
    setTitle("");
    setContext("");
  }
  
  useEffect(()=>{
    console.log(post);
  },[post]);

  return (
    <>
      <div>
        <div>
          <h3>제목</h3>
          <input value={title} placeholder="제목" type="text" 
          onChange={(e)=>{ 
            setTitle(e.target.value);
          }} />
        </div>
        <div>
          <h3>내용</h3>
          <textarea 
          value={context}
          rows="10"
          cols="30"
          placeholder='내용을 입력하세요.'
          onChange={(e)=>{ 
            setContext(e.target.value);
          }} />
        </div>
        <button onClick={posting}>작성</button>
      </div>
      <Message post={post}/>
    </>
  )
}

export default App
