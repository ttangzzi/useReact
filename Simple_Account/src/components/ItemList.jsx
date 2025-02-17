import "./ItemList.css"
import { useNavigate } from "react-router-dom";

const ItemList = () => {
  const nav = useNavigate();
  const onEditButton = () => {
    nav('/edit');
  }
  return (
    <div className="ItemList">
      <div className="icon_section">
        <div className="icon">🍔</div>
        <div className="iconName">간식</div>
      </div>
      <div className="calc_section">-20,000</div>
      <div className="button_section">
        <button onClick={onEditButton}>수정</button>
        <button>삭제</button>
      </div>
    </div>
  )
}

export default ItemList;