import "./CreateList.css";
import { useContext, useState } from "react";
import { AcountActiveContext } from "../App";
import moment from "moment";
import { useNavigate } from "react-router-dom";

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
  // const [input, setInput] = useState({
  //   calc : "minus",
  //   method : "card",
  //   kategorie : "",
  //   amount : ""
  // })
  const [calc, setCalc] = useState("minus");
  const [method, setMethod] = useState("card");
  const [kategorie, setKategorie] = useState("");
  const [amount, setAmount] = useState("");
  const nav = useNavigate();
  const onCreate = useContext(AcountActiveContext);

  const onSubmit = (calc, kategorie, method, selectDate, amount) => {
    if (calc !== "" && kategorie !== "" && method !== "" && amount !== "") {
      onCreate(calc, kategorie, method, selectDate, amount);
      nav("/", { replace: true });
    } else {
      alert("모두 입력해주세요");
    }
  };

  const onClickCalc = (e) => {
    setCalc(e.currentTarget.value);
  };

  const onClickMethod = (e) => {
    setMethod(e.currentTarget.value);
  };

  const onClickKategorie = (e) => {
    setKategorie(e.currentTarget.value);
  };

  const formatAmount = (value) => {
    const number = value.replace(/[^0-9]/g, ""); // 숫자만 남기기
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, ","); // 세 자리마다 쉼표 추가
  };

  const onChangeAmount = (e) => {
    const formattedValue = formatAmount(e.currentTarget.value);
    setAmount(formattedValue);
  };

  const selectDate = moment(localStorage.getItem("date")).format("YYYY-MM-DD");

  return (
    <div className="CreateList">
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
      <button
        onClick={() => onSubmit(calc, kategorie, method, selectDate, amount)}
        className="submitButton"
      >
        추가 완료
      </button>
    </div>
  );
};

export default CreateList;
