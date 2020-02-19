import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import getDate from "date-fns/getDate";
import '../../Datepicker/index.scss';
//Today button



 class Datepicker extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      startDate:  new Date()
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

    let handleColor = time => {
        return time.getHours() > 12 ? "text-success" : "text-error";
      };

      
    return (<>
    <div className="date-picker-class">
     <DatePicker
     todayButton="Vandaag"
        showPopperArrow={false}
        selected={this.state.startDate}
        onChange={this.handleChange}
       
      />
</div>
     </>);
  }
}

export default  Datepicker;

