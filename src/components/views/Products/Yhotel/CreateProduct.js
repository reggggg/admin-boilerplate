import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';
import { MdImage, MdAdd, MdArrowUpward, MdDelete } from 'react-icons/md';
import Select from 'react-select';
import '../../../../css/views/Products/Yhotel/CreateProduct.css';

class CreateProduct extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedImage: '',
      categoriesSelected: [],
      isErr: false,
      errMsg: ''
    }
  }



  chooseCategory = async e => {
    await this.setState({
      categoriesSelected: e
    });
  }

  formOnChange = async e => {
    await this.setState({
      [e.target.name]: e.target.value,
      isErr: false
    });
  }

  validateForms = () => {
    const {
      name,
      description,
      quantity,
      type,
      selectedImage
    } = this.state;
    if(!name || !description || !quantity || !type || !selectedImage){
      this.setState({
        isErr: true,
        errMsg: 'All fiends are required!'
      });
    }else {
      this.saveNewProduct();
    }
  }

  saveNewProduct = () => {
    alert('save');
  }

  imageSelect = async e => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    if(!file){
      console.log('meow');
    }else {
      if(e.target.files[0].size > 307200){
        alert('Image size is too big!');
      }else {
        reader.onload = async () => {
          await this.setState({
            selectedImage: reader.result
          });
          console.log('state', this.state.selectedImage);
          console.log('res', reader.result);
        }
        reader.readAsDataURL(file);
      }
    }
  }

  removeImage = async () => {
    await this.setState({
      selectedImage: ''
    });
    console.log('removed = ', this.state.selectedImage);
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
              <div className={this.state.isErr ? 'err' : 'err hidden'}>
                {this.state.errMsg}
              </div>
              <div className="inputs">
                <h6>Name</h6>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  onChange={this.formOnChange}
                />
              </div>
              <div className="inputs">
                <h6>Description</h6>
                <textarea
                  type="text"
                  rows="3"
                  placeholder="Description"
                  name="description"
                  onChange={this.formOnChange}
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
                      name="quantity"
                      onChange={this.formOnChange}
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
                      onChange={this.formOnChange}
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
              <button className="save-new-product" onClick={this.validateForms}><MdAdd />Add New Product</button>
            </Col>
            <Col lg="3">
              <div className="upload-image">
                <div className="icon-div">
                  {!this.state.selectedImage ? <MdImage /> : <img src={this.state.selectedImage} className="display-image" alt="" />}
                </div>
                <div className="upload-remove">
                  {!this.state.selectedImage ? <span> </span> : <span onClick={this.removeImage}><MdDelete />Remove Image</span>}
                  <label htmlFor="create-product-image"><MdArrowUpward />Upload Image</label>
                </div>
                <input type="file" onChange={this.imageSelect} accept="image/png, image/jpeg" id="create-product-image" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}
export default CreateProduct;
