import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import getDate from "date-fns/getDate";
import moment from 'moment';
import './index.scss';
//Clear datepicker input



 class Datepicker extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      startDate:  null,
      endDate:null,
      minDate:'01/09/2019',
      maxDate:'07/09/2019'
    };
  }
  componentDidMount() {
   
    //console.log("new date",new Date())
  }

  handleChange = date => {
    console.log("date", moment(date).format('DD-MM-YYYY'))

// moment(date).format('YYYY-MM-DD HH:MM:SS')


   
    this.setState({
      startDate: date
    });
  };

  endDateHandleChange = (date) => {
    console.log("date", moment(date).format('DD-MM-YYYY'))

    // moment(date).format('YYYY-MM-DD HH:MM:SS')
    
    
       
        this.setState({
          endDate: date
        });

  }

  render() {

    const renderDayContents = (day, date) => {
      const tooltipText = `Date: ${ moment(date).format('DD-MM-YYYY')}`;
      return <span title={tooltipText}>{getDate(date)}</span>;
    };

      
    return (<>
    <div className="date-picker-class">
     <DatePicker
      todayButton={`Date: ${ moment(new Date('09-01-2019')).format('DD-MM-YYYY')} to  ${ moment(new Date('09-07-2019')).format('DD-MM-YYYY')} `}
        dateFormat="dd-MM-yyyy"
        selected={this.state.startDate}
        utcOffset={0}
        minDate={new Date('09-01-2019')}
        maxDate={new Date('09-07-2019')}
       // selectsStart
        openToDate={new Date('09-01-2019')}
        onChange={this.handleChange}
        isClearable
        placeholderText="DD-MM-YYYY"
        renderDayContents={renderDayContents}
        showMonthDropdown
        useShortMonthInDropdown
        //disabledKeyboardNavigation
        tabIndex={1}
        popperClassName="some-custom-class"
        popperPlacement="top-end"
        popperModifiers={{
          offset: {
            enabled: true,
            offset: "5px, 10px"
          },
          preventOverflow: {
            enabled: true,
            escapeWithReference: false,
            boundariesElement: "viewport"
          }
        }}
      />
</div>
<div className="date-picker-class">
     <DatePicker
        dateFormat="dd-MM-yyyy"
        selected={this.state.endDate}
        utcOffset={0}
        minDate={new Date('09-01-2019')}
        maxDate={new Date('09-07-2019')}
       // openToDate={new Date('09-07-2019')}
       selectsEnd
        onChange={this.endDateHandleChange}
        isClearable
        placeholderText="DD-MM-YYYY"
      />
</div>
     </>);
  }
}

export default  Datepicker;

