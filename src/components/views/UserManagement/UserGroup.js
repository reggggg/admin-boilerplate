import React, {Component} from 'react';
import DataTable from 'react-data-table-component';
import { FaEdit, FaTrash, FaSearch } from 'react-icons/fa';

import '../../../css/views/UserManagement/UserGroup.css';
import '../../../css/views/DataTable/DataTable.css';


class UserGroup extends Component {
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
          id: 1,
          name: 'Reginald',
          user: 'Administrator',
          groupAdministrator: 'Member',
          comment: 'Test User',
        },
        {
          id: 2,
          name: 'Maris',
          user: 'Administrator',
          groupAdministrator: 'Administrator',
          comment: 'Test Admin',
        },
        {
          id: 3,
          name: 'Dency',
          user: 'Administrator',
          groupAdministrator: 'Member',
          comment: 'Test User',
        },
      ]
    });
  }

  actionOnEdit = (item) => {
    console.log(item);
  }
  render(){

    const columns = [
      {
        name: 'Name',
        selector: 'name',
        sortable: true,
      },
      {
        name: 'User',
        selector: 'user',
        sortable: true,
      },
      {
        name: 'Group Administrator',
        selector: 'groupAdministrator',
        sortable: true,
        right: true,
      },
      {
        name: 'Comment',
        selector: 'comment',
        sortable: true,
        right: true,
      },
      {
        cell: (item, index) => (
          <div className="userGroupActionButtons">
            <div className="edit" onClick={() => this.actionOnEdit(item)}><FaEdit /></div>
            <div className="delete"><FaTrash /></div>
          </div>
        ),
        name: 'Action',
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
      },

    ];
    let userGroupSubHeaderDiv =
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
      <div className="userGroup">
        <DataTable
        title="User Group"
        columns={columns}
        data={this.state.data}
        className="dxs_dataTable"
        noDataComponent="No Data"
        selectableRows
        pagination
        highlightOnHover
        subHeader
        subHeaderAlign="left"
        subHeaderComponent={userGroupSubHeaderDiv}
      />
      </div>
    );
  }
}
export default UserGroup;
