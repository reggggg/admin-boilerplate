import React, {Component} from 'react';
import DataTable from 'react-data-table-component';
import { FaSearch, FaEdit, FaTrash } from 'react-icons/fa';

import '../../../css/views/Assets/AdminUser.css';
import '../../../css/views/DataTable/DataTable.css';



class AdminUser extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }
  componentDidMount(){
    this.setState({
      data: [
        {
          name: <span className="adminUserName">Test 1</span>,
          userName: 'Test123',
          asset: 1,
          reachable: 1,
          unreachable: 1,
          ratio: <span className="adminUserRatio">{parseFloat(12).toFixed(1) + '%'}</span>,
          comments: 'test test'
        },
        {
          name: <span className="adminUserName">Test 2</span>,
          userName: 'Test123',
          asset: 2,
          reachable: 2,
          unreachable: 2,
          ratio: <span className="adminUserRatio">{parseFloat(15).toFixed(1) + '%'}</span>,
          comments: 'test test'
        },
        {
          name: <span className="adminUserName">Test 3</span>,
          userName: 'Test123',
          asset: 3,
          reachable: 3,
          unreachable: 3,
          ratio: <span className="adminUserRatio">{parseFloat(7).toFixed(1) + '%'}</span>,
          comments: 'test test'
        },
      ]
    });
  }
  render(){
    const columns = [
      {
        name: 'Name',
        selector: 'name',
        sortable: true,
      },
      {
        name: 'Username',
        selector: 'userName',
        sortable: true
      },
      {
        name: 'Asset',
        selector: 'asset',
        sortable: true
      },
      {
        name: 'Reachable',
        selector: 'reachable',
        sortable: true
      },
      {
        name: 'Unreachable',
        selector: 'unreachable',
        sortable: true
      },
      {
        name: 'Ratio',
        selector: 'ratio',
        center: true
      },
      {
        name: 'Comments',
        selector: 'comments',
        center: true
      },
      {
        cell: ( item, index ) => (
          <div className="actionButtons">
            <div className="edit"><FaEdit /></div>
            <div className="delete"><FaTrash /></div>
          </div>
        ),
        name: 'Action',
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
      }
    ];
    let adminUserSubHeaderDiv =
    <div className="subHeaderDiv">
      <div className="searchBar">
        <input type="text" placeholder="Search..."/>
        <FaSearch />
      </div>
      <div className="controlPanelDiv">
        <div className="createUser">
          <button>Create User</button>
        </div>
        <div className="importExport">
          <button>Import</button>
          <button>Export</button>
        </div>
      </div>
    </div>
    return (
      <div className="adminUser">
        <DataTable
          title="Admin User List"
          columns={columns}
          data={this.state.data}
          className="dxs_dataTable"
          noDataComponent="No Data"
          selectableRows
          pagination
          highlightOnHover
          subHeader
          subHeaderAlign="left"
          subHeaderComponent={adminUserSubHeaderDiv}
        />
      </div>
    );
  }
}
export default AdminUser;
