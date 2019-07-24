import React, {Component} from 'react';
import { Row, Col, Container, Tooltip } from 'reactstrap';
import { MdViewList, MdViewModule, MdModeEdit, MdLibraryAdd } from 'react-icons/md';
import StarRatings from 'react-star-ratings';

import '../../../../css/views/Gallery/Yhotel/index.css';

class YhotelGallery extends Component {
  constructor(props){
    super(props);
    this.state =  {
      activeTab: 0,
      selectedBranch: [],
      branches: []
    }
  }

  componentWillMount(){
    this.setState({
      branches: [
        {
          name: 'Club Climax',
          featuredPhotos: [
            {img: require('../../../../resources/images/sample-feature-photo.jpg'), rating: 1, likes: 82},
            {img: require('../../../../resources/images/sample-feature-photo.jpg'), rating: 2, likes: 300},
            {img: require('../../../../resources/images/sample-feature-photo.jpg'), rating: 3, likes: 201},
            {img: require('../../../../resources/images/sample-feature-photo.jpg'), rating: 4, likes: 20},
          ],
          collectionPhotos: [
            {img: require('../../../../resources/images/beach-landscape.jpg'), rating: 5, likes: 20},
            {img: require('../../../../resources/images/beach-landscape.jpg'), rating: 3, likes: 102},
            {img: require('../../../../resources/images/beach-landscape.jpg'), rating: 4, likes: 55},
          ]
        },
        {
          name: 'Station Y',
          featuredPhotos: [
            {img: require('../../../../resources/images/sample-feature-photo.jpg'), rating: 4, likes: 82},
            {img: require('../../../../resources/images/sample-feature-photo.jpg'), rating: 3, likes: 300},
            {img: require('../../../../resources/images/sample-feature-photo.jpg'), rating: 2, likes: 201},
            {img: require('../../../../resources/images/sample-feature-photo.jpg'), rating: 1, likes: 20},
          ],
          collectionPhotos: [
            {img: require('../../../../resources/images/beach-landscape.jpg'), rating: 5, likes: 20},
            {img: require('../../../../resources/images/beach-landscape.jpg'), rating: 3, likes: 102},
            {img: require('../../../../resources/images/beach-landscape.jpg'), rating: 4, likes: 55},
          ]
        },
        {
          name: 'Beach Craft',
          featuredPhotos: [
            {img: require('../../../../resources/images/sample-feature-photo.jpg'), rating: 2, likes: 82},
            {img: require('../../../../resources/images/sample-feature-photo.jpg'), rating: 2, likes: 300},
            {img: require('../../../../resources/images/sample-feature-photo.jpg'), rating: 2, likes: 201},
            {img: require('../../../../resources/images/sample-feature-photo.jpg'), rating: 2, likes: 20},
          ],
          collectionPhotos: [
            {img: require('../../../../resources/images/beach-landscape.jpg'), rating: 5, likes: 20},
            {img: require('../../../../resources/images/beach-landscape.jpg'), rating: 3, likes: 102},
            {img: require('../../../../resources/images/beach-landscape.jpg'), rating: 4, likes: 55},
          ]
        },
      ]
    });
  }


  setTabActive = async e => {
    await this.setState({ branches: this.state.branches, activeTab: e })
  }

  tooltipToggler = async target => {
    await this.setState({
      [target]: !this.state[target]
    });
  }

  render(){
    const {
      activeTab,
      branches
    } = this.state;

    const controlIcons = [
      {icon: <MdLibraryAdd />, tooltip: 'Add Photos'},
      {icon: <MdModeEdit />, tooltip: 'Edit Photos'},
      {icon: <MdViewList />, tooltip: 'List View'},
      {icon: <MdViewModule />, tooltip: 'Grid View'},
    ]

    return (
      <div className="yhotelGallery">
        <div className="yhotelGalleryContent">
          <div className="logo-banner">
            <img src={require('../../../../resources/images/yhotel-beach-banner.jpg')} className="banner" alt=""/>
            <div className="logo">
              <img src={require('../../../../resources/images/yhotel.png')} alt=""/>
            </div>
          </div>
          <Container>
            <div className="controls">
                <ul className="gallery-tabs">
                  {
                    branches.map(( item, index ) => {
                      return (
                        <li
                          className={activeTab === index ? 'active' : ''}
                          key={index}
                          onClick={() => this.setTabActive(index)}
                          >
                          {item.name}
                        </li>
                      )
                    })
                  }
                </ul>
                <div className="sorts">
                  {
                    controlIcons.map(( item, index ) => {
                      let uniq = `tooltip${index}`;
                      return (
                        <div key={index}>
                          <div className="icons" id={uniq}>{item.icon}</div>
                          <Tooltip
                            placement="top"
                            isOpen={this.state[uniq]}
                            target={uniq}
                            toggle={() => this.tooltipToggler(uniq)}
                            >
                            {item.tooltip}
                          </Tooltip>
                        </div>
                      )
                    })
                  }
                </div>
            </div>
            <div className="featured-photos">
              <h5>Featured Photos</h5>
              <Row>
                {
                  branches[activeTab].featuredPhotos.map(( item, index ) => {
                    return (
                      <Col lg="3" className="eachPhoto" key={index}>
                        <div className="inside-info">
                          <div className="rate-star">
                            <StarRatings
                              rating={item.rating}
                              starDimension="16px"
                              starSpacing="2px"
                              starEmptyColor="rgb(83, 92, 104, 0.3)"
                              starRatedColor="#f9ca24"
                              numberOfStars={5}
                              name="rating"
                            />
                          </div>
                        </div>
                        <div className="imgdiv">
                          <img src={item.img} alt=""/>
                        </div>
                      </Col>
                    )
                  })
                }
              </Row>

            </div>
            <div className="image-collections">
              <h5>Photos</h5>
              <Row>
                {
                  branches[activeTab].collectionPhotos.map(( item, index ) => {
                    return (
                      <Col lg="4" className="eachPhoto" key={index}>
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
    )
  }
}
export default YhotelGallery;
