/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import './ImageLoading.scss';
import { ThreeDots } from 'react-loader-spinner';

export const ImageLoading = () => {
  return (
    <div className="spinner-image-container">
      <div className="spinner-image-container__spinner">
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#EB5757"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible
        />
      </div>
    </div>
  );
};

export default ImageLoading;