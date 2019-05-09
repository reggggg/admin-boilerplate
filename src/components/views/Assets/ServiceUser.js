import React, {Component} from 'react';
import DataTable from 'react-data-table-component';
import { FaSearch, FaEdit, FaTrash } from 'react-icons/fa';

import '../../../css/views/Assets/ServiceUser.css';
import '../../../css/views/DataTable/DataTable.css';

class ServiceUser extends Component {
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
          name: <span className="serviceUserName">Test 1</span>,
          userName: 'Test123',
          comments: 'test test'
        },
        {
          name: <span className="serviceUserName">Test 2</span>,
          userName: 'Test123',
          comments: 'test test'
        },
        {
          name: <span className="serviceUserName">Test 3</span>,
          userName: 'Test123',
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
        name: 'Comments',
        selector: 'comments',
        sortable: true
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
    let serviceUserSubHeaderDiv =
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
      <div className="serviceUser">
        <DataTable
          title="Service User List"
          columns={columns}
          data={this.state.data}
          className="dxs_dataTable"
          noDataComponent="No Data"
          selectableRows
          pagination
          highlightOnHover
          subHeader
          subHeaderAlign="left"
          subHeaderComponent={serviceUserSubHeaderDiv}
        />
      </div>
    );
  }
}
export default ServiceUser;
