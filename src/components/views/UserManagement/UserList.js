import React, {Component} from 'react';
import DataTable from 'react-data-table-component';
import { FaCheck, FaSearch, FaEdit, FaTrash, FaTimes } from 'react-icons/fa';

import '../../../css/views/UserManagement/UserList.css';
import '../../../css/views/DataTable/DataTable.css';
import '../../../css/views/ConfirmationModal/ConfirmationModal.css';

const classedFaCheck = <FaCheck className="classedFaCheck" />;
const classedFaTimes = <FaTimes className="classedFaTimes" />

class UserList extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      checkedRows: [],
      toggledClearRows: false,
      openConfirmationModal: false,
      confirmationModalMsg: 'Are you sure you want to delete?',
      toBeDeleted: {},
      searchString: '',
      filtered: []
    }
  }



  componentWillMount(){
    this.setState({
      data: [
        {
          id: 1,
          accountName: 'Administrator',
          userName: 'Admin',
          role: 'Admin',
          userGroup: 'Default',
          source: 'Local',
          validity: classedFaCheck
        },
        {
          id: 2,
          accountName: 'Administrator',
          userName: 'Maris',
          role: 'Admin',
          userGroup: 'Default',
          source: 'Local',
          validity: classedFaTimes
        },
        {
          id: 3,
          accountName: 'Administrator',
          userName: 'Dency',
          role: 'Admin',
          userGroup: 'Default',
          source: 'Local',
          validity: classedFaCheck
        },
        {
          id: 4,
          accountName: 'Administrator',
          userName: 'Ryan',
          role: 'Admin',
          userGroup: 'Default',
          source: 'Local',
          validity: classedFaCheck
        },
        {
          id: 5,
          accountName: 'Administrator',
          userName: 'Reginald',
          role: 'Admin',
          userGroup: 'Default',
          source: 'Local',
          validity: classedFaTimes
        },
      ]
    });
  }

  componentDidMount(){
    this.setState({
      filtered: this.state.data
    })
  }

  confirmationModalToggler = async (item) => {
    await this.setState({
      openConfirmationModal: !this.state.openConfirmationModal,
      toBeDeleted: item
    });
  }

  deleteRow = async () => {
    await this.setState({
      data: this.state.data.filter((selected) => {
        return selected !== this.state.toBeDeleted
      }),
      filtered: this.state.filtered.filter((selected) => {
        return selected !== this.state.toBeDeleted
      }),
      toggledClearRows: !this.state.toggledClearRows
    });
    await this.confirmationModalToggler();
    // Add confirmation popup
  }

  rowSelection = async (items) => {
    // console.log('Selected Rows', items.selectedRows);
    await this.setState({
      checkedRows: items.selectedRows
    });
  }


  handleClearRows = async (checkedRows) => {
    if(checkedRows === []){
      alert('Empty Array!');
    }else {
      for(let i = 0; i < checkedRows.length; i++){
        // console.log(checkedRows[i]);
        await this.setState({
          data: this.state.data.filter((selected) => {
            return selected !== checkedRows[i]
          }),
          filtered: this.state.filtered.filter((selected) => {
            return selected !== checkedRows[i]
          }),
          toggledClearRows: !this.state.toggledClearRows,
        });
      }
      // console.log('state checked rows', checkedRows);
      // console.log('data', this.state.data);
    }
  }

  filterData = () => {
    let data = this.state.data;
    data = data.filter((item) => {
      return item.userName.toLowerCase().search(this.state.searchString.toLowerCase()) !== -1;
    });
    this.setState({ filtered: data });
  }

  searchDataOnChange = async (e) => {
    await this.setState({
      searchString: e.target.value
    });
    this.filterData();
  }



  render(){

    const columns = [
      {
        name: 'Account Name',
        selector: 'accountName',
        sortable: true,
      },
      {
        name: 'Username',
        selector: 'userName',
        sortable: true,
        center: true
      },
      {
        name: 'Role',
        selector: 'role',
        sortable: true,
        center: true
      },
      {
        name: 'User Group',
        selector: 'userGroup',
        sortable: true,
        center: true
      },
      {
        name: 'Source',
        selector: 'source',
        sortable: true,
        center: true
      },
      {
        name: 'Validity',
        selector: 'validity',
        center: true
      },
      {
        cell: item => (
          <div className="actionButtons">
            <div className="edit"><FaEdit /></div>
            <div className="delete" onClick={() => this.confirmationModalToggler(item)}><FaTrash /></div>
          </div>
        ),
        name: 'Action',
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
      }
    ]
    let userListSubHeaderDiv =
    <div className='subHeaderDiv'>
      <div className="searchBar">
        <input
          type="text"
          ref="searchBarRef"
          placeholder="Search..."
          onChange={this.searchDataOnChange}
          value={this.state.searchString}
        />
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
      <div className="userList">
        <div className={this.state.openConfirmationModal ? 'confirmationModal' : 'confirmationModal hidden'}>
          <div className="confirmationModalContent">
            {this.state.confirmationModalMsg}
            <div className="confirmationButtonDiv">
              <button onClick={this.confirmationModalToggler}>Cancel</button>
              <button onClick={this.deleteRow}>Yes</button>
            </div>
          </div>
        </div>
        <DataTable
          title="User Group List"
          columns={columns}
          data={this.state.filtered}
          className="dxs_dataTable"
          noDataComponent="No Data"
          selectableRows
          pagination
          highlightOnHover
          subHeader
          subHeaderAlign="left"
          onTableUpdate={this.rowSelection}
          clearSelectedRows={this.state.toggledClearRows}
          contextActions={<div className="deleteAll" onClick={() => this.handleClearRows(this.state.checkedRows)}><FaTrash />Delete Selected Items</div>}
          subHeaderComponent={userListSubHeaderDiv}
        />
      </div>
    );
  }
}
export default UserList;
