import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import addMonths from "date-fns/addMonths";
import '../../Datepicker/index.scss';
//Date Range with disabled navigation shown



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
        minDate={new Date()}
      maxDate={addMonths(new Date(), 5)}
      showDisabledMonthNavigation
      />
</div>
     </>);
  }
}

export default  Datepicker;

