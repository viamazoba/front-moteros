/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import './Loading.scss';
import { Bars } from 'react-loader-spinner';

export const Loading = () => {
  return (
    <div className="spinner-container">
      <div className="spinner-container__spinner">
        <h2>Loading</h2>
        <Bars
          height="80"
          width="80"
          color="#f13f4b"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible
        />
      </div>
    </div>
  );
};

export default Loading;