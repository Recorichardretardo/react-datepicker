import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import getDate from "date-fns/getDate";
import '../../Datepicker/index.scss';
//Custom calendar class name
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
    return (<>
    <div className="date-picker-class">
     <DatePicker
        showPopperArrow={false}
        selected={this.state.startDate}
        onChange={this.handleChange}
        dateFormat="yyyy/MM/dd"
        dayClassName={date =>
            getDate(date) < Math.random() * 31 ? "random" : undefined
          }
      />
</div>
     </>);
  }
}

export default  Datepicker;

