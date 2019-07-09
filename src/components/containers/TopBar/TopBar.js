import React, {Component} from 'react';
import { MdAccountCircle, MdExpandMore } from 'react-icons/md';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
// import history from '../../../js/history';
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
  onLogout = () => {
    localStorage.clear();
    window.location.replace('/login');
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
                <MdAccountCircle className="accountIcon" />
                <Dropdown className="accDropdown" isOpen={this.state.accDropdownOpen} toggle={this.toggleAccountDropdown}>
                  <DropdownToggle className="accDropdownButton">Reggie <MdExpandMore /></DropdownToggle>
                  <DropdownMenu className="accDropdownMenu">
                    <DropdownItem>Account</DropdownItem>
                    <DropdownItem onClick={this.onLogout}>Logout</DropdownItem>
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
