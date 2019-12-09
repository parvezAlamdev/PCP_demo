import React, { Component } from 'react';
import PieChart from 'react-simple-pie-chart';
import DonutChart from "react-svg-donut";
import { render } from "react-dom";
import '../Component/temporary.css';
class MembersReviewComponent extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div className="box-main-div">

                <div className="col-lg-4 col-sm-12">
                    <div className="box-header-text">Living Situation</div>

                    <div className="box-div">
                        <div className="textbox-main-div">
                            <div className="textbox-div"> <input type="text" /></div>
                            <div className="button-div"><button>Edit</button></div>
                        </div>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        Lives Alone
                                        </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="additional_details_div">Additional Details</div>
                        <textarea placeholder="Text Area" className="textarea"></textarea>

                    </div>   </div>
                <div className="col-lg-4 col-sm-12">
                    <div className="box-header-text">CAREGIVER</div>
                    <div className="box-div">
                        <div className="textbox-main-div">
                            <div className="textbox-div"> <input type="text" /></div>
                            <div className="button-div"><button>Edit</button></div>
                        </div>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        Lives Alone
                                   </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="additional_details_div">Additional Details</div>
                        <textarea placeholder="Text Area" className="textarea"></textarea>
                    </div>

                </div>
                <div className="col-lg-4 col-sm-12">
                    <div className="box-header-text">REASON HIGH RISK FOR READMISSION</div>
                    <div className="box-div">
                        <div className="textbox-main-div">
                            <div className="textbox-div"> <input type="text" /></div>
                            <div className="button-div"><button>Edit</button></div>
                        </div>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        Lives Alone
                                   </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="additional_details_div">Additional Details</div>
                        <textarea placeholder="Text Area" className="textarea"></textarea>
                    </div>
                </div>
                <div className="clear-div"></div>
                <div className="col-lg-4 col-sm-12">
                    <div className="box-header-text">CHRONIC CONDITION</div>

                    <div className="box-div">
                        <div className="textbox-main-div">
                            <div className="textbox-div"> <input type="text" /></div>
                            <div className="button-div"><button>Edit</button></div>
                        </div>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        Lives Alone
                                        </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="additional_details_div">Additional Details</div>
                        <textarea placeholder="Text Area" className="textarea"></textarea>

                    </div>   </div>
                <div className="col-lg-4 col-sm-12">
                    <div className="box-header-text">BEHAVIORAL HEALTH</div>
                    <div className="box-div">
                        <div className="textbox-main-div">
                            <div className="textbox-div"> <input type="text" /></div>
                            <div className="button-div"><button>Edit</button></div>
                        </div>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        Lives Alone
                                   </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="additional_details_div">Additional Details</div>
                        <textarea placeholder="Text Area" className="textarea"></textarea>
                    </div>

                </div>
                <div className="col-lg-4 col-sm-12">
                    <div className="box-header-text">DISCHARGE BARRIERS</div>
                    <div className="box-div">
                        <div className="textbox-main-div">
                            <div className="textbox-div"> <input type="text" /></div>
                            <div className="button-div"><button>Edit</button></div>
                        </div>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        Lives Alone
                                   </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="additional_details_div">Additional Details</div>
                        <textarea placeholder="Text Area" className="textarea"></textarea>
                    </div>
                </div>
                <div className="clear-div"></div>

            </div>
        );
    }
}
export default MembersReviewComponent






