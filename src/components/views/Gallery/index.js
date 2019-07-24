import React, {Component} from 'react';

import YhotelGallery from './Yhotel';
import '../../../css/views/Gallery/index.css';

class Gallery extends Component {


  render(){


    return (
      <div className="gallery">
        <YhotelGallery />
      </div>
    );
  }
}
export default Gallery;
