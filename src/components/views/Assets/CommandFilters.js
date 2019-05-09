import React, {Component} from 'react';
import { FaEdit, FaTrash, FaSearch } from 'react-icons/fa';
import DataTable from 'react-data-table-component';


import '../../../css/views/Assets/CommandFilters.css';
import '../../../css/views/DataTable/DataTable.css';

class CommandFilters extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
    }
  }

  componentDidMount(){
    this.setState({
      data: [
        {
          name: <span className="commandFiltersName">Test 1</span>,
          rules: 1,
          user: 'User Test 1',
          comment: 'comment test',
        },
        {
          name: <span className="commandFiltersName">Test 2</span>,
          rules: 2,
          user: 'User Test 2',
          comment: 'comment test',
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
        name: 'Rules',
        selector: 'rules',
        sortable: true,
      },
      {
        name: 'User',
        selector: 'user',
        sortable: true,
      },
      {
        name: 'Comment',
        selector: 'comment',
        sortable: true,
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
    let commandFiltersSubHeaderDiv =
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
      <div className="commandFilters">
        <DataTable
          title="Command Filters"
          columns={columns}
          data={this.state.data}
          className="dxs_dataTable"
          noDataComponent="No Data"
          selectableRows
          pagination
          highlightOnHover
          subHeader
          subHeaderAlign="left"
          subHeaderComponent={commandFiltersSubHeaderDiv}
        />
      </div>
    );
  }
}
export default CommandFilters;
