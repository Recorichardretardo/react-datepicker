import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import setHours from "date-fns/setMinutes";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css";
import '../../Datepicker/index.scss';
//Inject Specific Times

 class Datepicker extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      startDate: setHours(setMinutes(new Date(), 30), 16)
    };
  }
  componentDidMount() {
   
  }

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  render() {
    return (<>
    <div className="date-picker-class">
     <DatePicker
        showPopperArrow={false}
        selected={this.state.startDate}
        onChange={this.handleChange}
        showTimeSelect
        timeFormat="HH:mm"
      injectTimes={[
        setHours(setMinutes(new Date(), 1), 0),
        setHours(setMinutes(new Date(), 5), 12),
        setHours(setMinutes(new Date(), 59), 23)
      ]}
      dateFormat="MMMM d, yyyy h:mm aa"
      />
</div>
     </>);
  }
}

export default  Datepicker;

