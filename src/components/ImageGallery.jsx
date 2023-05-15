import { ImageGalleryItem } from './ImageGalleryItem';
import * as Styled from 'styled';

export const ImageGallery = ({ galleryArray }) => {
  return (
    <Styled.ImageGallery>
      {galleryArray.map(el => (
        <ImageGalleryItem key={el.id} {...el} />
      ))}
    </Styled.ImageGallery>
  );
};
