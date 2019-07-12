import React, {Component} from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import { MdPersonAdd, MdModeEdit, MdContentPaste } from 'react-icons/md';
import classnames from 'classnames';

import '../../../../css/views/Tabs/Tabs.css';

const AdminManage = React.lazy(() => import('./Admin'));
const AdminRequests = React.lazy(() => import('./AdminRequests'));
const CreateAdmin = React.lazy(() => import('./CreateAdmin'));

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
        <Nav tabs className="y-tabs">
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === 1 })}
              onClick={() => this.toggle(1)}
            ><span><MdModeEdit /> Manage Admin</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === 2 })}
              onClick={() => this.toggle(2)}
            ><span><MdContentPaste /> Admin Requests</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === 3 })}
              onClick={() => this.toggle(3)}
            ><span><MdPersonAdd /> Create New Admin</span>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId={1}>
            <AdminManage />
          </TabPane>
          <TabPane tabId={2}>
            <AdminRequests />
          </TabPane>
          <TabPane tabId={3}>
            <CreateAdmin />
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
export default PermissionAdmin;
