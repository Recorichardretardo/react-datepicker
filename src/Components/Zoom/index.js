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
    this.setState({ scale: this.state.scale + 0.4 });
 }
 
 zoomOut = () => {
   this.setState({ scale: this.state.scale / 2 });
 }






  render() {
    return (
      <>
            <div className="container">
                <div
                    className="bg-image-wrapper"
                    style={{ 'transform': `scale(${this.state.scale})` }}
                />
                <div className="content">
                    <button onClick={this.zoomIn}>Zoom in</button>
                    <button onClick={this.zoomOut}>Zoom out</button>
                </div>
            </div>

      </>
    );
  }
}


