import React, {Component} from 'react';
import { FaBars } from 'react-icons/fa';

import '../../../css/containers/TopBar/TopBar.css';

class TopBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      hideSideNav: false
    }
  }

  toggleSideNav = () => {
    this.setState({
      hideSideNav: !this.state.hideSideNav
    });
    this.props.toggleSideNav(this.state.hideSideNav);
  }



  render(){
    return (
      <div className="topBar">
        <div className={this.state.hideSideNav ? 'topBarContent' : 'topBarContent adjust'}>
          <div className="mobileViewToggler">
            <FaBars onClick={this.toggleSideNav} />
          </div>
        </div>
      </div>
    );
  }
}
export default TopBar;
