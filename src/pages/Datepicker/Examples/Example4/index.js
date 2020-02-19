import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../../Datepicker/index.scss';
//Select Time

 class Datepicker extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      startDate: new Date()
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
        timeIntervals={15}
        timeCaption="time"
        //dateFormat="MMMM d, yyyy h:mm aa"
        dateFormat="dd-MM-yyyy h:mm aa"
      />
</div>
     </>);
  }
}

export default  Datepicker;

