import "./History.css"
import ItemList from "./ItemList";
import { useNavigate } from "react-router-dom";

const History = ({selectDate}) => {
  const nav = useNavigate();
  const onCreatedButton = () => {
    nav("/new");
  }
  return (
    <div className="History">
      <div className="date">{selectDate.toLocaleDateString()}</div>
      <ItemList />
      <button onClick={onCreatedButton} className="createdButton">+</button>
    </div>
  )
}

export default History;