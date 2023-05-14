import { Component } from 'react';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { fetchRequest } from './fetchRequest';
import * as Styled from '../styled';

export class App extends Component {
  state = {
    galleryArray: [],
  };
  handleSubmit = query => {
    fetchRequest(query).then(response => {
      this.setState({ galleryArray: response.hits });
    });
  };

  render() {
    const { handleSubmit, state } = this;

    return (
      <Styled.App>
        <Searchbar onSubmit={handleSubmit} />
        <ImageGallery galleryArray={state.galleryArray} />
      </Styled.App>
    );
  }
}
