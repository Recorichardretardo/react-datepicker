import React, { PureComponent } from 'react';
import axios from 'axios';



export default class RechartBarGraph1 extends PureComponent {
    constructor() {
        super();
        this.state = {
          name: 'React',
          value:"sample"
        };
      }

      componentDidMount() {
        
        }

      


  render() {

    async function makeGetRequest() {
  
        let res = await axios.get('http://ergast.com/api/f1/2004/1/results.json');
      
        let data = res.data;
        console.log(data);
      }
      
    
      
    return (
        <input type="text" value={this.state.value} onChange={makeGetRequest} />
    );
  }
}
