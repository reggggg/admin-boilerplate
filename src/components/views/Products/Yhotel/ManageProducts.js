import React, {Component} from 'react';
import DataTable from 'react-data-table-component';
import { YHotelManageProduct } from '../../../tableColumns';
import { Modal, Row, Col } from 'reactstrap';
import moment from 'moment';
import Select from 'react-select';
import Switch from "react-switch";

import { MdKeyboardArrowDown, MdClose, MdSave, MdDeleteForever, MdFileUpload } from 'react-icons/md';
import '../../../../css/views/Products/Yhotel/ManageProducts.css';
import '../../../../css/views/DataTable/DataTable.css';
import tableLoader from '../../../../css/helpers/tableLoader';


class AdminManage extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      selectedRow: {},
      selectedRowIndex: null,
      openModal: false,
      loadingData: false,
      paginationInitRows: 10
    }
  }

  componentWillMount(){
    this.setState({
      loadingData: true,
      data: [
        {
          id: 1,
          image: require('../../../../resources/images/carbonara.jpeg'),
          name: 'Donut',
          description: 'The Best Donut in Town!',
          category: [
            {
              value: 'pasta',
              label: 'Pasta'
            },
            {
              value: 'delicacy',
              label: 'Delicacy'
            },
            {
              value: 'bread',
              label: 'Bread'
            }
          ],
          quantity: 1222,
          active: false
        },
        {
          id: 2,
          image: require('../../../../resources/images/carbonara.jpeg'),
          name: 'Carbonara',
          description: 'Has the sweet taste that captures the heart!',
          category: [
            {
              value: 'pasta',
              label: 'Pasta'
            },
            {
              value: 'delicacy',
              label: 'Delicacy'
            }
          ],
          quantity: 2,
          active: true
        }
      ]
    });
  }
  componentDidMount(){
    this.setState({
      loadingData: false,
    });
  }


  toggleModal = async (item) => {
    // console.log(item);
    let index = this.state.data.map(x => {
      return x.id;
    }).indexOf(item.id);
    await this.setState({
      openModal: !this.state.openModal,
      selectedRow: item,
      selectedRowIndex: index
    });
  }

  chooseCategory = (allItem) => {
    // console.log('array values ', allItem);
    this.reloadData(allItem);
  }

  reloadData = x => {
    let set = this.state.data;
    set[this.state.selectedRowIndex].category = x;
    this.setState({ data: set });
  }

  toggleItemActiveSwitch = async () => {
    await this.setState({
      selectedRow: {active: !this.state.selectedRow.active},
    });
    console.log(this.state.selectedRow.active);
  }

  render(){
    const categories = [
      { value: 'pasta', label: 'Pasta' },
      { value: 'bread', label: 'Bread' },
      { value: 'delicacy', label: 'Delicacy' },
      { value: 'drinks', label: 'Drinks' },
      { value: 'liquor', label: 'Liquor' },
      { value: 'a', label: 'asdasd' },
      { value: 'b', label: 'asdasdasd' },
      { value: 'c', label: 'asdasdsadasd' },
      { value: 'c', label: 'asdsadasdasdasda' },
    ];
    return (
      <div className="manageProducts">
        <div className="manageProductsContent">
          <div className="table-body">
            <DataTable
              title="Y Hotel - Manage Products"
              columns={YHotelManageProduct}
              data={this.state.data}
              progressPending={this.state.loadingData}
              progressComponent={tableLoader()}
              progressCentered={true}
              sortIcon={<MdKeyboardArrowDown />}
              pagination={true}
              noDataComponent=<div className="table-noResultsFound">No results found.</div>
              disabled={this.state.loadingData ? true : false}
              paginationPerPage={this.state.paginationInitRows}
              selectableRows
              onRowClicked={(item) => this.toggleModal(item)}
            />
          </div>
        </div>
        <Modal isOpen={this.state.openModal}>
          <div className="modal-manage-products">
            <MdClose className="close-modal-absolute" onClick={this.toggleModal} />
            <img src={require('../../../../resources/images/carbonara.jpeg')} alt=""/>
            <div className="info-parent">
              <Row className="info-form">
                <Col md="12">
                  <div className="info-each-row">
                    <span>
                      <h6>Name</h6>
                      <p>Date created:&nbsp;<label>{moment.unix(1563158127).format('l')}</label></p>
                    </span>
                    <input
                      type="text"
                      name="name"
                      defaultValue={this.state.selectedRow.name}
                    />
                  </div>
                  <div className="info-each-row">
                    <span>
                      <h6>Description</h6>
                      <p>Last update:&nbsp;<label>{moment.unix(1563158127).fromNow()}</label></p>
                    </span>
                    <textarea
                      type="text"
                      name="description"
                      rows="3"
                      defaultValue={this.state.selectedRow.description}
                    />
                  </div>
                  <div className="info-each-row">
                    <h6>Category</h6>
                    <Select
                      defaultValue={this.state.selectedRow.category}
                      isMulti
                      onChange={this.chooseCategory}
                      name="category"
                      isClearable={false}
                      options={categories}
                      className="select-multitag"
                      classNamePrefix="select"
                    />
                  </div>
                </Col>
              </Row>
              <Row className="info-form qty_activity">
                <Col md="4">
                  <div className="info-each-row">
                    <h6>Stocks left</h6>
                    <input
                      type="number"
                      name="quantity"
                      min="0"
                      defaultValue={this.state.selectedRow.quantity}
                    />
                  </div>
                </Col>
                <Col md="8">
                  <div className="switch-parent">
                    <label>Set item {this.state.selectedRow.active ? 'Disable' : 'Enable'}</label>
                    <Switch
                      className="switch-item-activity"
                      onChange={this.toggleItemActiveSwitch}
                      checked={!this.state.selectedRow.active ? false : this.state.selectedRow.active} />
                  </div>
                </Col>
              </Row>
              <div className="info-form footer">
                <div className="left">
                  <label htmlFor="manageproducts-file-upload" className="change-image"><MdFileUpload />Change Image</label>
                  <button className="remove"><MdDeleteForever />Remove Item</button>
                  <input type="file" id="manageproducts-file-upload" />
                </div>
                <div className="right">
                  <button className="save"><MdSave />Save</button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
export default AdminManage;
