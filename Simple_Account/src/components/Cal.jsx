import { useState } from 'react';
import Calendar from 'react-calendar'
import moment from 'moment'
import "./Cal.css"

const Cal = () => {
  return (
    <>
      <Calendar
        locale='ko'
        formatDay={(locale, date) => moment(date).format('D')}
        />
    </>
  );
}

export default Cal