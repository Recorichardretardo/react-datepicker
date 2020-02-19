import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../../Datepicker/index.scss';
//Date Range


 class Datepicker extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      startDate:  new Date("2014/02/08"),
      endDate:new Date("2014/02/10")
    };
  }
  componentDidMount() {
   
  }

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  handleChangeEnd = date => {
    this.setState({
        endDate: date
    });
  };

  render() {

   

      
    return (<>
    <div className="date-picker-class">
     <DatePicker
         selected={this.state.startDate}
        showPopperArrow={false}
        onChange={this.handleChange}
        selectsStart
        startDate={this.state.startDate}
        endDate={this.state.endDate}
      />
       <DatePicker
    
    showPopperArrow={false}
    selected={this.state.endDate}
    onChange={this.handleChangeEnd}
    selectsEnd
    startDate={this.state.startDate}
    endDate={this.state.endDate}
    minDate={this.state.startDate}
  />
</div>
     </>);
  }
}

export default  Datepicker;

