import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../../Datepicker/index.scss';
//Placeholder text



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
        placeholderText="Click to select a date"
        onChange={this.handleChange}
       
      />
</div>
     </>);
  }
}

export default  Datepicker;

