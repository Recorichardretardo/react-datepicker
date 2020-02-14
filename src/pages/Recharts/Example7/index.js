import React, { Component } from 'react';
import {
    ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import '../../Recharts/index.scss';

const data = [
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 98050, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 39508, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 48500, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 38500, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 43500, amt: 2100},
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 98050, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 39508, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 48500, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 38500, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 43500, amt: 2100},
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 98050, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 39508, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 48500, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 38500, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 43500, amt: 2100},
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 98050, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 39508, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 48500, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 38500, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 43500, amt: 2100},
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 98050, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 39508, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 48500, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 38500, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 43500, amt: 2100},
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 98050, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 39508, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 48500, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 38500, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 43500, amt: 2100},
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 98050, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 39508, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 48500, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 38500, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 43500, amt: 2100},
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 98050, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 39508, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 48500, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 38500, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 43500, amt: 2100},
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 98050, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 39508, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 48500, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 38500, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 43500, amt: 2100},
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 98050, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 39508, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 48500, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 38500, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 43500, amt: 2100},
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 98050, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 39508, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 48500, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 38500, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 43500, amt: 2100},
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 98050, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 39508, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 48500, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 38500, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 43500, amt: 2100},
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 98050, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 39508, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 48500, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 38500, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 43500, amt: 2100},
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 98050, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 39508, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 48500, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 38500, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 43500, amt: 2100},

    

    

];

  
 class Recharts extends Component {
  

  render() {
      
    return (
        <div  id="container" class="chartAreaWrapper">
      <ResponsiveContainer height={data.length * 50 + 10} width="100%">
      <BarChart layout="vertical" data={data}   width={900} 
            height={260} 

              margin={{top: 5, right: 30, left: 20, bottom: 5}}
              barCategoryGap="20%" barGap={2}
              maxBarSize={10}
              >


                  
            <XAxis type="number"  domain={['auto', 'auto']} 
              axisLine={false}
              stroke='#a0a0a0'
              ticks={[9, 98, 980, 1300,5000,9805, 98050]}
              strokeWidth={0.5}/>
            <YAxis height="100" dataKey="name" interval={0} allowDataOverflow={true} type="category"
             fontFamily="sans-serif"
             tickSize
             dy='25'/>

                            
            <CartesianGrid  horizontal={false}
                        stroke='#a0a0a0'
                        strokeWidth={0.5}/>
         <Tooltip/>
         <Legend />
         <Bar barSize ={30}    dataKey="pv" fill="#8884d8" 
         label={{position: 'right', backgroundColor: '#fff'}} 
         radius={5} />
        </BarChart> 
      </ResponsiveContainer>
      </div>
    );
  }
}

export default Recharts;