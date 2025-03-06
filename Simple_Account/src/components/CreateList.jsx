import "./CreateList.css";
import { useState } from "react";
import moment from "moment";

const kateData = [
  {
    kate_id: 0,
    icon: "🍎",
    name: "식비",
  },
  {
    kate_id: 1,
    icon: "🚗",
    name: "교통비",
  },
];

const CreateList = () => {
  const mockDate = new Date().toISOString().split("T")[0];
  const [calc, setCalc] = useState("minus");
  const [method, setMethod] = useState("card");
  const [kategorie, setKategorie] = useState("");
  const [amount, setAmount] = useState("");

  const onClickCalc = (e) => {
    setCalc(e.target.value);
  };

  const onClickMethod = (e) => {
    setMethod(e.target.value);
  };

  const onClickKategorie = (e) => {
    setKategorie(e.currentTarget.value);
  };

  const formatAmount = (value) => {
    const number = value.replace(/[^0-9]/g, ""); // 숫자만 남기기
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, ","); // 세 자리마다 쉼표 추가
  };

  const onChangeAmount = (e) => {
    const formattedValue = formatAmount(e.target.value);
    setAmount(formattedValue);
  };

  const selectDate = moment(localStorage.getItem("date")).format(
    "YYYY년 MM월 DD일"
  );

  return (
    <div className="CreateList">
      <div className="title">가계부 추가하기</div>
      <div className="dateMenu">
        <span>날짜 : {selectDate}</span>
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
          {kateData.map((item) => (
            <button
              onClick={onClickKategorie}
              key={item.kate_id}
              value={item.name}
              className={kategorie === item.name ? "kategorieButton" : ""}
            >
              <div>{item.icon}</div>
              <div>{item.name}</div>
            </button>
          ))}
        </div>
      </div>
      <div className="amountMenu">
        <span>금액 : </span>
        <input onChange={onChangeAmount} value={amount} type="text" />
      </div>
      <button className="submitButton">추가 완료</button>
    </div>
  );
};

export default CreateList;
