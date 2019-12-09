import React, { Component } from 'react';
import DonutChart from "react-svg-donut";
import { render } from "react-dom";
import {PieChart} from 'react-easy-chart';
class ClaimsPieChart extends Component {
    constructor() {
        super();
        this.state = {};
    }
  
    render() {      
       
        return (
            <div>
            <div>
              <PieChart
              size={300}
              labels
                data={[
                  { key: 'Approved Claims', value: 100, color: '#aaac84' },
                  { key: 'Pending Claims ', value: 200, color: '#dce7c5' },
                  { key: 'Denial Claims', value: 50, color: '#e3a51a' }
                ]}
                clickHandler={
                    this.props.showClaimDetails()               
                }
              />
            </div>           
          </div>
        );
    }
}
export default ClaimsPieChart





