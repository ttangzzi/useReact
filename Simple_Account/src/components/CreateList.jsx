import "./CreateList.css";
import { useState } from "react";

const CreateList = () => {
  const mockDate = new Date().toISOString().split("T")[0];
  const [calc, setCalc] = useState("minus");
  const [method, setMethod] = useState("card");

  const onClickCalc = (e) => {
    setCalc(e.target.value);
  };

  const onClickMethod = (e) => {
    setMethod(e.target.value);
  };

  return (
    <div className="CreateList">
      <div className="title">가계부 추가하기</div>
      <div className="dateMenu">
        <span>날짜 : </span>
        {/* <input value={mockDate} type="date" /> */}
      </div>
      <div className="calcMenu">
        <button
          onClick={onClickCalc}
          value="minus"
          className={calc === "minus" ? "minusButton" : ""}
        >
          지출
        </button>
        <button
          onClick={onClickCalc}
          value="plus"
          className={calc === "plus" ? "plusButton" : ""}
        >
          수입
        </button>
      </div>
      <div className="methodMenu">
        <button
          onClick={onClickMethod}
          value="card"
          className={method === "card" ? "methodButton" : ""}
        >
          카드
        </button>
        <button
          onClick={onClickMethod}
          value="cash"
          className={method === "cash" ? "methodButton" : ""}
        >
          현금
        </button>
        <button
          onClick={onClickMethod}
          value="transfer"
          className={method === "transfer" ? "methodButton" : ""}
        >
          계좌이체
        </button>
      </div>
      <div className="kategorieMenu">
        <p>카테고리</p>
        <div className="kategorieMenu-list">
          <div>
            👕<span>의류</span>
          </div>
          <div>
            💊<span>의약</span>
          </div>
          <div>
            ⚽️<span>취미</span>
          </div>
          <div>
            🎁<span>선물</span>
          </div>
          <div>
            🍊<span>식료품</span>
          </div>
          <div>
            🙆🏻‍♂️<span>생활비</span>
          </div>
          <div>
            📔<span>공부</span>
          </div>
          <div>
            ❓<span>기타</span>
          </div>
        </div>
      </div>
      <div className="amountMenu">
        <span>금액 : </span>
        <input type="text" />
      </div>
      <button className="submitButton">추가 완료</button>
    </div>
  );
};

export default CreateList;
