import React, { Component } from 'react';
import PieChart from 'react-simple-pie-chart';
import DonutChart from "react-svg-donut";
import { render } from "react-dom";
//import Donut from "../lib/Donut";
class PieChart2 extends Component {
    constructor() {
        super();
        this.state = {};
    }
    onHover(item) {
        const { active } = this.state;
        if (active !== item)
            this.setState({
                active: item
            });
    }
    onClick(item) {
    }
    render() {
        const data = [
            { name: "COMPLETED SERVICE", title: "COMPLETED SERVICE", value: 1 },
            { name: "MISSING SERVICE", title: "MISSING SERVICE", value: 2 }
        ];
        const { active } = this.state;
        const props = {
            size: 250,
            onHover: this.onHover.bind(this),
            onClick:this.onClick.bind(this),
            title: '2018',
            active,
            data
        };
        return (
            <div>
                <DonutChart {...props} />
                <div className="chart-three">
                    {data.map((item, index) => (
                        <span
                            key={item.name}
                            onMouseEnter={() => this.onHover(index)}
                            onMouseLeave={() => this.onHover(-1)}
                            onClick={() => this.onClick(item)}
                           
                        >
                         {item.name}
                        </span>
                    ))}
                    <div className="active-guide"> Active :
            <span>  {active >= 0 ? data[active].name : "none"}</span></div>
                </div>
            </div>
        );
    }
}
export default PieChart2





