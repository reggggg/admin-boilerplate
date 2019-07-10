import React, {Component} from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import classnames from 'classnames';

import AdminManage from './Admin';
import '../../../../css/views/Permissions/Admin/index.css';

class PermissionAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1
    };
  }

  toggle = (tab) => {
    if(this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render(){
    return (
      <div className="permissionAdmin">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === 1 })}
              onClick={() => this.toggle(1)}
            >
              Manage Admin
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === 2 })}
              onClick={() => this.toggle(2)}
            >
              Admin Requests
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId={1}>
            <AdminManage />
          </TabPane>
          <TabPane tabId={2}>
            {/* Admin requests */}
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
export default PermissionAdmin;
