import "./ItemList.css"

const ItemList = () => {
  return (
    <div className="ItemList">
      <div className="icon_section">
        <div className="icon">🍔</div>
        <div className="iconName">간식</div>
      </div>
      <div className="calc_section">-20,000</div>
      <div className="button_section">
        <button >수정</button>
        <button>삭제</button>
      </div>
    </div>
  )
}

export default ItemList;