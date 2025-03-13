import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AcountStateContext, AcountActiveContext } from "../App";
import CreateList from "../components/CreateList";
import Header from "../components/Header";

const Edit = () => {
  const parmas = useParams();
  const nav = useNavigate();
  const data = useContext(AcountStateContext);

  const getCurrentAcountItem = () => {
    const currentAcountItem = data.find(
      (item) => String(item.id) === String(parmas.id)
    );

    if (!currentAcountItem) {
      window.alert("존재하지 않는 가계입니다.");
      nav("/", { replace: true });
    }
    return currentAcountItem;
  };

  const currentAcountItem = getCurrentAcountItem();
  return (
    <div>
      <Header text={"가계 수정하기"} />
      <CreateList initData={currentAcountItem} />
    </div>
  );
};

export default Edit;
