import "./History.css"
import ItemList from "./ItemList";

const History = ({selectDate}) => {
  return (
    <div className="History">
      <div className="date">{selectDate.toLocaleDateString()}</div>
      <ItemList />
      <button className="createdButton">+</button>
    </div>
  )
}

export default History;