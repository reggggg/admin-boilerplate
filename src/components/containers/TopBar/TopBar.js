import React, {Component} from 'react';
import { Container } from 'reactstrap';
import { FaBars } from 'react-icons/fa';

import '../../../css/containers/TopBar/TopBar.css';

class TopBar extends Component {
  render(){
    return (
      <div className="topBar">
        <div className="topBarContent">
          <div className="mobileViewToggler">
            <FaBars />
          </div>
        </div>
      </div>
    );
  }
}
export default TopBar;
