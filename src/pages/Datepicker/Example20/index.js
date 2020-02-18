import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import addDays from "date-fns/addDays";
import '../../Datepicker/index.scss';
//Max date



 class Datepicker extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      startDate:  null
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
        maxDate={addDays(new Date(), 5)}
      placeholderText="Select a date before 5 days in the future"
      />
</div>
     </>);
  }
}

export default  Datepicker;

