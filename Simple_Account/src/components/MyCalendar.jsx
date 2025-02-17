import {useState} from "react"
import Calendar from 'react-calendar'
import "./MyCalendar.css"
import History from "../components/History";
import Total from "../components/Total";

const MyCalendar = () => {
  const [value, onChange] = useState(new Date());
  const [activeDate, setActiveDate] = useState(new Date());

  // 현재 보여지는 달력의 날짜를 구하기 위한 함수(이벤트)
  const onActiveStartDateChange = ({ activeStartDate }) => {
    setActiveDate(activeStartDate);
  };

  return (
    <>
      <div className='MyCalendar'>
        <Calendar
          locale='ko'
          value={value}
          onChange={onChange}
          onActiveStartDateChange={onActiveStartDateChange}
        />
      </div>
      <History selectDate={value}/>
      <Total showDate={activeDate}/>
      <div style={{clear:"both"}}></div>
    </>
  )
}

export default MyCalendar;