import { ThreeDots } from 'react-loader-spinner';
import { LoaderWrapper } from 'styled';

export const Loader = () => {
  return (
    <LoaderWrapper>
      <ThreeDots
        height="40"
        width="80"
        radius="9"
        color="#1198ff"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </LoaderWrapper>
  );
};
