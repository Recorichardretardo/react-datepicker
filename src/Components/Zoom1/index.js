import React, { Component } from 'react';
import './index.scss';
import jsplumb from 'jsplumb';
import $ from 'jquery';
import _ from 'lodash';

export default class Zoom extends Component {
    constructor() {
        super();
        this.state = {
          name: 'React',
          scale: 1,
        };
      }
    
  componentDidMount() {
   
   
  }

  zoomIn = () => {
    this.setState({ scale: this.state.scale * 2 });
 }
 
 zoomOut = () => {
   this.setState({ scale: this.state.scale / 2 });
 }
  zoomin = () => { 
    var GFG = document.getElementById("geeks"); 
    var currWidth = GFG.clientWidth; 
    GFG.style.width = (currWidth + 100) + "px"; 
} 

 zoomout = () => { 
    var GFG = document.getElementById("geeks"); 
    var currWidth = GFG.clientWidth; 
    GFG.style.width = (currWidth - 100) + "px"; 
} 





  render() {
    return (
      <>
           <h3> JavaScript | Increase and Decrease image size </h3>
           <button type="button" onClick={this.zoomin}> 
		Zoom-In 
	</button> 
	
	<button type="button" onClick={this.zoomout}> 
		Zoom-Out 
	</button> 
    <hr/>
    <div className="box"> 
		
		<img src= 
"https://media.geeksforgeeks.org/wp-content/uploads/20190912174307/qwe1.png"
			id="geeks" GFG="250" alt="Geeksforgeeks"/> 
	</div> 

      </>
    );
  }
}


