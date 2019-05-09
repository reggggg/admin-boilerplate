import React, {Component} from 'react';
import DataTable from 'react-data-table-component';
import { FaSearch, FaEdit, FaTrash } from 'react-icons/fa';

import '../../../css/views/Assets/Labels.css';
import '../../../css/views/DataTable/DataTable.css';

class Labels extends Component {
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
          name: <span className="labelsName">Test 1</span>,
          value: 1,
          asset: 1,
        },
        {
          name: <span className="labelsName">Test 2</span>,
          value: 2,
          asset: 2,
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
        name: 'Value',
        selector: 'value',
        sortable: true,
      },
      {
        name: 'Asset',
        selector: 'asset',
        sortable: true,
      },
      {
        cell: ( item ,index ) => (
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
    let labelsSubHeaderDiv =
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
      <div className="labels">
        <DataTable
          title="Label List"
          columns={columns}
          data={this.state.data}
          className="dxs_dataTable"
          noDataComponent="No Data"
          selectableRows
          pagination
          highlightOnHover
          subHeader
          subHeaderAlign="left"
          subHeaderComponent={labelsSubHeaderDiv}
        />
      </div>
    );
  }
}
export default Labels;
