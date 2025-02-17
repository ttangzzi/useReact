import {useState} from "react"
import Calendar from 'react-calendar'
import "./MyCalendar.css"
import History from "../components/History";

const MyCalendar = () => {
  const [value, onChange] = useState(new Date());
  return (
    <>
      <div className='MyCalendar'>
        <Calendar
          locale='ko'
          value={value}
          onChange={onChange}
        />
      </div>
      <History selectDate={value}/>
    </>
  )
}

export default MyCalendar;