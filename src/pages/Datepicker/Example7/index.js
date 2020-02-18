import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import setHours from "date-fns/setMinutes";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css";
import '../../Datepicker/index.scss';
//Exclude Times

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
        excludeTimes={[
            setHours(setMinutes(new Date(), 0), 17),
            setHours(setMinutes(new Date(), 30), 18),
            setHours(setMinutes(new Date(), 30), 19),
            setHours(setMinutes(new Date(), 30), 17)
          ]}
          dateFormat="MMMM d, yyyy h:mm aa"
      />
</div>
     </>);
  }
}

export default  Datepicker;

