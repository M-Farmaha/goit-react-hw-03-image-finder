import * as Styled from 'styled';

export const ImageGalleryItem = ({ webformatURL, tags }) => {
  return (
    <Styled.ImageGalleryItem>
      <Styled.ImageGalleryImg src={webformatURL} alt={tags} />
    </Styled.ImageGalleryItem>
  );
};
