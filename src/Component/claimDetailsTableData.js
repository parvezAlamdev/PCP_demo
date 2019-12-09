import React, { Component } from 'react';
import { render } from "react-dom";
import readXlsxFile from 'read-excel-file';
import ClaimsData from '../../src/Assets/ClaimsService.json';
import $ from 'jquery';
import ProviderCompleteDetails from './providerCompleteDetails';
class ClaimsDetailsTableData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            claimsServiceData: [],
            is_grp_selected: false
        };
    }
    componentDidMount() {
        let ClaimsDataResult = ClaimsData.filter(item => {
            if (item) {
                return item.pat_id == this.props.claimsData.member_id;
            }
        })
        this.setState({
            claimsServiceData: ClaimsDataResult
        })
    }
    componentWillReceiveProps(nextProps){
        debugger;
        if(nextProps.claimsData&&nextProps.claimsData.member_id)
        {
            let ClaimsDataResult = ClaimsData.filter(item => {
                if (item) {
                    return item.pat_id == nextProps.claimsData.member_id;
                }
            })
            this.setState({
                claimsServiceData: ClaimsDataResult
            })
        }        
     }
    



    render() {      
        return (
            <div>
                {this.state.claimsServiceData && this.state.claimsServiceData &&
                    <div className='table-responsive'> 
                        <table className='table border-table' style={{fontSize: '11px'}}>
                            <thead>
                                <tr>
                                    <th>Claim ID</th>
                                    <th>Claim Status </th>
                                    <th>Claim IN Network </th>
                                    <th>Claim received Date  </th>
                                    <th>Claim Paid Date  </th>
                                    <th>Member ID </th>
                                    <th>Member Name </th>
                                    <th>Amount Paid by Member </th>
                                    <th>Amount Billed </th>
                                    <th>Amount Copay </th>
                                    <th>Amount Deductible </th>
                                    <th>Amount Paid Comp</th>
                                    <th>Line Of Business </th>
                                    <th>Service Category </th>
                                    <th>Service Code and Description  </th>
                                    <th>Multiple Diagnosis = ccs_level1 + ccs_level2 </th>
                                    <th>Procedure Code Description</th>
                                </tr>
                            </thead>
                            <tbody className="provider-details">{this.state.claimsServiceData.map(function (item, index) {
                                return (<tr id={"GRP-" + index} key={index}>
                                    <td>{item.claim_id}</td>
                                    <td>{item.claim_header_status}</td>
                                    <td>{item.claim_in_network}</td>
                                    <td>{item.claim_rec_date}</td>
                                    <td >{item.Claim_Paid_Date} </td>
                                    <td>{item.pat_id} </td>
                                    <td>Name from matrix</td>
                                    <td>{item.amt_paid}</td>
                                    <td>{item.amt_billed}</td>
                                    <td>{item.amt_copay}</td>
                                    <td>{item.amt_deduct}</td>
                                    <td>{item.amt_paid_comp}</td>
                                    <td>{item.lob}</td>
                                    <td>{item.hcg_category}</td>
                                    <td>{item.cchg_cat_code_and_desc}</td>
                                    <td>Not Provided</td>
                                    <td>{item.proccode_description}</td>

                                </tr>)
                            }, this)}

                            </tbody>
                        </table>
                    </div>



                }
            </div>
        );
    }
}
export default ClaimsDetailsTableData





