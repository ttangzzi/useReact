import { useState } from 'react';
import Calendar from 'react-calendar'
import moment from 'moment'
import "./Cal.css"

const Cal = () => {
  return (
    <div>
      <Calendar
        locale='ko'
        formatDay={(locale, date) => moment(date).format('D')}
        />
    </div>
  );
}

export default Cal