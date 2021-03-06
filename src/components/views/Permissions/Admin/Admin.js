import React, {Component} from 'react';
import DataTable from 'react-data-table-component';
import { AdminManagement } from '../../../tableColumns';

import { MdKeyboardArrowDown } from 'react-icons/md';
import '../../../../css/views/Permissions/Admin/Admin.css';
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
        email: 'reginald.pabilonia@ygroup.com',
        firstName: 'Reginald',
        lastName: 'Pabilonia',
        jobPosition: 'Web Developer',
        role: 'Super Admin'
      },
      {
        id: 2,
        email: 'test.data@ygroup.com',
        firstName: 'Test',
        lastName: 'Data',
        jobPosition: 'AI Tester',
        role: 'Admin'
      },
    ];
    return (
      <div className="adminManage">
        <div className="adminManageContent">
          <div className="table-body">
            <DataTable
              title="Admin Management"
              columns={AdminManagement}
              data={data}
              progressPending={this.state.loadingData}
              progressComponent={tableLoader()}
              progressCentered={true}
              sortIcon={<MdKeyboardArrowDown />}
              pagination={true}
              overflowY={true}
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
