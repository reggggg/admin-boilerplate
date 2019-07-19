import React, {Component} from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import { MdAddShoppingCart, MdModeEdit } from 'react-icons/md';
import classnames from 'classnames';


import '../../../../css/views/Tabs/Tabs.css';
import '../../../../css/views/Products/Yhotel/index.css';

const ManageProducts = React.lazy(() => import('./ManageProducts'));
const CreateProduct = React.lazy(() => import('./CreateProduct'));

class ProductsManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 2
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
      <div className="productsManagement">
        <Nav tabs className="y-tabs">
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === 1 })}
              onClick={() => this.toggle(1)}
            ><span><MdModeEdit />Manage Products</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === 2 })}
              onClick={() => this.toggle(2)}
            ><span><MdAddShoppingCart />Create New Product</span>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId={1}>
            <ManageProducts />
          </TabPane>
          <TabPane tabId={2}>
            <CreateProduct />
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
export default ProductsManagement;
