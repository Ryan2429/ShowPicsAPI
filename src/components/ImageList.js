import React from 'react';
import './ImageList.css';

const ImageList = props => {
   const images = props.images.map(({ description, id, urls }) => {      //destructured images into cleaner code
        return <img alt={description} key={id} src={urls.regular} />
    });
    return <div className='image-list'>{images}</div>
}

export default ImageList;