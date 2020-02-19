import React, { Component,useState } from 'react';
import DatePicker from "react-datepicker";
import setHours from "date-fns/setMinutes";
import setMinutes from "date-fns/setMinutes";

import "react-datepicker/dist/react-datepicker.css";
import '../../Datepicker/index.scss';
//Exclude Times

const DatepickerExample = () => {
    const [startDate, setStartDate] = useState(
        setHours(setMinutes(new Date(), 30), 16)
      );
      return (<>
      <div className="date-picker-class">
        <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      showTimeSelect
      includeTimes={[
        setHours(setMinutes(new Date(), 0), 17),
        setHours(setMinutes(new Date(), 30), 18),
        setHours(setMinutes(new Date(), 30), 19),
        setHours(setMinutes(new Date(), 30), 17)
      ]}
      dateFormat="MMMM d, yyyy h:mm aa"
    />
    </div>
      </>);
};

export default DatepickerExample;

