import React, { Component } from 'react';
import exportFromJSON from 'export-from-json'


const stockData = [
    {
        Symbol: "AAPL",
        Company: "Apple Inc.",
        Price: "132.54"
    },
    {
        Symbol: "INTC",
        Company: "Intel Corporation",
        Price: "33.45"
    },
    {
        Symbol: "GOOG",
        Company: "Google Inc",
        Price: "554.52"
    },
];

 class Example1 extends Component {
    constructor() {
        super();
        this.state = {
          name: 'React',
          value:"sample"
        };
      }

      componentDidMount() {
        
        }

        inputChange = ({target:{name,value}}) => {
            this.setState({
                [name]:value
            })
        }  

        downloadCSV = (e,dataDownloadType) => {
            const {value} = this.state;
            var data, filename, link;
            var csv = this.convertArrayOfObjectsToCSV({data: stockData});
            if (csv === null) return;
            filename = value || 'export.csv';
            if (!csv.match(/^data:text\/csv/i)) {
                csv = 'data:text/csv;charset=utf-8,' + csv;
            }
            data = encodeURI(csv);



            

        }
  render() {

    return (<>
    <label>file name: 
        <input id="fileName" 
               value={this.state.value} 
               onChange={this.inputChange}
               name="value" 
               placeholder="file name"/>
    </label>


<button onClick={(e) => this.downloadCSV(e,"csv")}>download plain text file</button>


        </>);
  }
}


export default Example1;