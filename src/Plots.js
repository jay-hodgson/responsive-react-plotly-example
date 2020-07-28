import React, { Component } from "react";
import Plotly from 'plotly.js-basic-dist'
import createPlotlyComponent from 'react-plotly.js/factory'

const Plot = createPlotlyComponent(Plotly)

export default class Plots extends React.Component {

  render() {
    const data = [{
      values: [19, 26, 55, 20, 5, 9, 2, 7, 2, 16],
      labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
      type: 'pie'
    }];
    const layout = {
      title: 'A Responsive Plot',
      autosize: true
    };
    const config = { displayModeBar: false, responsive: true }
    const style = {width: '100%', maxHeight: '350px'}
    return (
      <div className='row'>
        <div className='col-sm-4'>
          <Plot
            data={data}
            layout={layout}
            config={config}
            style={style}
            useResizeHandler={true}
          ></Plot>
        </div>
        <div className='col-sm-4'>
          <Plot
            data={data}
            layout={layout}
            config={config}
            style={style}
            useResizeHandler={true}          
          ></Plot>
        </div>
        <div className='col-sm-4'>
          <Plot
            data={data}
            layout={layout}
            config={config}
            style={style}
            useResizeHandler={true}          
          ></Plot>
        </div>        
      </div>
    );
  }
}