import "./CreateList.css"

const CreateList = () => {
  const mockDate = new Date().toISOString().split("T")[0];
  return (
    <div className="CreateList">
      <div className="title">가계부 추가하기</div>
      <div className="calcMenu">
        <button className="minusButton">지출</button>
        <button className="plusButton">수입</button>
      </div>
      <div className="methodMenu">
        <button>카드</button>
        <button>현금</button>
        <button>계좌이체</button>
      </div>
      <div className="dateMenu">
        <span>날짜 : </span>
        <input value={mockDate} type="date" />
      </div>
      <div className="kategorieMenu">
        <p>카테고리</p>
        <div className="kategorieMenu-list">
          <div>👕<span>의류</span></div>
          <div>💊<span>의약</span></div>
          <div>⚽️<span>취미</span></div>
          <div>🎁<span>선물</span></div>
          <div>🍊<span>식료품</span></div>
          <div>🙆🏻‍♂️<span>생활비</span></div>
          <div>📔<span>공부</span></div>
          <div>❓<span>기타</span></div>
        </div>
      </div>
      <div className="amountMenu">
        <span>금액 : </span>
        <input type="text" />
      </div>
      <button className="submitButton">추가 완료</button>
    </div>
  )
}

export default CreateList;