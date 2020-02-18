import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import pt_BR from 'date-fns/locale/pt-BR';
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import '../../Datepicker/index.scss';
//Locale with time



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

    registerLocale('pt-BR', pt_BR)

      
    return (<>
    <div className="date-picker-class">
     <DatePicker
    
        showPopperArrow={false}
        selected={this.state.startDate}
        onChange={this.handleChange}
        locale="pt-BR"
      showTimeSelect
      timeFormat="p"
      timeIntervals={15}
      dateFormat="Pp"
      />
</div>
     </>);
  }
}

export default  Datepicker;

