import React from 'react';
import { useLocation } from 'react-router-dom';

const ImageDisplayComponent = () => {
  const location = useLocation();
  const imageSrc = location?.state?.imageSrc || '';

  return (
    <div>
      <h2>Image Display Component</h2>
      <img src={imageSrc} alt="ReceivedImage" />
    </div>
  );
};

export default ImageDisplayComponent;
