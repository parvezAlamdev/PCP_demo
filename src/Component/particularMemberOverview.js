import React, { Component } from 'react';
import PieChart from 'react-simple-pie-chart';
import { render } from "react-dom";
class ParticularMemberOverview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            overviewData: []
        };
    }
    componentDidMount() {
        this.setState({
            overviewData: this.props.overviewData
        })
    }
    componentWillReceiveProps(nextProps){debugger;
        if(nextProps.overviewData)
        {
            this.setState({overviewData:nextProps.overviewData})
        }
     }
    render() {
        return (

            <div className="col-md-4">
                <div className="member_name_details_title"><h2>Overview</h2></div>
                <div className="member_overview_list">

                    <div className="form-group">
                        <div className="pull-left">
                            PCP
                            </div>
                        <div className="pull-right">
                            <strong className="wordBreak">{this.state.overviewData.pcp_name}</strong>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="form-group">
                        <div className="pull-left">
                            ER 12M
                            </div>
                        <div className="pull-right">
                            <strong>{this.state.overviewData.ed_visit_count_total}</strong>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="form-group">
                        <div className="pull-left">
                            IP 12M
                            </div>
                        <div className="pull-right">
                            <strong>{this.state.overviewData.ip_visit_count_12m}</strong>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="form-group">
                        <div className="pull-left">
                            BEHAVIORAL
                            </div>
                        <div className="pull-right">
                            <strong>Dr Robert Smith</strong>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="form-group">
                        <div className="pull-left">
                            CHRONIC
                            </div>
                        <div className="pull-right">
                            <strong>Dr Robert Smith</strong>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="form-group">
                        <div className="pull-left">
                            RX 12M
                            </div>
                        <div className="pull-right">
                            <strong>{this.state.overviewData.prescription_count_12m}</strong>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ParticularMemberOverview





