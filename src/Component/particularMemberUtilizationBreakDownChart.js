import React, { Component } from 'react';
import PieChart from 'react-simple-pie-chart';
import DonutChart from "react-svg-donut";
import { render } from "react-dom";
import $ from 'jquery'
class ParticularMemberUtilizationBreakDownChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData:[],
            title:''
        };
    }
    componentDidMount() {
        var chart = $('.donut-chart');
        if (chart) {
            $('.donut-chart-text-value').addClass('hideContent')
        }

        this.setState({
            chartData:this.props.chartData
        })
    }
    componentWillReceiveProps(nextProps){debugger;
        if(nextProps.chartData)
        {
            this.setState({chartData:nextProps.chartData})
        }
     }


    render() { 
    const data = [
        { name: "ER", value: parseInt(this.state.chartData.er_cost_12m) },
        { name: "Inpatients", value: parseInt(this.state.chartData.inpatient_cost_12m) },
        { name: "RX", value: parseInt(this.state.chartData.rx_cost_12m) },
        { name: "Outpatient", value: parseInt(this.state.chartData.outpatient_cost_12m) },
        { name: "Professional", value: parseInt(this.state.chartData.professional_cost_12m) },
        { name: "Imaging", value: parseInt(this.state.chartData.imaging_cost_12m)},
        { name: "Ancillary", value:parseInt(this.state.chartData.ancillary_cost_12m) }
        
    ]
    return (
        <div className="col-md-4">
        <div className="member_name_details_title"><h2>Utilization Breakdown </h2></div>
        <div className="pie-chart-main-div bg_white">
            <div className="pie-chart-div">
                <DonutChart size={200} title={this.state.title} data={data} innerRaduis={0.5} outerRadius={0.9} activeOffset={0.8}
                    onHover={(i) => {
                        if (i >= 0) {
                            this.setState({ title:'$'+ String(data[i].value) })
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
                       // onClick={() => this.onClick(item)}
                        className="chart-three"
                    >
                        <span>{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
}
}
export default ParticularMemberUtilizationBreakDownChart





