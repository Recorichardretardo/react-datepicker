import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import subDays from "date-fns/subDays";
import addDays from "date-fns/addDays";
import '../../Datepicker/index.scss';
//Highlight dates with custom class names and ranges



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

    const highlightWithRanges = [
        {
          "react-datepicker__day--highlighted-custom-1": [
            subDays(new Date(), 4),
            subDays(new Date(), 3),
            subDays(new Date(), 2),
            subDays(new Date(), 1)
          ]
        },
        {
          "react-datepicker__day--highlighted-custom-2": [
            addDays(new Date(), 1),
            addDays(new Date(), 2),
            addDays(new Date(), 3),
            addDays(new Date(), 4)
          ]
        }
      ];

      
    return (<>
    <div className="date-picker-class">
     <DatePicker
    
        showPopperArrow={false}
        selected={this.state.startDate}
        onChange={this.handleChange}
        highlightDates={highlightWithRanges}
        placeholderText="This highlight two ranges with custom classes"
      />
</div>
     </>);
  }
}

export default  Datepicker;

