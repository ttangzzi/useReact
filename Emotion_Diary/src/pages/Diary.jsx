import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import useDiary from "../Hooks/useDiary";
import { getStringedDate } from "../util/get-stringed-date";

const Diary = () => {
  const nav = useNavigate();
  const params = useParams();

  const currentDiaryItem = useDiary(params.id);

  if (!currentDiaryItem) {
    return <div>데이터 로딩중...!</div>;
  }

  const { createdDate, emotionId, content } = currentDiaryItem;

  return (
    <div>
      <Header
        title={`${getStringedDate(new Date(createdDate))} 기록`}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로가기"} />}
        rightChild={
          <Button onClick={() => nav(`/edit/${params.id}`)} text={"수정하기"} />
        }
      />
      <Viewer emotionId={emotionId} content={content} />
    </div>
  );
};

export default Diary;
