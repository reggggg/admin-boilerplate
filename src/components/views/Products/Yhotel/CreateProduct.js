import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';
import { MdImage, MdAdd, MdArrowUpward } from 'react-icons/md';
import Select from 'react-select';
import '../../../../css/views/Products/Yhotel/CreateProduct.css';

class CreateProduct extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }



  chooseCategory = () => {

  }

  render() {
    const categories = [
      { value: 'pasta', label: 'Pasta' },
      { value: 'bread', label: 'Bread' },
      { value: 'delicacy', label: 'Delicacy' },
      { value: 'drinks', label: 'Drinks' },
    ];
    return (
      <div className="createProduct">
        <div className="createProductContent">
          <div className="titlebar">
            Y Hotel - Create new Product
          </div>
          <Row className="forms">
            <Col lg="5">
              <div className="inputs">
                <h6>Name</h6>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                />
              </div>
              <div className="inputs">
                <h6>Description</h6>
                <textarea
                  type="text"
                  rows="3"
                  placeholder="Description"
                  name="description"
                />
              </div>
              <Row className="split">
                <Col md="6">
                  <div className="inputs">
                    <h6>Qty</h6>
                    <input
                      type="number"
                      min="0"
                      placeholder="Qty"
                      name="quanitity"
                    />
                  </div>
                </Col>
                <Col md="6">
                  <div className="inputs">
                    <h6>Type</h6>
                    <input
                      type="text"
                      placeholder="Cuisine / Type"
                      name="type"
                    />
                  </div>
                </Col>
              </Row>
              <div className="inputs">
                <h6>Category</h6>
                <Select
                  isMulti
                  onChange={this.chooseCategory}
                  name="category"
                  isClearable={false}
                  options={categories}
                  className="select-multitag"
                  classNamePrefix="select"
                />
              </div>
              <button className="save-new-product"><MdAdd />Add New Product</button>
            </Col>
            <Col lg="3">
              <div className="upload-image">
                <div className="icon-div">
                  <MdImage />
                </div>
                <label htmlFor="create-product-image"><MdArrowUpward />Upload Image</label>
                <input type="file" id="create-product-image" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}
export default CreateProduct;
