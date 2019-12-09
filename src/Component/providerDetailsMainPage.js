import React, { Component } from 'react';
import { render } from "react-dom";
import readXlsxFile from 'read-excel-file';
import ServiceData from '../../src/Assets/MissingService.json';
import $ from 'jquery';
import ProviderCompleteDetails from './providerCompleteDetails';
import data from '../../src/Assets/MemberMatrix.json';

//yimport readXlsxFile from 'read-excel-file';
class ProviderDetailsMainPage extends Component {
    constructor(props) {
        super(props);
        this.selectedGRP = this.selectedGRP.bind(this);
        this.state = {
            missingServiceData: [],
            memberData: [],
            is_grp_selected: false,
            provDetails: "",
            stateDetails: "",
            year: '',
            payerName: '',
            isEnableAdvanceSearch: false,
            isClickedOnSearchRecords: false,
            namePassedToChild: '',
            idPassedToChild: '',
            completeDataPassed: [],
            filteredmemberData:[]
        };
    }
    componentDidMount() {
        this.setState({
            missingServiceData: ServiceData,
            memberData: data,
            is_grp_selected: false
        })
    }

    enableAdvanceHandler = () => {
        const btnStatus = this.state.isEnableAdvanceSearch;
        this.setState({
            isEnableAdvanceSearch: !btnStatus
        })
    }

    selectedGRP = (index, completeObject) => {
        $(".provider-details>tr.selected").removeClass("selected");
        $('#GRP-' + index).addClass('selected');
        this.setState({
            is_grp_selected: true,
            completeDataPassed: completeObject
        });

    }

    GetFilteredDataHandler = () => {
        this.state['filteredmemberData'] = [];
        this.state['completeDataPassed']=[];
        this.state['is_grp_selected'] = false;
        if (this.state.provDetails == "") {
            // alert("Please Enter the search conditions");
            return;
        }
        let tempMemberData = JSON.parse(JSON.stringify(this.state.memberData));
        
        let searchdata = this.state.provDetails;
        let memberDataResult = tempMemberData.filter(item => {

            if (item.pcp_id && item.pcp_id.indexOf(searchdata) >= 0) {
                return item.pcp_id.indexOf(searchdata) >= 0;
            }
            else if (item.pcp_name) {
                if (item.pcp_name.trim() === searchdata.trim()) {
                    return item.pcp_name === searchdata;
                }
                else {
                    return item.pcp_name.indexOf(searchdata) >= 0;
                }
            }
        });

        this.setState({
            filteredmemberData: memberDataResult,
            isClickedOnSearchRecords: true
        });
        console.log(this.state.memberData);
    }

    UpdateProvDetailsHandler = (event) => {
        this.setState({ provDetails: event.target.value });
    }
    handleSearch=(event)=>{
        this.setState({ provDetails: event.target.value });
    }

    render() {

        return (
            <div>
                <div className="row header search-container">
                    <div className="container display-table-search">
                        <div className="search-company display-table-row-search">
                            <div className="row display-table-cell-search">
                                <div className="form-search">
                                    <form className="form-inline">
                                        <div className="col-md-12 mabt10">
                                            <div className="form-group search-group">
                                                <div className="col-md-4 text-center search">
                                                    <label for="txtSearch">Search By</label>
                                                </div>
                                                <div className="col-md-8">
                                                    <input className="search-field form-control" type="text" onBlur={this.UpdateProvDetailsHandler} onChange={this.handleSearch} id="txtSearch" name="txtSearch" placeholder="Prov. ID/Prov. Name/Group Name/Facility Name/GP ID/GRP Name/List Box /Payer Name" ></input>{this.state.isEnableAdvanceSearch && <a onClick={this.enableAdvanceHandler}><img className='image30x30' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJXSURBVGhD7dlLqE1RHMfx4/0KXRPyymtgotwRhYGiDD0iouQxZCLRLZmZemVGkRIDZSKPRJQkjBh5pSQpJHnm/f3V2fVv+Z9z1z53n+ssrV99Jqu911nr7LPX69RycnJyckpkDtZjFaaqILVMwhX8Nr7jGIYjiXThMWwnrPMYgMoyHjPa4ABsw9/hS1C2CeF90zAIpXIStuJ2OY3B0FN6UC9r5hkmIirD8BNeRVVbgSL74F0T2oDonIFXSdVOQU9kLO7Xy5p5jskoFT3C8HdahcOwjXuND0HZVnj3qtMdE70PT2Ebbl1EpaNWOzMF12E7oPfyOEYiuXRjM9Zhpgpycv6OXuJ5mIXSM3AnRMO0Zmg7iWoGXotkMgGPYEefwi9sQxI5Cq8Thc/QUPvPsgfv4TWuES00tWJeik/1sippv3IZYxCVofgBr7JmZqPIOXjXVEE7yujcgldJM1ugjIJedu+avvoI+4X1mhFYhtW9uIfiQ/QUr0ErVPvhO+DdW9ZKlF75xmYRvsE23NJPLJksx1uEnTiL5BaA2hhpD7EfPZiPnJx+yEBET2SdmLnQgdtXaAB4BZ2WjEYyWYJGS5W70ADR8dGw+xJeJwqH0PZoL3ETmrlb8RBFg7Wc34mFuFQvE02k3r2N6CkehNaCUdFJY3gW2xc3UGQ6vGvKWIOo6EzpCbxKWqGT9yFQFsO7JpbWc9pOR0eLs+3Y3SLN8LYBt3EEb0zZC3j3NrILC9DvuQrbmdBGJJFxuIOwAzqk2IukohldO7oTuAANufrfMCcnJyfnf0it9geVPeUogP2h4wAAAABJRU5ErkJggg=="></img></a>}{!this.state.isEnableAdvanceSearch && <a onClick={this.enableAdvanceHandler}><img className='image30x30' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJXSURBVGhD7dlLqE1RHMfx4/0KXRPyymtgotwRhYGiDD0iouQxZCLRLZmZemVGkRIDZSKPRJQkjBh5pSQpJHnm/f3V2fVv+Z9z1z53n+ssrV99Jqu911nr7LPX69RycnJyckpkDtZjFaaqILVMwhX8Nr7jGIYjiXThMWwnrPMYgMoyHjPa4ABsw9/hS1C2CeF90zAIpXIStuJ2OY3B0FN6UC9r5hkmIirD8BNeRVVbgSL74F0T2oDonIFXSdVOQU9kLO7Xy5p5jskoFT3C8HdahcOwjXuND0HZVnj3qtMdE70PT2Ebbl1EpaNWOzMF12E7oPfyOEYiuXRjM9Zhpgpycv6OXuJ5mIXSM3AnRMO0Zmg7iWoGXotkMgGPYEefwi9sQxI5Cq8Thc/QUPvPsgfv4TWuES00tWJeik/1sippv3IZYxCVofgBr7JmZqPIOXjXVEE7yujcgldJM1ugjIJedu+avvoI+4X1mhFYhtW9uIfiQ/QUr0ErVPvhO+DdW9ZKlF75xmYRvsE23NJPLJksx1uEnTiL5BaA2hhpD7EfPZiPnJx+yEBET2SdmLnQgdtXaAB4BZ2WjEYyWYJGS5W70ADR8dGw+xJeJwqH0PZoL3ETmrlb8RBFg7Wc34mFuFQvE02k3r2N6CkehNaCUdFJY3gW2xc3UGQ6vGvKWIOo6EzpCbxKWqGT9yFQFsO7JpbWc9pOR0eLs+3Y3SLN8LYBt3EEb0zZC3j3NrILC9DvuQrbmdBGJJFxuIOwAzqk2IukohldO7oTuAANufrfMCcnJyfnf0it9geVPeUogP2h4wAAAABJRU5ErkJggg=="></img></a>}
                                                </div>
                                            </div>
                                        </div>
                                        {this.state.isEnableAdvanceSearch && <div>
                                            <div className="col-md-12 mabt10">
                                                <div className="form-group formGroup">
                                                    <div className="col-md-4"></div>
                                                    <div className="col-md-8">
                                                        <input type="text" className="form-control" id="pwd" placeholder="State (CA, AZ, OR, WA) " name="state" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-12 mabt10">
                                                <div className="form-group formGroup">
                                                    <div className="col-md-4"></div>
                                                    <div className="col-md-8">
                                                        <input type="text" className="form-control" id="pwd" placeholder="Year(Default Year is 2018) " name="state" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-12 mabt10">
                                                <div className="form-group formGroupPlayer">
                                                    <div className="col-md-4"></div>
                                                    <div className="col-md-8">
                                                        <input type="text" className="form-control" id="pwd" placeholder="Payer Name" name="state" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>}
                                        <div className="submitBt col-md-12 padding-l-r-30">
                                            <button type="button" onClick={this.GetFilteredDataHandler} className="search-input-button btn btn-lg btn-success">Search</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.isClickedOnSearchRecords && <div className="table-responsive">
                    <table className="table border-table">
                        <thead>
                            <tr>
                                <th>PCP ID </th>
                                <th>PCP Name </th>
                                <th>Contract Start Date </th>
                                <th>Contract End Date </th>
                                <th>Finalized Claims </th>
                                <th>Pending Claims </th>
                                <th>Missing Services </th>
                                <th>Completed Services </th>
                                <th>Missing Services Description </th>
                            </tr>
                        </thead>
                        <tbody className="provider-details">
                            {
                                this.state.filteredmemberData.length > 0 && this.state.filteredmemberData.map(function (item, index) {
                                    return (<tr id={"GRP-" + index} key={index}>
                                        <td className="pointer-member-name"><a onClick={this.selectedGRP.bind(this, index, item)} >{item.pcp_id}</a></td>
                                        <td className="pointer-member-name"><a onClick={this.selectedGRP.bind(this, index, item)}>{item.pcp_name}</a></td>
                                        <td>01/01/2018 </td>
                                        <td>12/31/2018 </td>
                                        <td >{item.total_cost_12m} </td>
                                        <td>{item.Total_Pending_Claims} </td>
                                        <td>aa</td>
                                        <td>bb</td>
                                        <td>cc</td>
                                    </tr>)
                                }, this)
                            }
                            {
                                this.state.filteredmemberData <= 0 &&
                                <div>Nothing is Available with your searching conditions</div>
                            }

                        </tbody>
                    </table>
                </div>}{
                    this.state && this.state.is_grp_selected &&

                    <div><ProviderCompleteDetails completeDataSet={this.state.completeDataPassed}

                    /></div>}


            </div>
        );
    }
}
export default ProviderDetailsMainPage





