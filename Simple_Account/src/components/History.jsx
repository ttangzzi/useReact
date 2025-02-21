import "./History.css";
import ItemList from "./ItemList";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AcountStateContext } from "../App";

const dataFilter = (data, selectDate) => {
  return data.filter((item) =>
    new Date(selectDate).toLocaleDateString() ===
    new Date(item.date).toLocaleDateString()
      ? item.date
      : null
  );
};

const History = ({ selectDate }) => {
  const nav = useNavigate();
  const onCreatedButton = () => {
    nav("/new");
  };
  const data = useContext(AcountStateContext);
  const filterData = dataFilter(data, selectDate);

  return (
    <div className="History">
      <div className="date">{selectDate.toLocaleDateString()}</div>
      <div>
        {filterData.map((item) => (
          <ItemList key={item.id} {...item} />
        ))}
      </div>
      <button onClick={onCreatedButton} className="createdButton">
        +
      </button>
    </div>
  );
};

export default History;
