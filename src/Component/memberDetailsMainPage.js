import React, { Component } from 'react';
import { render } from "react-dom";
import readXlsxFile from 'read-excel-file';
import data from '../../src/Assets/MemberMatrix.json';
import ParticularMemberDetailsMainPage from './particularMemberDetailsMainPage';
import $ from 'jquery';
import axios from 'axios';
class MemberDetailsMainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null, loaded: 0,
            endpoint: 'http://localhost:8081/upload'
        }
    }
    handleselectedFile = event => {
        debugger;
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        })
    }
    handleUpload = () => {
        let self=this;
        const data ={
            file:self.state.selectedFile,
            name:self.state.selectedFile.name
        };             
        axios
          .post(self.state.endpoint, data)
          .then(res => {
            console.log(res)
          })
    
      }
    render() {
        return (
            <div><div className="App">
                <input type="file" name="parvez" id="parvez" onChange={this.handleselectedFile} />
                <button onClick={this.handleUpload}>Upload</button>
                <div> {Math.round(this.state.loaded, 2)} %</div>
            </div>
            </div>
        );
    }
}
export default MemberDetailsMainPage





