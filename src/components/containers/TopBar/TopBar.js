import React, {Component} from 'react';
import {
  FaBars,
  FaGlobeAsia,
  FaCaretDown,
  FaUserAlt,
} from 'react-icons/fa';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import '../../../css/containers/TopBar/TopBar.css';

class TopBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      langSelectorOpen: false,
      accDropdownOpen: false
    }
  }

  toggleLanguageSelector = () => {
    this.setState({
      langSelectorOpen: !this.state.langSelectorOpen
    })
  }

  toggleAccountDropdown = () => {
    this.setState({
      accDropdownOpen: !this.state.accDropdownOpen
    });
  }


  render(){
    return (
      <div className="topBar">
        <div className={this.state.hideSideNav ? 'topBarContent' : 'topBarContent adjust'}>
          <div className="mobileViewToggler">

          </div>
          <div className="right">
            <div className="account">
              <span onClick={this.toggleAccountDropdown}>
                <FaUserAlt className="bordered" />
                <Dropdown className="accDropdown" isOpen={this.state.accDropdownOpen} toggle={this.toggleAccountDropdown}>
                  <DropdownToggle className="accDropdownButton" caret>Reggie</DropdownToggle>
                  <DropdownMenu className="accDropdownMenu">
                    <DropdownItem>Account</DropdownItem>
                    <DropdownItem>Profile</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default TopBar;
