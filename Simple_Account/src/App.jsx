import './App.css'
import { useState, createContext } from 'react';
import Calendar from 'react-calendar'
import moment from 'moment'
import "./components/Cal.css"
import Total from './components/Total'
import Detail from './components/Detail'

export const DateContext = createContext();

function App() {
  const [value, onChange] = useState(new Date());

  // 날짜를 포맷팅하여 출력되도록 moment 사용
  const formattedDate = moment(value).format('YYYY년 MM월 DD일');

  return (
    <div className='App'>
      <Calendar
        locale='ko'
        formatDay={(locale, date) => moment(date).format('D')}
        onChange={onChange}
        value={value}
        />
      <DateContext.Provider value={formattedDate}>
        <Total/>
        <Detail/>
      </DateContext.Provider>
    </div>
  )
}
export default App