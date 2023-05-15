import { Component } from 'react';
import * as Styled from 'styled';

export class LoadMoreBtn extends Component {
  handleLoadMoreBtnClick = () => {
    this.props.loadMore();
  };

  render() {
    const { handleLoadMoreBtnClick } = this;
    return (
      <Styled.LoadMoreBtn type="button" onClick={handleLoadMoreBtnClick}>
        Load more
      </Styled.LoadMoreBtn>
    );
  }
}
