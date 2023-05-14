import { Component } from 'react';
import { ImageGalleryItem } from './ImageGalleryItem';
import * as Styled from 'styled';

export class ImageGallery extends Component {
  render() {
    const { galleryArray } = this.props;
    return (
      <Styled.ImageGallery>
        {galleryArray.map(el => (
          <ImageGalleryItem key={el.id} {...el} />
        ))}
      </Styled.ImageGallery>
    );
  }
}
