import React, {Component} from 'react';
import { Row, Col, Container } from 'reactstrap';
import { MdViewList, MdViewModule, MdModeEdit } from 'react-icons/md';
import StarRatings from 'react-star-ratings';

import '../../../css/views/Gallery/index.css';

class Gallery extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeTab: 0
    }
  }


  setTabActive = async e => {
    await this.setState({ activeTab: e })
  }
  render(){
    const branches = [
      {name: 'Club Climax'},
      {name: 'Station Y'},
      {name: 'Beach Craft'},
    ]
    const featurePhotos = [
      {
        img: require('../../../resources/images/sample-feature-photo.jpg'),
        rating: 5,
        likes: 20
      },
      {
        img: require('../../../resources/images/sample-feature-photo.jpg'),
        rating: 2,
        likes: 20
      },
      {
        img: require('../../../resources/images/sample-feature-photo.jpg'),
        rating: 3,
        likes: 20
      },
      {
        img: require('../../../resources/images/sample-feature-photo.jpg'),
        rating: 5,
        likes: 20
      },
    ]
    return (
      <div className="gallery">
        <div className="galleryContent">
          <div className="logo-banner">
            <img src={require('../../../resources/images/yhotel-beach-banner.jpg')} className="banner" alt=""/>
            <div className="logo">
              <img src={require('../../../resources/images/yhotel.png')} alt=""/>
            </div>
          </div>
          <Container>
            <div className="controls">
                <ul className="gallery-tabs">
                  {
                    branches.map(( item, index ) => {
                      return (
                        <li className={this.state.activeTab === index ? 'active' : ''} key={index} onClick={() => this.setTabActive(index)}>
                          {item.name}
                        </li>
                      )
                    })
                  }
                </ul>
                <div className="sorts">
                  <div className="icons"><MdModeEdit /></div>
                  <div className="icons"><MdViewList /></div>
                  <div className="icons"><MdViewModule /></div>
                </div>
            </div>
            <div className="featured-photos">
              <h5>Featured Photos</h5>
              <Row>
                {
                  featurePhotos.map(( item, index ) => {
                    return (
                      <Col lg="3" className="eachPhoto" key={index}>
                        <div className="inside-info">
                          <div className="rate-star">
                            <StarRatings
                              rating={item.rating}
                              starDimension="16px"
                              starSpacing="2px"
                              starEmptyColor="rgb(83,92,104,0.3)"
                              starRatedColor="#f9ca24"
                              numberOfStars={5}
                              name='rating'
                            />
                          </div>
                        </div>
                        <div className="imgdiv">
                          <img src={item.img} alt="" />
                        </div>
                      </Col>
                    )
                  })
                }
              </Row>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}
export default Gallery;
