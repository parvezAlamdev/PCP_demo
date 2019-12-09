import React, { Component } from 'react';
import PieChart from 'react-simple-pie-chart';
import { render } from "react-dom";
class ParticularMemberPastMedicalHistory extends Component {
    constructor() {
        super();
        this.state = {};
    }   
    render() {      
        return (
            <div>
            <div className="col-md-4">
              <div className="member_name_details_title"><h2>Past Medical history</h2></div>
              <div className="bg_white">
                    <div className="member_medical_history_main">
                        <div className="medical_history_txtbox">
                            <input type="text" />
                            <button className="btn btn-primary" type="button">Edit</button>
                        </div>
                    </div>
                    <div className="member_medical_details_tbl">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        dfdgkjglfhfkh
                                        </td>
                                </tr>
                            </tbody>
                        </table>    
                    </div>
                    </div>
            </div>
            </div>
        );
    }
}
export default ParticularMemberPastMedicalHistory





