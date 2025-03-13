import "./ItemList.css";
import { useNavigate } from "react-router-dom";

const iconMapping = (kategorie) => {
  switch (kategorie) {
    case "식비":
      return "🍎";
    case "교통비":
      return "🚗";
    case "게임":
      return "🎮";
    case "학업":
      return "📖";
    default:
  }
};

const amountUnit = (amount) =>
  amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const ItemList = ({ id, calc, kategorie, method, date, amount }) => {
  const nav = useNavigate();
  const onEditButton = () => {
    nav(`edit/${id}`);
  };
  return (
    <div className={`ItemList ItemList_${calc}`}>
      <div className="icon_section">
        <div className="icon">{iconMapping(kategorie)}</div>
        <div className="iconName">{kategorie}</div>
      </div>
      <div className="calc_section">
        {calc === "minus" ? `-${amountUnit(amount)}` : `+${amountUnit(amount)}`}
      </div>
      <div className="button_section">
        <button onClick={onEditButton}>수정</button>
        <button>삭제</button>
      </div>
    </div>
  );
};

export default ItemList;
