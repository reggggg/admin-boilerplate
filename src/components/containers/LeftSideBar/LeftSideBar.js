import React, {Component} from 'react';
import { FaChevronDown, FaChevronUp, FaSeedling } from 'react-icons/fa';
import { Collapse } from 'reactstrap';
import NavItems from './NavItems.js';

import history from '../../../js/history';

import '../../../css/containers/LeftSideBar/LeftSideBar.css';

class LeftSideBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      hideSideNav: true,
      leftNavData: [],
    }
  }

  async componentWillReceiveProps(nextProps){
    if(this.props.toggleSideNav !== nextProps.toggleSideNav){
      await this.setState({
        hideSideNav: nextProps.toggleSideNav
      });
    }
  }

  componentWillMount(){
    this.setState({
      leftNavData: NavItems
    });
  }

  toggleNavItem = async (id) => {
    let nav = this.state.leftNavData;
    for(let i = 0; i < nav.length; i++){
      nav[i].isActive = false;
    }
    nav[id].isActive = !nav[id].isActive;
    await this.setState({
      leftNavData: nav
    });
  }

  goFromChildRoute = (item) => {
    history.push(item.href);
    let nav = this.state.leftNavData;
    for(let i = 0; i < nav.length; i++){
      nav[i].isActive = false;
    }
  }



  render(){

    return (
      <div className={this.state.hideSideNav ? 'leftSideBar' : 'leftSideBar hidden'}>
        <div className="leftSideBarContent">
          <ul>
            <li className="eachNav">
              <span className={!this.state.hideSideNav ? 'flexed' : ''} onClick={() => history.push('/')}>
                <div className="nameAndIcon">
                  <div><FaSeedling /></div>
                  <h6 className={!this.state.hideSideNav ? 'hidden' : ''}>Dashboard</h6>
                </div>
              </span>
            </li>
            {
              this.state.leftNavData.map(( item, index ) => (
                <li className="eachNav" key={index}>
                  <span className={!this.state.hideSideNav ? 'flexed' : ''} onClick={() => this.toggleNavItem(index)}>
                    <div className="nameAndIcon">
                      <div>{item.icon}</div>
                      <h6 className={!this.state.hideSideNav ? 'hidden' : ''}>{item.nav}</h6>
                    </div>
                    <div className={!this.state.hideSideNav ? 'caretUpDown hidden' : 'caretUpDown'}>
                      {this.state.leftNavData[index].isActive ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                  </span>
                  <Collapse isOpen={item.isActive} className={!this.state.hideSideNav ? 'collapseContainer absolute' : 'collapseContainer'}>
                    {
                      item.childNavs.map(( item, index ) => (
                        <div onClick={() => this.goFromChildRoute(item)} className={!this.state.hideSideNav ? 'childNavs absolute' : 'childNavs'} key={index}>
                          {item.childNav}
                        </div>
                      ))
                    }
                  </Collapse>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}
export default LeftSideBar;
