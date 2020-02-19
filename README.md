


https://date-fns.org/v2.0.0-alpha.18/docs/I18n

https://github.com/Hacker0x01/react-datepicker/blob/master/docs/datepicker.md

https://www.robinwieruch.de/react-function-component


const DatepickerExample = () => {
    const [startDate, setStartDate] = useState(new Date());
      return (<>
       <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
      </>);
};

export default DatepickerExample;



import '../../Datepicker/index.scss';


git remote set-url origin https://github.com/Recorichardretardo/react-datepicker.git
