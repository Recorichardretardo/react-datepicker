import React, { Component } from 'react';
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import DatePicker from "react-datepicker";
import es from 'date-fns/locale/es';
//https://date-fns.org/v2.0.0-alpha.18/docs/I18n
import "react-datepicker/dist/react-datepicker.css";
import '../../Datepicker/index.scss';

 class Datepicker extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      startDate: new Date()
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
    registerLocale('es', es)
    return (<>
    <div className="date-picker-class">
    <DatePicker
  locale="es"
/>
</div>
     </>);
  }
}

export default  Datepicker;

