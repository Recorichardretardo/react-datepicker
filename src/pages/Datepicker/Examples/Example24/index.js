import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import addDays from "date-fns/addDays";
import '../../Datepicker/index.scss';
//Include dates



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
        includeDates={[new Date(), addDays(new Date(), 1)]}
        placeholderText="This only includes today and tomorrow"
      />
</div>
     </>);
  }
}

export default  Datepicker;

