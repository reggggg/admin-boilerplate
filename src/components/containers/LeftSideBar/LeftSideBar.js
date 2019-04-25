import React, {Component} from 'react';

import '../../../css/containers/LeftSideBar/LeftSideBar.css';

class LeftSideBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      hideSideNav: true
    }
  }

  async componentWillReceiveProps(nextProps){
    await this.setState({
      hideSideNav: nextProps.toggleSideNav
    });
  }

  toggleSideNav = async () => {
    await this.setState({
      hideSideNav: !this.state.hideSideNav
    });
  }

  render(){
    return (
      <div className={this.state.hideSideNav ? 'leftSideBar' : 'leftSideBar hidden'}>
        <div className="leftSideBarContent">

        </div>
      </div>
    );
  }
}
export default LeftSideBar;
