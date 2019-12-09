import React, { Component } from 'react';
import PieChart from 'react-simple-pie-chart';
import DonutChart from "react-svg-donut";
import { render } from "react-dom";
import $ from 'jquery'
class Past12MonthsUtilizationChartComponent extends Component {
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

        // this.setState({
        //     chartData:this.props.chartData
        // })
    }
    // componentWillReceiveProps(nextProps){debugger;
    //     if(nextProps.chartData)
    //     {
    //         this.setState({chartData:nextProps.chartData})
    //     }
    //  }


    render() { 
    const data = [
        { name: "ER", value: 1 },
        { name: "Inpatients", value: 2},
        { name: "RX", value: 3},
        { name: "Outpatient", value: 4 },
        { name: "Professional", value:5 },
        { name: "Imaging", value: 6},
        { name: "Ancillary", value:7 }
        
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
export default Past12MonthsUtilizationChartComponent





