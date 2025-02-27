import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom";
import { DiaryDispatchContext } from "../App";
import { useContext } from "react";

const New = () => {
  const { onCreate } = useContext(DiaryDispatchContext);
  const nav = useNavigate();
  const onSubmit = (input) => {
    onCreate(input.createdDate.getTime(), input.emotionId, input.content);
    // 뒤로가기 방지 : replace를 true로
    nav("/", { replace: true });
  };
  return (
    <div>
      <Header
        title={"새 일기 쓰기"}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;
