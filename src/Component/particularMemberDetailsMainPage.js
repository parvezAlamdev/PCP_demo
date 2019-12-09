import React, { Component } from 'react';
import { render } from "react-dom";
import ParticularMemberOverview from './particularMemberOverview';
import  ParticularMemberUtilizationBreakDownChart from './particularMemberUtilizationBreakDownChart';
import ParticularMemberPastMedicalHistory from './particularMemberPastMedicalHistory';
import Past12MonthsUtilizationChartComponent from './past12MonthsUtilization';
class ParticularMemberDetailsMainPage extends Component {
    constructor(props) {
        super(props);
        this.state={
            isValid:true,
            particularMemberData:[],
            memberdata:[]
        }
        console.log(this.props);
    }    
    
    componentWillReceiveProps(nextProps){debugger;
       if(nextProps.memberdata)
       {
           this.setState({memberdata:nextProps.memberdata})
       }
    }
    render() {debugger;
        console.log('memberID : ')
        console.log(this.state.memberdata)
        return (
            <div>{this.state.memberdata && this.state.memberdata.member_id &&
                <div className="col-sm-12 vertical-tabs">
                    <hr />
                    <div className="col-xs-12">
                        <ul className="nav nav-tabs tabs-left">
                            <li className="active"><a href="#MemberDetails" data-toggle="tab">Member Details</a></li>
                            <li><a href="#Past12monthsUtilization" data-toggle="tab">Past 12 months Utilization </a></li>
                            <li><a href="#MissingServices" data-toggle="tab">Missing Services </a></li>
                            <li><a href="#Appeals" data-toggle="tab">Appeals</a></li>
                            <li><a href="#Grievances" data-toggle="tab">Grievances </a></li>
                            <li><a href="#CallTracking" data-toggle="tab">Call Tracking</a></li>
                            <li><a href="#IDCard" data-toggle="tab">ID Card </a></li>
                        </ul>
                    </div>
                    <div className="col-xs-12">
                        <div className="tab-content">
                            <div className="tab-pane active" id="MemberDetails">
                            <ParticularMemberOverview overviewData={this.state.memberdata}/>
                            <ParticularMemberPastMedicalHistory/>
                            <ParticularMemberUtilizationBreakDownChart chartData={this.state.memberdata}/></div>
                            <div className="tab-pane" id="Past12monthsUtilization"><Past12MonthsUtilizationChartComponent/></div>
                            <div className="tab-pane" id="MissingServices">Missing Services</div>
                            <div className="tab-pane" id="Appeals">Appeals</div>
                            <div className="tab-pane" id="Grievances">Grievances</div>
                            <div className="tab-pane" id="CallTracking">Call Tracking</div>
                            <div className="tab-pane" id="IDCard">ID Card</div>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>}
            </div>
        );
    }
}
export default ParticularMemberDetailsMainPage





