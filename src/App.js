import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import MemberDetailsMainPage from './Component/memberDetailsMainPage';
import ProviderDetailsMainPage from './Component/providerDetailsMainPage';
import MembersReviewComponent from './Component/membersReviewComponent';
import Iframe from 'react-iframe'
class App extends Component {
  constructor(props) {
    super(props);
    this.handleToggleMenu = this.handleToggleMenu.bind(this);
    this.state = {
      openMenu: true,
      isLoaded: false,
      items: [],
      showDetails: false,
      showTopSearchBox: false,
    }
  }

  handleToggleMenu() {
    this.setState({ openMenu: !this.state.openMenu });
  }

  handleSearch = () => {
    this.setState({
      showDetails: true,
      showTopSearchBox: true
    });
  }
  render() {
    return (
      <div id="page-wrapper" className={this.state.openMenu ? "open" : ""}>
        <div id="content-wrapper">
          <div className="page-content">
            <div className="nav-fluid">
              <div className="nav-pills">
                <div className="tab-content">
                  <div id="MemberView" className="tab-pane fade in active">
                    {/* <div><MemberDetailsMainPage /></div> */}
                    <div><Iframe url="https://www.youtube.com/watch?v=_gJRWFIjhIA"
                               width="450px"
                               height="450px"
                               id="myId"                              
                               display="initial"
                               position="relative"
                               sandbox ="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-top-navigation"
                               allowFullScreen/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
