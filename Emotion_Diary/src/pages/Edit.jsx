import { replace, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { DiaryDispatchContext, DiaryStateContext } from "../App";

const Edit = () => {
  const parmas = useParams();
  const nav = useNavigate();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  const data = useContext(DiaryStateContext);
  const [currentDiaryItem, setCurrentDiaryItem] = useState();

  useEffect(() => {
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(parmas.id)
    );

    if (!currentDiaryItem) {
      // 경고창 발생
      window.alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true });
    }

    setCurrentDiaryItem(currentDiaryItem);
  }, [parmas.id]);

  const onClickDelete = () => {
    if (
      // 진짜로 삭제할것인지 묻는 팝업창
      window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요 !")
    ) {
      // 일기 삭제 로직
      onDelete(parmas.id);
      nav("/", { replace: true });
    }
  };

  const onSubmit = (input) => {
    if (window.confirm("일기를 정말 수정할까요?")) {
      // 인자 순서 잘 지키기
      onUpdate(
        parmas.id,
        input.createdDate.getTime(),
        input.emotionId,
        input.content
      );
      nav("/", { replace: true });
    }
  };

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
        rightChild={
          <Button onClick={onClickDelete} text="삭제하기" type={"NEGATIVE"} />
        }
      />
      <Editor initData={currentDiaryItem} onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;
