import React, {Component} from 'react';
import DataTable from 'react-data-table-component';
import { AdminAccountRequests } from '../../../tableColumns';

import { MdKeyboardArrowDown } from 'react-icons/md';
import '../../../../css/views/Permissions/Admin/Admin.css';
import '../../../../css/views/DataTable/DataTable.css';
import tableLoader from '../../../../css/helpers/tableLoader';

class AdminRequests extends Component {
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
      },
      {
        id: 2,
        email: 'test.data@ygroup.com',
        firstName: 'Test',
        lastName: 'Data',
        jobPosition: 'AI Tester',
      },
      {
        id: 3,
        email: 'robot@ygroup.com',
        firstName: 'I am',
        lastName: 'Robot',
        jobPosition: 'Robot Man',
      },
    ];
    return (
      <div className="adminManage">
        <div className="adminManageContent">
          <div className="table-body">
            <DataTable
              title="Admin Account Requests"
              columns={AdminAccountRequests}
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
            />
          </div>
        </div>
      </div>
    );
  }
}
export default AdminRequests;
