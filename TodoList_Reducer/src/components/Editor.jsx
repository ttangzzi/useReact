import "./Editor.css"
import {useState, useRef} from "react";

const Editor = ({onCreate}) => {
  const [content, setContent] = useState("")
  const contentRef = useRef();

  // input에 적은 내용에 맞게 content 업데이트
  const onChangeContent = (e) => {
    setContent(e.target.value);
  }

  // 엔터 눌러도 추가되도록 하기 위한 이벤트
  const onKeydown = (e) => {
    // 키 값 13코드는 엔터
    if(e.keyCode === 13) {
      onSubmit();
    }
  }

  // 버튼 클릭 시 새로운 Todo 생성
  const onSubmit = () => {
    if(content === "") {
      // 공백이면 input을 focus 하도록 함 -> input ref 설정
      contentRef.current.focus();
      return;
    }
    onCreate(content)
    setContent("");
  }

  return (
    <div className="Editor">
      <input ref={contentRef} value={content} placeholder="새로운 Todo..." 
      onKeyDown={onKeydown}
      onChange={onChangeContent}/>
      <button onClick={onSubmit}>추가</button>
    </div>
  )
}

export default Editor;