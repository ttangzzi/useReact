import { useState, useCallback, useMemo, useEffect } from "react";
import Calendar from "react-calendar";
import "./MyCalendar.css";
import History from "../components/History";
import Total from "../components/Total";
import { useContext } from "react";
import { AcountStateContext } from "../App";

const MyCalendar = () => {
  const [value, onChange] = useState(() => {
    const storedDate = localStorage.getItem("date");
    return storedDate ? new Date(storedDate) : new Date(); // storedDate가 있으면 해당 날짜, 없으면 현재 날짜
  });
  localStorage.setItem("date", value);
  console.log(value);
  const [activeDate, setActiveDate] = useState(new Date());
  const data = useContext(AcountStateContext);
  // mark 배열을 useMemo로 계산
  // const mark = useMemo(() => {
  //   return data.map((item) => item.date); // 각 객체의 date 값을 추출하여 배열로 반환
  // }, [data]); // data가 변경될 때만 이 배열이 재계산

  // 현재 보여지는 달력의 날짜를 구하기 위한 함수(이벤트)
  const onActiveStartDateChange = ({ activeStartDate }) => {
    setActiveDate(activeStartDate);
  };

  // const getTileContent = useCallback(
  //   (date) => {
  //     if (mark.find((item) => item === moment(date).format("YYYY-MM-DD"))) {
  //       return <div>{}</div>;
  //     }
  //     return null;
  //   },
  //   [mark]
  // );

  return (
    <>
      <div className="MyCalendar">
        <Calendar
          locale="ko"
          value={value}
          formatDay={(locale, date) =>
            date.toLocaleString("en", { day: "numeric" })
          }
          onChange={onChange}
          onActiveStartDateChange={onActiveStartDateChange}
        />
      </div>
      <History selectDate={value} />
      <Total showDate={activeDate} />
      <div style={{ clear: "both" }}></div>
    </>
  );
};

export default MyCalendar;
