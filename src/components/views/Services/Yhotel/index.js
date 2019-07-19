import React, {Component} from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import { MdAddShoppingCart } from 'react-icons/md';
import classnames from 'classnames';


import '../../../../css/views/Tabs/Tabs.css';
import '../../../../css/views/Services/Yhotel/index.css';

const ClubClimax = React.lazy(() => import('./ClubClimax'));
const StationY = React.lazy(() => import('./StationY'));
const BeachCraft = React.lazy(() => import('./BeachCraft'));


class YhotelServiceManagement extends Component {
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
      <div className="serviceManagement">
        <Nav tabs className="y-tabs">
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === 1 })}
              onClick={() => this.toggle(1)}
            ><span><MdAddShoppingCart />Club Climax</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === 2 })}
              onClick={() => this.toggle(2)}
            ><span><MdAddShoppingCart />Station Y</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === 3 })}
              onClick={() => this.toggle(3)}
            ><span><MdAddShoppingCart />Beach Craft</span>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId={1}>
            <ClubClimax />
          </TabPane>
          <TabPane tabId={2}>
            <StationY />
          </TabPane>
          <TabPane tabId={3}>
            <BeachCraft />
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
export default YhotelServiceManagement;
