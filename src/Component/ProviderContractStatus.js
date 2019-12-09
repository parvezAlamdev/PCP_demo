import React, { Component } from 'react';
import PieChart from 'react-simple-pie-chart';
import DonutChart from "react-svg-donut";
import { render } from "react-dom";
import $ from 'jquery'
class ProviderContractStatus extends Component {
    constructor() {
        super();
        this.state = {
            title: ''
        };

    }
    componentDidMount() {
        var chart = $('.donut-chart');
        if (chart) {
            $('.donut-chart-text-value').addClass('hideContent')
        }
    }

    render() {
        let title = 'title'
        const data = [
            { name: "Months Completed", value: 11 },
            { name: "Months Left in Contract", value: 1 }
        ]
        return (
            <div className="pie-chart-main-div">
                <div className="pie-chart-div">
                    <DonutChart  size={220} title={this.state.title} data={data} innerRaduis={0.5} outerRadius={0.9} activeOffset={0.8}
                       onHover={(i) => {
                        if (i >= 0) {
                            this.setState({ title:String(data[i].value) })
                        } else {
                            this.setState({ title: '' })
                        }
                    }
                    }                     
                    />
                </div>
                <div className="pie-chart-right-div">
                    {data.map((item, index) => (
                        <div
                            key={item.name}
                           // onMouseEnter={() => this.onHover(item)}
                            onClick={() => this.onClick(item)}
                            className="chart-three"
                        >
                            <span>{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
export default ProviderContractStatus





