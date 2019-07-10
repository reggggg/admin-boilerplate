import React, {Component} from 'react';
import { MdMenu, MdExpandLess } from 'react-icons/md';
import { Collapse } from 'reactstrap';
import NavItems from './NavItems.js';
import classNames from 'classnames';

import history from '../../../js/history';


import '../../../css/containers/LeftSideBar/LeftSideBar.css';

class LeftSideBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      hideSideNav: true,
      leftNavData: [],
      activeIndex: 0,
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


  toggleNavItem = async (id, url) => {
    url = !null ? history.push(url) : null;
    let nav = this.state.leftNavData;
    if(id === this.state.activeIndex && this.state.leftNavData.length !== 0){
        this.setState({
          leftNavData: []
        });
    }else {
      for(let i = 0; i < nav.length; i++){
        nav[i].isActive = false;
      }
    }
    nav[id].isActive = !nav[id].isActive;
    this.setState({
      leftNavData: nav,
      activeIndex: id,
    });
  }

  goFromChildRoute = ( item ) => {
    history.push(item.href);
    if(!this.state.hideSideNav){
      let setActiveFalse = this.state.leftNavData;
      setActiveFalse[this.state.activeIndex].isActive = false;
      this.setState({ leftNavData: setActiveFalse });
    }
  }

  toggleSideNavShow = () => {
    this.setState({
      hideSideNav: !this.state.hideSideNav
    });
    this.props.sideNavOpener();
  }


  render(){

    return (
      <div className={this.state.hideSideNav ? 'leftSideBar' : 'leftSideBar hidden'}>
        <div className="leftSideBarContent">
          <div className={this.state.hideSideNav ? 'logoBar' : 'logoBar centered'}>
            <div className={this.state.hideSideNav ? 'imgDiv' : 'imgDiv hidden'}>
              <img src={require('../../../resources/images/logo-SampleOnly.svg')} alt=""/>
            </div>
            <div className="mobileBarToggler">
              <MdMenu onClick={() => this.toggleSideNavShow()} />
            </div>
          </div>
          <ul>
            {
              this.state.leftNavData.map(( item, index ) => {
                let liClasses = classNames({
                  'eachNav': true,
                });
                let navItemClasses = classNames({
                  '': true,
                  'flexed': !this.state.hideSideNav ? true : false,
                  'isActive': this.state.activeIndex === index ? true : false
                });
                let navTitleClasses = classNames({
                  '': true,
                  hidden: !this.state.hideSideNav ? true : false
                });
                let caretClasses = classNames({
                  'caretUpDown': true,
                  'caretUpDown hidden': !this.state.hideSideNav ? true : false
                });
                let collapseClasses = classNames({
                  'collapseContainer': true,
                  'collapseContainer absolute': !this.state.hideSideNav ? true : false
                });
                let caret = !this.state.leftNavData[index].isActive ? item.caret : <MdExpandLess />;
                return (
                  <li className={liClasses} key={index}>
                    <span className={navItemClasses} onClick={() => this.toggleNavItem(index, item.url)}>
                      <div className="nameAndIcon">
                        <div>{item.icon}</div>
                        <h6 className={navTitleClasses}>{item.nav}</h6>
                      </div>
                      <div className={caretClasses}>
                        {item.caret != null ? caret : null}
                      </div>
                    </span>
                    <Collapse isOpen={item.isActive} className={collapseClasses}>
                      {
                        item.childNavs.map(( item, index ) => {
                          let navChildClasses = classNames({
                            'childNavs': true,
                            'childNavs absolute': !this.state.hideSideNav ? true : false,
                          });
                          return (
                            <div onClick={() => this.goFromChildRoute(item, index)} className={navChildClasses} key={index}>
                              {item.childNav}
                            </div>
                          )
                        })
                      }
                    </Collapse>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}
export default LeftSideBar;
