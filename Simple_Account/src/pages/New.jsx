import Header from "../components/Header";
import CreateList from "../components/CreateList";

const New = () => {
  return (
    <div className="New">
      <Header text={"가계 추가하기"} />
      <CreateList />
    </div>
  );
};

export default New;
