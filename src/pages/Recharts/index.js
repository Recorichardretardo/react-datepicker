import React, { Component } from 'react';
import {
    ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
    LabelList ,Cell,ErrorBar,Brush,ReferenceLine
} from 'recharts';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import './index.scss';

const colors = scaleOrdinal(schemeCategory10).range();

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
    {name: 'Page G11', uv: 3490, pv: 43500, amt: 2100},

    

    

];

  
 class Recharts extends Component {
  

  render() {
      
    return (
        <div  id="container" class="chartAreaWrapper">
      <ResponsiveContainer height={data.length * 50 + 10} width="100%">
      <BarChart layout="vertical" data={data}   width={900} 
            height={260} 

            margin={{top: 0, right: 40, left: 40, bottom: 20}}
              barCategoryGap="20%" barGap={2}
              maxBarSize={10}
              >


                  
            <XAxis type="number"  domain={['auto', 'auto']} 
              axisLine={false}
              padding={{ left: 20, right: 100 }}
              stroke='#a0a0a0'
              ticks={[900, 3000, 5000, 6000,7000,8000, 98050]}
              strokeWidth={0.5}/>
            <YAxis height="100" dataKey="name" interval={0} allowDataOverflow={true} type="category"
             fontFamily="sans-serif" reversed 
             />

                            
            <CartesianGrid  horizontal={false} vertical={false}
                        stroke='#a0a0a0'
                        strokeWidth={0.5}/>
         <Tooltip/>
         <Legend />
         <Bar barSize ={30}  animationDuration={1000} isAnimationActive={false}   dataKey="pv" fill="#8884d8" 
         label={{position: 'right', backgroundColor: '#fff'}} 
         radius={[2, 2, 2, 2]} />
         <Brush dataKey="name" height={30} />
         <ReferenceLine type="horizontal" value={0} stroke="#666" />
          <LabelList fill="#000" angle={-45} />
          {
                data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                ))
              }
              <ErrorBar dataKey="uvError" />
        </BarChart> 
      </ResponsiveContainer>
      </div>
    );
  }
}

export default Recharts;