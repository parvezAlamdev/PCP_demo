import React, { Component } from 'react';
import DonutChart from "react-svg-donut";
import { render } from "react-dom";
import { PieChart } from 'react-easy-chart';
import ProviderContractStatus from './ProviderContractStatus';
import ClaimsDetailsTableData from './claimDetailsTableData';
class ProviderCompleteDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            approvedClaims: 0,
            pendingClaims: 0,
            DenailsClaims: 0
        };

    }
    componentDidMount() {

    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-lg-4">
                        <div>
                            <div className="widget" >
                                <div className="ng-scope ng-isolate-scope medium no-padding">
                                    <div className="widget-body medium no-padding classnamees" >
                                        <div ng-hide="loading" className="widget-content" >
                                            <div className="table-responsive">
                                                <div className="provider-contact-text">Provider’s Contract Status</div>
                                                <ProviderContractStatus />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="widget">
                            <div className="widget-body medium no-padding classnamees">
                                <div className="table-responsive">
                                    <div className="provider-contact-text">Provider / PCP</div>
                                    <table className="table table provider-table">

                                        <tbody>
                                            <tr>
                                                <td>Payer’s Name : </td>
                                                <td>Marvel</td>
                                            </tr>
                                            <tr>
                                                <td>NPI Code :  : </td>
                                                <td>5678</td>
                                            </tr>
                                            <tr>
                                                <td>Affiliation ID :  </td>
                                                <td>ABC1234</td>
                                            </tr>
                                            <tr>
                                                <td>Provider Specialty :   </td>
                                                <td>ABC</td>
                                            </tr>
                                            <tr>
                                                <td>Provider Address :  </td>
                                                <td>USA</td>
                                            </tr>
                                            <tr>
                                                <td>Contact Number :  </td>
                                                <td>+918989898989</td>
                                            </tr>
                                            <tr>
                                                <td>Fax : </td>
                                                <td>larvez@mailme</td>
                                            </tr>
                                            <tr>
                                                <td># of Members Assigned :  </td>
                                                <td>10</td>
                                            </tr>
                                            <tr>
                                                <td>Accepting New Members : Yes / No </td>
                                                <td>yes</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div>
                            <div className="widget" >
                                <div className="ng-scope ng-isolate-scope medium no-padding">
                                    <div className="widget-body medium no-padding classnamees" >
                                        <div ng-hide="loading" className="widget-content" >
                                            <div className="table-responsive">
                                                <div id="dvClaimsStatus">
                                                    <div className="select-years">Claims Year :</div>
                                                    <select className="select-years form-control" id="sel1">
                                                        <option>2018</option>
                                                        <option>2017</option>
                                                        <option>2016</option>
                                                        <option>2015</option>
                                                        <option>2014</option>
                                                        <option>2013</option>
                                                        <option>2012</option>
                                                        <option>2011</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <PieChart
                                                        size={390}
                                                        labels
                                                        data={[
                                                            { key: 'Approved Claims', value: this.props.completeDataSet.total_cost_12m, color: '#aaac84' },
                                                            { key: 'Pending Claims ', value: this.props.completeDataSet.Total_Pending_Claims, color: '#dce7c5' },
                                                            { key: 'Denial Claims', value: this.props.completeDataSet.Total_Denial_Claims_Cost, color: '#e3a51a' }
                                                        ]}
                                                        clickHandler={
                                                            (d) => {
                                                                if (d.data.key == 'Approved Claims') {
                                                                    this.setState({
                                                                        isClaims: true
                                                                    })
                                                                }
                                                            }

                                                        }
                                                        styles={{
                                                            '.chart_text': {
                                                              fontSize: '8px',
                                                              fill: '#fff',
                                                              wordBreak: 'break-word'
                                                            }
                                                          }}
                                                    />
                                                    
                                                </div>

                                                {
                                                    this.state && this.state.isActive_MemberDetails &&

                                                    <div id="dvMemberDetails">
                                                        <hr></hr>
                                                        <div className="select-years">Member Details :</div>
                                                        <select className="select-years form-control" id="sel1">
                                                            <option>2018</option>
                                                            <option>2017</option>
                                                            <option>2016</option>
                                                            <option>2015</option>
                                                            <option>2014</option>
                                                            <option>2013</option>
                                                            <option>2012</option>
                                                            <option>2011</option>
                                                        </select>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                {this.state && this.state.isClaims &&

                    <div><ClaimsDetailsTableData claimsData={this.props.completeDataSet} /></div>}


            </div>
        );
    }
}
export default ProviderCompleteDetails







