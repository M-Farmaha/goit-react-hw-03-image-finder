import { Component } from 'react';
import * as Styled from 'styled';

export class ImageGalleryItem extends Component {
  render() {
    const { webformatURL, tags } = this.props;
    return (
      <Styled.ImageGalleryItem>
        <Styled.ImageGalleryImg src={webformatURL} alt={tags} />
      </Styled.ImageGalleryItem>
    );
  }
}
