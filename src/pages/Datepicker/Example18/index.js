import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import addDays from "date-fns/addDays";
import '../../Datepicker/index.scss';
//Specific date range



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
        minDate={new Date()}
        maxDate={addDays(new Date(), 5)}
        placeholderText="Select a date between today and 5 days in the future"
        onChange={this.handleChange}
       
      />
</div>
     </>);
  }
}

export default  Datepicker;

