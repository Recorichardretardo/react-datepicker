import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import setHours from "date-fns/setMinutes";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css";
import '../../Datepicker/index.scss';
//Custom date format

 class Datepicker extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      startDate:  setHours(setMinutes(new Date(), 30), 17)
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
      />
</div>
     </>);
  }
}

export default  Datepicker;

