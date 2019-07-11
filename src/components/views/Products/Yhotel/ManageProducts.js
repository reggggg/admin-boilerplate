import React, {Component} from 'react';
import DataTable from 'react-data-table-component';
import { YHotelManageProduct } from '../../../tableColumns';

import { MdKeyboardArrowDown } from 'react-icons/md';
import '../../../../css/views/Products/Yhotel/ManageProducts.css';
import '../../../../css/views/DataTable/DataTable.css';
import tableLoader from '../../../../css/helpers/tableLoader';

class AdminManage extends Component {
  constructor(props){
    super(props);
    this.state = {
      loadingData: false,
      paginationInitRows: 10
    }
  }

  componentWillMount(){
    this.setState({ loadingData: true });
  }
  componentDidMount(){
    this.setState({ loadingData: false });
  }
  render(){
    const data = [
      {
        id: 1,
        image: 'test-image',
        name: 'Donut',
        category: ['Bread', 'Pastries', 'Sweets'],
        quantity: 3,
        active: false
      },
      {
        id: 2,
        image: 'test-image2',
        name: 'Carbonara',
        category: ['Pasta', 'Delicacies'],
        quantity: 2,
        active: true
      },
    ];
    return (
      <div className="managaeProducts">
        <div className="managaeProductsContent">
          <div className="table-body">
            <DataTable
              title="Y Hotel - Manage Products"
              columns={YHotelManageProduct}
              data={data}
              progressPending={this.state.loadingData}
              progressComponent={tableLoader()}
              progressCentered={true}
              sortIcon={<MdKeyboardArrowDown />}
              pagination={true}
              noDataComponent=<div className="table-noResultsFound">No results found.</div>
              disabled={this.state.loadingData ? true : false}
              paginationPerPage={this.state.paginationInitRows}
              selectableRows
            />
          </div>
        </div>
      </div>
    );
  }
}
export default AdminManage;
