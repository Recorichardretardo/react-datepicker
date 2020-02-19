import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import getDate from "date-fns/getDate";
import '../../Datepicker/index.scss';
//Custom time class name
/*
.random {
    color: #ff0000;

}

*/


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
        showPopperArrow={false}
        selected={this.state.startDate}
        onChange={this.handleChange}
        showTimeSelect
        timeClassName={handleColor}
      />
</div>
     </>);
  }
}

export default  Datepicker;

